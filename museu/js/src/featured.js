import { Block } from "./block";

window.addEventListener("DOMContentLoaded",
    () => document.querySelectorAll(".featured").forEach(widget => new Featured(widget))
);

class Featured extends Block {
    constructor(widget) {
        super(widget);

        if (this.initialize() == true) {
            this.forOne(".control-bullets__button",
                element => element.classList.add("control-bullets__button--active")
            );

            this.forAll(".control-bullets__button", 
                (element, i) => element.addEventListener("click", () => this.select(i + 2))
            );

            this.forOne(".control__button--back",
                element => element.addEventListener("click", () => this.select(this.index - 1))
            );

            this.forOne(".control__button--next",
                element => element.addEventListener("click", () => this.select(this.index + 1))
            );

            this.forOne(".featured__list", element => element.addEventListener("transitionend", () => this.finish()));
        }
    }

    get length() {
        return this.widget.querySelectorAll(".featured__item").length;
    }

    initialize() {
        const slides = this.widget.querySelectorAll(".featured__item");

        if (slides.length > 1) {
            [0, 1].forEach(
                index => this.forOne(".featured__list", element => element.appendChild(this.makeClone(slides[index])))
            );
            [1, 2].forEach(
                index => this.forOne(".featured__list",
                    element => element.insertBefore(this.makeClone(slides[slides.length - index]), element.firstChild)
                )
            );

            this.index = 2;
            this.update() || this.brakeSlide();

            return true;
        }
    }

    makeClone(element) {
        return element.cloneNode(true);
    }

    select(index) {
        if (this.halt !== true) {
            this.index = (limit => (index % limit + limit) % limit)(this.length);
        }

        this.update();
    }

    update() {
        this.forOne(".featured__list",
            element => element.style["transform"] = `translate(${0 - this.index * 100}%)`
        );
        
        this.forAll(".featured__item",
            (element, i) => element.classList.toggle("featured__item--visible", i == this.index)
        );

        this.halt = true;
    }

    finish() {
        const limit = this.length;

        if (this.index <= 1 || this.index >= limit - 2) {
            this.index = 2 + (limit => ((this.index - 2) % limit + limit) % limit)(limit - 4);

            this.update() || this.brakeSlide();
        }

        this.forAll(".control-bullets__button", 
            (element, i) => element.classList.toggle("control-bullets__button--active", i + 2 == this.index)
        );

        this.halt = false;
    }

    brakeSlide() {
        this.forAll(".featured__list, .featured__item",
            element => (element.style["transition"] = "none") && element.offsetHeight
        );

        this.forAll(".featured__list, .featured__item", element => element.style["transition"] = null);
    }
}