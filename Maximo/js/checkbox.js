class Checkbox {
    constructor(checkbox) {
        if (checkbox == null) {
            throw new Error("Invalid operation: checkbox element is null");
        }

        this.setCheckbox(checkbox);
    }

    setCheckbox(checkbox) {
        checkbox.addEventListener(
            "click",
            this.handleClick.bind(this)
        );

        this.checkbox = checkbox;
    }

    handleClick() {
        if (this.checked != true) {
            this.checkbox.classList.add("is-checked");
            this.checked = true;
        }
        else {
            this.checkbox.classList.remove("is-checked");
            this.checked = false;
        }
    }
}