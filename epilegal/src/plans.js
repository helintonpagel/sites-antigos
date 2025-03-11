document.addEventListener("DOMContentLoaded", () => new Plans());

function find(arg) {
    if (typeof arg === "object") {
        return new Finder([arg]);
    }
    else {
        return new Finder(
            [].slice.call(document.getElementsByClassName(arg))
        );
    }
}

class Finder {
    constructor(items = []) {
        this.items = items;
    }

    get length() {
        return this.items.length;
    }

    find(name) {
        return this.fold(
            (element, partial) => {
                return partial.push(element.getElementsByClassName(name))
            },
            new Finder()
        );
    }

    fold(callback, partial = null) {
        for (const element of this.items) {
            partial = callback(element, partial);
        }

        return partial;
    }

    push(items) {
        return new Finder(
            this.items.concat([].slice.call(items))
        );
    }

    bind(binding, callback, capture = false) {
        this.fold(element => {
            element.addEventListener(binding, callback, capture)
        });
    }

    unbind(binding, callback, capture = false) {
        this.fold(element => {
            element.removeEventListener(binding, callback, capture)
        });
    }

    bindAll(bindlst, callback, capture = false) {
        for (const binding of bindlst) {
            this.bind(binding, callback, capture);
        }
    }

    item(index) {
        return this.items[index];
    }

    add(name) {
        this.fold(element => element.classList.add(name));
    }

    del(name) {
        this.fold(element => element.classList.remove(name));
    }

    delAll(names) {
        for (const name of names) { this.del(name); }
    }

    has(name) {
        return this.item.length > 0 && this.item(0).classList.contains(name);
    }

    toggle(name, state) {
        return this.fold(element => element.classList.toggle(name, state));
    }
}

class Plans {
    constructor() {
        const element = find("plans").item(0);

        if (element != undefined) {
            this.widget = new Finder([element]);

            if (this.initialize() === true) {
                this.widget.find("plans-button--next").bind("click", this.nextItem.bind(this));
                this.widget.find("plans-button--back").bind("click", this.prevItem.bind(this));

                this.widget.find("plans__context").bind("touchstart", this.startTouch.bind(this));
            }
        }
    }

    get length() {
        return this.widget.find("plans__item").items.length;
    }

    get offset() {
        const list = this.widget.find("plans__list").item(0);
        const item = this.widget.find("plans__item").item(0);
        
        if (list !== undefined && item !== undefined) {
            return Math.round(list.getBoundingClientRect().width / item.getBoundingClientRect().width);
        }
        else {
            return NaN;
        }
    }

    initialize() {
        if (this.length > 0) {
            const offset = this.offset;

            if (offset !== NaN && offset !== Infinity) {
                this.selectItem(0)
                find(window).bindAll(["resize", "load"], () => this.selectItem(this.index));

                return true;
            }
        }

        return false;
    }

    nextItem() {
        this.selectItem(this.index + 1);
    }

    prevItem() {
        this.selectItem(this.index - 1);
    }

    selectItem(index) {
        const module = this.length - this.offset;

        this.index = index < 0 ? 0 : index > module ? module : index;

        this.widget.find("plans-button--back").toggle("plans-button--hidden", this.index == 0);
        this.widget.find("plans-button--next").toggle("plans-button--hidden", this.index == module);

        this.transform();
    }

    transform() {
        const element = this.widget.find("plans__list").item(0);
        if (element !== undefined) {
            element.style["transform"] = `translate(${0 - this.index * 100 / this.offset}%)`;
            
        }
    }

    startTouch(event) {
        this.touchStart = event.targetTouches[0];

        if (this.boundCheckTouch === undefined) {
            this.boundCheckTouch = this.checkTouch.bind(this);
        }

        this.widget.find("plans__context").bind("touchmove", this.boundCheckTouch);
    }

    checkTouch(event) {
        const offset = this.touchStart.screenX - event.targetTouches[0].screenX;

        if (Math.abs(offset) > 50) {
            if (offset > 50) {
                this.nextItem();
            }
            else {
                this.prevItem();
            }

            this.widget.find("plans__context").unbind("touchmove", this.boundCheckTouch);
        }
    }
}