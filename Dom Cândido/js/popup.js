class Popup {
    constructor(className = undefined) {
        this.slideIndex = -1;
        this.boundHandleKey = this.handleKey.bind(this);

        if (className !== undefined) {
            this.loadImages(className);
        }

        query("popup__back").attachEvent("click", event => {
            this.back();
            event.stopPropagation();
        });

        query("popup__next").attachEvent("click", event => {
            this.next();
            event.stopPropagation();
        });

        window.addEventListener("click", this.hide.bind(this));
    }

    handleKey(event) {
        let keyboardMethods = {
            "Escape": this.hide.bind(this),
            "ArrowLeft": this.next.bind(this), "ArrowRight": this.back.bind(this)
        };

        if (keyboardMethods[event.key] != undefined) {
            keyboardMethods[event.key]();
        }
    }

    loadImages(className) {
        this.collection = query(className);

        this.collection.callEvery((element) => {
            element.parentNode.addEventListener("click", event => {
                this.show();
                this.select(this.collection.items.indexOf(element));

                event.stopPropagation();
            });
        });
    }

    show() {
        query("popup").addClass("show");
        window.addEventListener("keydown", this.boundHandleKey);
    }

    hide() {
        query("popup").removeClass("show");
        window.removeEventListener("keydown", this.boundHandleKey);
    }

    select(index) {
        this.index = index < 0 ? index + this.getLength() : index % this.getLength();
        this.updateView();
    }

    getLength() {
        return this.collection.getLength();
    }

    updateView() {
        query("popup__image").setAttribute(
            "src", this.collection.items[this.index].getAttribute("src")
        );
    }

    next() {
        this.select(this.index + 1);
    }

    back() {
        this.select(this.index - 1);
    }
}