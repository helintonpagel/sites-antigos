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