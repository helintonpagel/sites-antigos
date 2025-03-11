class Field {
    constructor(className) {
        query(className).callEvery(
            element => {
                this.update(element);
                element.addEventListener("input", () => this.update(element));
            }
        );
    }

    update(element) {
        return element.value === "" ? this.show(element) : this.hide(element);
    }

    hide(element) {
        element.parentNode.classList.add("hide");
    }

    show(element) {
        element.parentNode.classList.remove("hide");
    }
}