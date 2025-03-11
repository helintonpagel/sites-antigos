class Slideshow {
    constructor(slideshow, backClass = null, nextClass = null) {
        this.collection = [];
        this.slideIndex = -1;
        this.slideClass = "slideshow__image";
        this.boundStop = this.stopPresentation.bind(this)
        this.boundStart = this.startPresentation.bind(this)

        if (slideshow == undefined) {
            new Error("Slideshow element is undefined");
        }

        this.slideshow = slideshow;

        this.breadcrumb = this.findChild("slideshow__breadcrumb");
        this.crumbModel = this.breadcrumb.firstElementChild;
        this.breadcrumb.innerHTML = "";

        this.loadImages();

        if (backClass != null) {
            this.findChild(backClass).addEventListener(
                "click", this.backSlide.bind(this)
            );
        }

        if (nextClass != null) {
            this.findChild(nextClass).addEventListener(
                "click", this.nextSlide.bind(this)
            );
        }

        window.addEventListener(
            "resize",
            this.adjustHeight.bind(this)
        );
    }

    adjustHeight() {
        let first = this.findChild(this.slideClass);
        let height = Math.floor(first.getBoundingClientRect().height / 24) * 24;

        if (height != 0) {
            this.slideshow.style.height = height + "px";
        }
        else {
            this.slideshow.style.height = '';
        }
    }

    loadImages() {
        let images = this.slideshow.getElementsByClassName(this.slideClass);

        for (let i = 0; i < images.length; i++) {
            let image = images[i];

            image.setAttribute(
                "src", image.getAttribute("data-src")
            );
            image.addEventListener(
                "load",
                function() {
                    this.collection.push(image.parentElement);
                    this.makeCrumb(
                        this.collection.length - 1
                    );

                    if(this.slideIndex == -1) {
                        this.nextSlide();
                        this.adjustHeight();
                        this.startPresentation();
                    }
                }.bind(this)
            );
        }
    }

    makeCrumb(index) {
        if (this.crumbModel != undefined) {
            let newCrumb = this.crumbModel.cloneNode(true);
            
            this.appendCrumb(newCrumb);

            newCrumb.firstElementChild.addEventListener(
                "click", 
                function() {
                    this.selectSlide(index);
                }.bind(this)
            );
        }
        else {
            throw new Error("Breadcrumb was not found in the DOM");
        }
    }

    appendCrumb(newCrumb) {
        this.breadcrumb.appendChild(newCrumb);
    }

    selectSlide(index) {
        this.hideSlide();

        if (index < 0) {
            index += this.collection.length;
        }
        else {
            index %= this.collection.length;
        }

        this.slideIndex = index;
        this.showSlide();
    }

    showSlide() {
        if (this.slideIndex >= 0) {
            this.collection[this.slideIndex].classList.add('show');
            
            if (this.breadcrumb != undefined) {
                this.breadcrumb.children[this.slideIndex].classList.add('is-active');
            }
        }
    }

    hideSlide() {
        if (this.slideIndex >= 0) {
            this.collection[this.slideIndex].classList.remove('show');

            if (this.breadcrumb != undefined) {
                this.breadcrumb.children[this.slideIndex].classList.remove('is-active');
            }
        }
    }

    backSlide() {
        this.selectSlide(this.slideIndex - 1);
    }

    nextSlide() {
        this.selectSlide(this.slideIndex + 1);
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

    startPresentation() {
        this.interval = setInterval(
            this.nextSlide.bind(this), 4000
        );

        this.slideshow.addEventListener("mouseover", this.boundStop);
        this.slideshow.removeEventListener("mouseleave", this.boundStart);
    }

    stopPresentation() {
        clearInterval(this.interval);

        this.slideshow.addEventListener("mouseleave",this.boundStart);
        this.slideshow.removeEventListener("mouseover",this.boundStop);
    }
}