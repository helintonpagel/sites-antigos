import { Block } from "./block";

window.addEventListener("DOMContentLoaded",
    () => document.querySelectorAll(".slideshow").forEach(widget => new Slideshow(widget))
);

class Slideshow extends Block {
    constructor(widget) {
        super(widget);

        if (this.length > 1) {
            this.select(0);

            this.forAll(".slideshow-bullets__button",
                (element, index) => element.addEventListener("click", () => this.select(index))
            );

            this.startTimer();

            widget.addEventListener("mouseover", () => this.stopTimer());
            widget.addEventListener("mouseleave", () => this.startTimer());
        }
    }

    get length() {
        return this.widget.querySelectorAll(".slideshow__item").length;
    }

    select(index) {
        this.index = (limit => (index % limit + limit) % limit)(this.length);
        this.update();
    }

    update() {
        this.forAll(".slideshow__item",
            (element, index) => element.classList.toggle("slideshow__item--visible", index == this.index)
        );
        this.forAll(".slideshow-bullets__button",
            (element, index) => element.classList.toggle("slideshow-bullets__button--active", index == this.index)
        );
    }

    startTimer() {
        this.interval = setInterval(() => this.select(this.index + 1), 5000);
    }

    stopTimer() {
        clearInterval(this.interval);
    }
}