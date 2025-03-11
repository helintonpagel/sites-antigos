document.addEventListener("DOMContentLoaded", () => new Carousel());

class Carousel {
    constructor() {
        this.widget = document.querySelector(".plans");

        if (this.widget !== null) { // refactor it LATER
            this.select(0);

            const action = {
                ArrowLeft: () => this.select(this.index - 1), ArrowRight: () => this.select(this.index + 1)
            };

            this.widget.addEventListener("keydown", event => {
                if (action[event.key] != null) { action[event.key](); };
            });

            this.widget.querySelectorAll(".plans__control").forEach(element => {
                element.addEventListener("touchstart", this.startTouch.bind(this));
            });

            this.widget.querySelector(".plans-button--back").addEventListener("click", () => this.select(this.index - 1));
            this.widget.querySelector(".plans-button--next").addEventListener("click", () => this.select(this.index + 1));
        }
    }

    startTouch(event) {
        this.touchStart = event.targetTouches[0];

        if (this.boundCheckTouch === undefined) {
            this.boundCheckTouch = this.checkTouch.bind(this);
        }

        this.widget.querySelectorAll(".plans__control").forEach(element => {
            element.addEventListener("touchmove", this.boundCheckTouch);
        });
    }

    checkTouch(event) {
        const offset = this.touchStart.screenX - event.targetTouches[0].screenX;

        if (Math.abs(offset) > 50) {
            if (offset > 50) {
                this.select(this.index + 1);
            }
            else {
                this.select(this.index - 1);
            }

            this.widget.querySelectorAll(".plans__control").forEach(element => {
                element.removeEventListener("touchmove", this.boundCheckTouch);
            });
        }
    }

    get length() {
        return this.widget.querySelectorAll(".plans__item").length;
    }

    get offset() {
        const list = this.widget.querySelector(".plans__list");
        const item = this.widget.querySelector(".plans__item");

        if (list !== null && item !== null) {
            return Math.round(list.getBoundingClientRect().width / item.getBoundingClientRect().width);
        }
        else return NaN;
    }

    select(index) {
        const limit = this.length - this.offset;
        
        if (limit !== NaN) {
            this.index = index < 0 ? 0 : index > limit ? limit : index;
            this.transform(this.widget.querySelector(".plans__list")); // refactor it
        }
    }

    transform(listNode) {
        if (listNode !== null) {
            listNode.style["transform"] = `translate(${0 - this.index * 100 / this.offset}%)`;
        }
    }
}