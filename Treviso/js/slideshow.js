class Slideshow {
    constructor(slideshow) {
        this.collection = [];
        this.slideIndex = -1;
        this.boundStop = this.stopPresentation.bind(this)
        this.boundStart = this.startPresentation.bind(this)

        if (slideshow == null) {
            new Error("Invalid operation: slideshow element is null");
        }

        this.slideshow = slideshow;
        slideshow.classList.add("slideshow");

        this.makeNextButton("Próximo");
        this.makeBackButton("Anterior");
    }

    addImage(src) {
        let newSlide = this.makeSlide(src);
        let newImage = newSlide.firstElementChild;

        newImage.addEventListener(
            "load",
            function(event) {
                this.insertSlide(
                    event.target.parentElement
                );
                // this.makeBreadcrumb();
                this.makeTrumbnail(newImage);

                if (this.slideIndex == -1) {
                    this.nextSlide();

                    // this.startPresentation();
                }
            }.bind(this)
        );

        return this;
    }

    startPresentation() {
        this.interval = setInterval(
            this.nextSlide.bind(this),
            5000
        );

        this.slideshow.removeEventListener(
            "mouseleave",
            this.boundStart
        );
        
        this.slideshow.addEventListener(
            "mouseover",
            this.boundStop
        );
    }

    stopPresentation() {
        clearInterval(this.interval);

        this.slideshow.removeEventListener(
            "mouseover",
            this.boundStop
        );

        this.slideshow.addEventListener(
            "mouseleave",
            this.boundStart
        );
    }

    makeSlide(src) {
        let newNode = document.createElement("ul");

        newNode.innerHTML = `
            <li class="slideshow__slide">
                <img class="slideshow__image" src="${src}" role="presentation"/>
            </li>`;

        return newNode.firstElementChild;
    }

    makeBackButton(text) {
        let newNode = document.createElement("li");

        newNode.innerHTML = `
            <button class="slideshow__back">
                ${text}
            </button>`;

        let newButton = this.insertButton(newNode);

        newButton.addEventListener(
            "click",
            this.backSlide.bind(this)
        );
    }

    makeNextButton(text) {
        let newNode = document.createElement("li");

        newNode.innerHTML = `
            <button class="slideshow__next">
                ${text}
            </button>`;

        let newButton = this.insertButton(newNode);

        newButton.addEventListener(
            "click",
            this.nextSlide.bind(this)
        );
    }

    makeBreadcrumb() {
        let length = this.collection.length;
        let newNode = document.createElement("li");

        newNode.innerHTML = `
            <button class="breadcrumb__button" data-index="${length - 1}">
                Imagem ${length}
            </button>`;

        let newButton = this.insertBreadcrumb(newNode);

        newButton.addEventListener(
            "click",
            this.selectSlideIndex.bind(this)
        );
    }

    makeTrumbnail(imgNode) {
        let length = this.collection.length;
        let newNode = imgNode.cloneNode(true);

        newNode.setAttribute("data-index", length - 1);

        this.insertThumbnail(newNode);

        newNode.addEventListener(
            "click",
            this.selectSlideIndex.bind(this)
        );
    }

    insertSlide(slide) {
        if (this.slidelist == undefined) {
            this.slidelist = this.slideshow.insertBefore(
                document.createElement("ul"),
                this.slideshow.firstElementChild
            );
        }

        this.collection.push(slide);
        this.slidelist.appendChild(slide);
    }

    insertButton(newNode) {
        if (this.buttonlist == undefined) {
            this.buttonlist = this.slideshow.appendChild(
                document.createElement("ul")
            );
        }

        return this.buttonlist.appendChild(newNode)
            .firstElementChild;
    }

    insertBreadcrumb(newNode) {
        newNode.classList.add("breadcrumb__item");

        if (this.breadcrumb == undefined) {
            this.breadcrumb = this.slideshow.appendChild(
                document.createElement("ul")
            );
            this.breadcrumb.setAttribute("class", "slideshow__breadcrumb breadcrumb");
        }

        return this.breadcrumb.appendChild(newNode)
            .firstElementChild;
    }

    insertThumbnail(newImg) {
        newImg.setAttribute("class", "slideshow__thumbnail");

        if (this.gallery == undefined) {
            
            this.gallery = document.createElement("ul");

            this.slideshow.appendChild(
                document.createElement("div")
            ).appendChild(
                this.gallery
            );

            this.gallery.parentElement.classList.add("ss");

            this.gallery.setAttribute("class", "slideshow__thumbnail-bar");
        }

        return this.gallery.appendChild(newImg);
    }

    hideCurrentSlide() {
        if (this.slideIndex >= 0) {
            this.collection[this.slideIndex].classList.remove('show');
        }
    }

    showCurrentSlide() {
        if (this.slideIndex >= 0) {
            this.collection[this.slideIndex].classList.add('show');
        }
    }

    backSlide() {
        this.setSlideIndex(this.slideIndex - 1);
    }

    nextSlide() {
        this.setSlideIndex(this.slideIndex + 1);
    }

    setSlideIndex(index) {
        this.hideCurrentSlide();

        if (index < 0) {
            index += this.collection.length;
        }
        else {
            index %= this.collection.length;
        }

        this.slideIndex = index;
        this.showCurrentSlide();
        // this.highlightBreadcrumb();
        this.reorderGallery(
            index
        )
    }

    selectSlideIndex(event) {
        let dataIndex = event.target.getAttribute("data-index");

        if (this.selectedU != undefined) {
            this.selectedU.classList.remove("is-active");
        }

        this.selectedU = event.target;
        this.selectedU.classList.add("is-active");

        if (dataIndex == null) {
            throw new Error("Invalid operation: data-index attrubute was not set")
        }

        this.setSlideIndex(
            parseInt(dataIndex, 10)
        );

        // this.highlightBreadcrumb();
        // this.reorderGallery(
        //     parseInt(dataIndex, 10)
        // );
    }

    reorderGallery(index) {
        let offset = (144 + 9) * index * (-1);

        this.gallery.style.marginLeft = offset + "px";
    }

    highlightBreadcrumb() {
        let highlighted = this.highlightedBreadcrumb;

        if (highlighted != undefined) {
            highlighted.classList.remove("is-active");
        }

        highlighted =
            this.breadcrumb.getElementsByClassName("breadcrumb__button")[this.slideIndex];

        if (highlighted != undefined) {
            highlighted.classList.add("is-active")
        }

        this.highlightedBreadcrumb = highlighted;
    }
}