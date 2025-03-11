class Slideshow {
    constructor() {
        this.collection = query("slideshow__item").items;
        this.boundStop = this.stopPresentation.bind(this);
        this.boundStart = this.startPresentation.bind(this);
        
        if (this.collection.length > 0) {
            this.selectSlide(0);

            query("slideshow__prev").attachEvent("click", () => {
                this.prevSlide();
            });

            query("slideshow__next").attachEvent("click", () => {
                this.nextSlide();
            });

            this.startPresentation();
        }
    }

    selectSlide(index) {
        query("slideshow__item").removeClass("show");

        if (index < 0) {
            index += this.collection.length;
        }
        else {
            index %= this.collection.length;
        }

        this.slideIndex = index;
        this.collection[this.slideIndex].classList.add('show');
    }

    prevSlide() {
        this.selectSlide(this.slideIndex - 1);
    }

    nextSlide() {
        this.selectSlide(this.slideIndex + 1);
    }

    startPresentation() {
        this.interval = setInterval(
            this.nextSlide.bind(this), 5000
        );

        query("slideshow").attachEvent("mouseover", this.boundStop);
        query("slideshow").removeEvent("mouseleave", this.boundStart);
    }

    stopPresentation() {
        clearInterval(this.interval);

        query("slideshow").attachEvent("mouseleave",this.boundStart);
        query("slideshow").removeEvent("mouseover",this.boundStop);
    }
}