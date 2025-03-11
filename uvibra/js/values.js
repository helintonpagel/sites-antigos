class ValuesWidget {
    constructor() {
        const element = find("values-widget").item(0);

        if (element != undefined) {
            this.widget = new Finder([element]);

            if (this.initialize() === true) {
                this.widget.find("values-widget__next").bind("click", this.nextItem.bind(this));
                this.widget.find("values-widget__prev").bind("click", this.prevItem.bind(this));

                this.widget.find("values-widget__pillar").bind("touchstart", this.startTouch.bind(this));
            }
        }
    }

    get length() {
        return this.widget.find("values-widget__item").items.length;
    }

    get offset() {
        const list = this.widget.find("values-widget__list").item(0);
        const item = this.widget.find("values-widget__item").item(0);
        
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

        this.widget.find("values-widget__prev").find("chevron").toggle("chevron--hidden", this.index == 0);
        this.widget.find("values-widget__next").find("chevron").toggle("chevron--hidden", this.index == module);

        this.transform();
    }

    transform() {
        const element = this.widget.find("values-widget__list").item(0);
        if (element !== undefined) {
            element.style["transform"] = `translate(${0 - this.index * 100 / this.offset}%)`;
            
        }
    }

    startTouch(event) {
        this.touchStart = event.targetTouches[0];

        if (this.boundCheckTouch === undefined) {
            this.boundCheckTouch = this.checkTouch.bind(this);
        }

        this.widget.find("values-widget__pillar").bind("touchmove", this.boundCheckTouch);
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

            this.widget.find("values-widget__pillar").unbind("touchmove", this.boundCheckTouch);
        }
    }
}