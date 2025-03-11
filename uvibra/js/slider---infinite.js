class Slider {
    constructor() {
        const element = find("slider").item(0);

        if (element !== undefined) {
            this.index = 0;
            this.slider = new Finder([element]);

            this.initialize();
        }
    }

    get length() {
        return find("slider__item").items.length;
    }

    initialize() {
        const parent = this.slider.find("slider__list").item(0);
        const slides = parent != undefined ? parent.children : undefined;

        if (slides !== undefined && slides.length > 0) {
            const first = slides.item(0);

            parent.appendChild(first.cloneNode(true));
            parent.insertBefore(slides.item(slides.length - 2).cloneNode(true), first);

            parent.addEventListener("transitionend", this.fallback.bind(this));
        }

        this.slider.find("slider__next").bind("click", this.nextSlide.bind(this));
        this.slider.find("slider__prev").bind("click", this.prevSlide.bind(this));
    }

    nextSlide() {
        if (true) {
            this.transform(++this.index);
        }
    }

    prevSlide() {
        if (true) {
            this.transform(--this.index);
        }
    }

    transform(index) {
        const element = this.slider.find("slider__list").item(0);

        if (element !== undefined) {
            element.style["transform"] = `translate(${0 - index * 100}%)`;
        }
    }

    fallback() {
        if (this.index == this.length - 1) {
            this.index = 1;
        }
        else if (this.index == 0) {
            this.index = this.length - 2;
        }
        else {
            return undefined;
        }

        const element = this.slider.find("slider__list").item(0);

        element.style["transition"] = "none";

        this.transform(this.index);
        element.offsetHeight;
        
        element.style["transition"] = null;
    }
}