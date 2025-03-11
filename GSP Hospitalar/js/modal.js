class Modal {
    constructor(slideshow, backClass = null, nextClass = null) {
        this.collection = [];
        this.slideIndex = -1;

        if (slideshow == undefined) {
            new Error("Slideshow element is undefined");
        }

        this.slideshow = slideshow;
        this.loadImages();

        if (backClass != null) {
            this.findChild(backClass).addEventListener(
                "click",
                function(event) {
                    this.backSlide();
                    event.stopPropagation();
                }.bind(this)
            );
        }

        if (nextClass != null) {
            this.findChild(nextClass).addEventListener(
                "click",
                function(event) {
                    this.nextSlide();
                    event.stopPropagation();
                }.bind(this)
            );
        }

        window.addEventListener("click", this.hide.bind(this));
    }

    loadImages() {
        this.collection = document.getElementsByClassName("thumbnail__image");

        if (this.slideIndex == -1) {
            this.nextSlide();
        }

        for (let i = 0; i < this.collection.length; i++) {
            this.collection[i].parentElement.addEventListener(
                "click",
                function(event) {
                    event.stopPropagation();
                    this.selectSlide(i);
                    this.show();
                }.bind(this)
            );
        }
    }

    selectSlide(index) {
        if (index < 0) {
            index += this.collection.length;
        }
        else {
            index %= this.collection.length;
        }

        this.slideIndex = index;
        this.updateView();
    }

    backSlide() {
        this.selectSlide(this.slideIndex - 1);
    }

    nextSlide() {
        this.selectSlide(this.slideIndex + 1);
    }

    hide() {
        this.slideshow.classList.remove("show");
        document.documentElement.style.overflow = "scroll";
    }

    show() {
        this.slideshow.classList.add("show");
        document.documentElement.style.overflow = "hidden";
    }

    updateView() {
        this.findChild("modal__image").setAttribute(
            "src",
            this.collection[this.slideIndex].getAttribute("src")
        );
    }

    findChild(className) {
        let elements = this.slideshow.getElementsByClassName(className);

        if (elements.length > 0) {
            return elements[0];
        }
        else {
            throw new Error("Element was not found: " + className);
        }
    }
}