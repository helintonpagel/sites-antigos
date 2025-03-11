document.addEventListener("DOMContentLoaded", () => new Slider());

class Slider {
    constructor() {
        const element = find("slider").item(0);

        this.boundCheckTouch = this.checkTouch.bind(this);
        this.boundStartTimer = this.startTimer.bind(this);
        this.boundPauseTimer = this.pauseTimer.bind(this);

        if (element !== undefined) {
            this.slider = new Finder([element]);

            if (this.initialize() === true) {
                this.slider.bind("touchstart", this.startTouch.bind(this));
    
                this.slider.find("slider__next").bind("click", this.nextSlide.bind(this));
                this.slider.find("slider__prev").bind("click", this.prevSlide.bind(this));

                this.slider.find("slider__list").bind("transitionend", this.finishTransform.bind(this));
            }
        }
    }

    get length() {
        return this.slider.find("slider__item").items.length;
    }

    initialize() {
        if (this.length > 0) {
            const parent = this.slider.find("slider__list").item(0);
            const slides = parent != undefined ? parent.children : undefined;

            if (slides !== undefined && slides.length == this.length) {
                this.index = 0;
                const first = slides.item(0);

                parent.appendChild(first.cloneNode(true));
                parent.insertBefore(slides.item(slides.length - 2).cloneNode(true), first);

                this.startTimer();

                return true;
            }
        }

        return false;
    }

    startTouch(event) {
        if (this.interval !== undefined) {
            clearInterval(this.interval);
        }

        this.touchStart = event.targetTouches[0];
        this.slider.bind("touchmove", this.boundCheckTouch);
    }

    checkTouch(event) {
        const offset = this.touchStart.screenX - event.targetTouches[0].screenX;

        if (Math.abs(offset) > 50) {
            if (offset > 50) {
                this.nextSlide();
            }
            else {
                this.prevSlide();
            }

            this.slider.unbind("touchmove", this.boundCheckTouch);
        }
    }

    nextSlide() {
        if (this.halted !== true) {
            this.index = (this.index + 1) % this.length;
            this.transform();
        }
    }

    prevSlide() {
        if (this.halted !== true) {
            this.index = (this.index + this.length - 1) % this.length;
            this.transform();
        }
    }

    transform() {
        const element = this.slider.find("slider__list").item(0);

        if (element !== undefined && this.halted !== true) {
            this.halted = true;
            element.style["transform"] = `translate(${0 - this.index * 100}%)`;
        }
    }

    finishTransform() {
        const index = this.index;

        if (index == 0 || index == this.length - 1) {
            const element = this.slider.find("slider__list").item(0);

            if (index == 0) {
                this.index = this.length - 2;
            }
            else {
                this.index = 1;
            }

            this.halted = false;
            element.style["transition"] = "none";
            
            this.transform();

            element.offsetHeight;
            element.style["transition"] = null;
        }

        this.halted = false;
    }

    startTimer() {
        this.interval = setInterval(this.nextSlide.bind(this), 4000);

        this.slider.bind("mouseover", this.boundPauseTimer);
        this.slider.unbind("mouseleave", this.boundStartTimer);
    }

    pauseTimer() {
        if (this.interval !== undefined) {
            clearInterval(this.interval);
        }

        this.slider.bind("mouseleave", this.boundStartTimer);
        this.slider.unbind("mouseover", this.boundPauseTimer);
    }
}