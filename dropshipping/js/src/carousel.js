document.addEventListener("DOMContentLoaded", () =>
    document.querySelectorAll(".plans").forEach(widget => new Carousel(widget))
);

class Carousel {
    constructor(widget) {
        this.widget = widget;

        if (this.initialize()) {
            this.querySelector(".plans-button--back").then(
                element => element.addEventListener("click", () => this.back())
            );

            this.querySelector(".plans-button--next").then(
                element => element.addEventListener("click", () => this.next())
            );
        }
    }

    get length() {
        return this.widget.querySelectorAll(".plans__item").length;
    }

    get offset() {
        let result = 1;

        this.querySelector(".plans__list").then(
            list => this.querySelector(".plans__item").then(
                item => result = Math.round(list.getBoundingClientRect().width / item.getBoundingClientRect().width)
            )
        );

        return result;
    }

    querySelector(selectors) {
        return {
            each: callback =>
                this.widget.querySelectorAll(selectors).forEach((value, index, array) => callback(value, index, array))
            ,
            then: callback => {
                const element = this.widget.querySelector(selectors);

                if (element !== null) {
                    return callback(element);
                }
                else {
                    console.warn(`Element was not found: ${selectors}`);
                }
            }
        }
    }

    initialize() {
        if (this.length > 0) {
            const action = {
                ArrowLeft: () => this.back(), ArrowRight: () => this.next()
            };

            this.widget.addEventListener("keydown", event => {
                if (action[event.key] != null) {
                    action[event.key]();
                };
            });

            this.querySelector(".plan-card__button").each(
                (element, index) => element.addEventListener("focus", () => this.select(index))
            );

            return this.select(0) || true;
        }

        return false;
    }

    back() {
        this.select(this.index - 1);
    }

    next() {
        this.select(this.index + 1);
    }

    select(index) {
        this.index = index < 0 ? 0 : (() => {
            const limit = this.length - this.offset; return index > limit ? limit : index;
        })();

        this.transform();
    }

    transform() {
        this.querySelector(".plans__list").then(
            element => element.style["transform"] = `translate(${0 - this.index * 100 / this.offset}%)`
        );
    }
}