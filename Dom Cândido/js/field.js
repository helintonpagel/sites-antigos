class Field {
    constructor(className) {
        this.className = className;

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
        element.classList.add(`${this.className}--active`);
    }

    show(element) {
        element.classList.remove(`${this.className}--active`);
    }
}