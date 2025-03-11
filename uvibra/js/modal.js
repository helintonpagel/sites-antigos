class Modal {
    constructor() {
        const element = find("modal").item(0);

        if (element != undefined) {
            this.modal = find(element);

            if (this.initialize() === true) {
                this.modal.bind("click", this.handleModalClick.bind(this));

                this.modal.find("modal__next").bind("click", this.nextImage.bind(this));
                this.modal.find("modal__prev").bind("click", this.prevImage.bind(this));
            }
        }
    }

    get length() {
        return find("photos__image").items.length;
    }

    initialize() {
        this.boundHandleKeyboard = this.handleKeyboard.bind(this);

        if (this.length > 0) {
            let index = 0;

            find("photos__button").fold(
                element => {
                    find(element).bind("click", () => this.openModal(index));
                }
            );

            return true;
        }
        
        return false;
    }

    openModal(index = 0) {
        this.selectImage(index);
        this.modal.add("modal--active");
        find(window).bind("keydown", this.boundHandleKeyboard);
    }

    closeModal() {
        this.modal.del("modal--active");
        find(window).unbind("keydown", this.boundHandleKeyboard);
    }

    selectImage(index) {
        const length = this.length;
        this.index = index >= 0 ? index % length : index % length + length;
        
        this.eraseImage();
        this.cloneImage();
    }

    eraseImage() {
        this.modal.find("modal__image").fold(
            element => {
                element.parentElement.removeChild(element);
            }
        )
    }

    cloneImage() {
        const image = find("photos__image").item(this.index);

        if (image !== undefined) {
            const modal = this.modal.item(0);
            const clone = image.cloneNode(true);

            clone.removeAttribute("style");
            clone.setAttribute("class", "modal__image");

            if (modal.firstElementChild === undefined) {
                modal.appendChild(clone)
            }
            else {
                modal.insertBefore(clone, modal.firstElementChild);
            }
        }
        else {
            console.warn(`.photos__image:nth(${this.index}) not found.`);
        }
    }

    handleModalClick(event) {
        this.modal.toggle("modal--active", event.target !== this.modal.item(0));
    }

    nextImage() {
        this.selectImage(this.index + 1);
    }

    prevImage() {
        this.selectImage(this.index - 1);
    }

    handleKeyboard(event) {
        const keyMap = {
            ArrowLeft: this.prevImage,
            ArrowRight: this.nextImage,
            Escape: this.closeModal
        }

        if (keyMap[event.key] !== undefined) { keyMap[event.key].call(this); }
    }
}