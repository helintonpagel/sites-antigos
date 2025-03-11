class Field {
    constructor(field, input) {
        this.boundUpdatePlaceholder = this.updatePlaceholder.bind(this);

        if (field == undefined || input == undefined) {
            new Error("The field or input element is undefined");
        }

        this.field = field;
        this.input = input;

        let events = ["blur", "keydown", "keyup", "keypress"];

        for(let i = 0; i < events.length; i++) {
            input.addEventListener(
                events[i], this.boundUpdatePlaceholder
            );
        }

        this.updatePlaceholder();
    }

    updatePlaceholder() {
        if (this.input.value != "") {
            this.field.classList.add("is-active");
        }
        else {
            this.field.classList.remove("is-active");
        }
    }
}