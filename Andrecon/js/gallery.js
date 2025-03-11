class Gallery {
    constructor() {
        this.popup = new Popup("gallery__image");

        this.showAll();

        query("select__item").callEvery(element => 
            element.addEventListener("click", () => {
                this.show(element.getAttribute("data-filter"));
                query("select__button").callFirst(button => button.innerText = element.innerText);
            })
        );
    }

    show(dataFilter) {
        let target = this.filterBy(dataFilter);

        this.hideAll();
        this.popup.collection = target.findChild("gallery__image");


        target.addClass("show")
    }

    showAll() {
        query("gallery__item").addClass("show");
    }

    hideAll() {
        query("gallery__item").removeClass("show");
    }

    filterBy(dataFilter) {
        if (dataFilter === "todos") {
            return query("gallery__item");
        }
        else {
            return query("gallery__item").filter(element => 
                element.getAttribute("data-filter") === dataFilter
            );
        }
    }
}