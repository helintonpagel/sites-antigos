window.addEventListener(
    "load",
    function() {
        let fields = document.getElementsByClassName("js-placeholder");

        for(let i = 0; i < fields.length; i++) {
            new Placeholder(fields[i]);
        }
    }
);

class Placeholder {
    constructor(target = undefined) {
        this.boundUpdatePlaceholder = this.updatePlaceholder.bind(this);

        if (target != undefined) {
            this.addTarget(target);
        }
    }

    addTarget(target) {
        if (this.target != undefined) {
            throw new Error("Invalid operation: target was already set");
        }
        else {
            this.target = target;
        }
        
        let input = this.getInputElement();
        let events = ["blur", "keydown", "keyup", "keypress"];

        for(let i = 0; i < events.length; i++) {
            input.addEventListener(
                events[i], this.boundUpdatePlaceholder
            );
        }

        this.updatePlaceholder();
    }

    getInputElement() {
        let children = this.target.children;

        for (let i = 0; i < children.length; i++) {
            let tag = children[i].tagName;

            if (tag == "INPUT" || tag == "TEXTAREA") {
                return children[i];
            }
        }

        throw new Error("Invalid operation: there is no input element");
    }

    updatePlaceholder() {
        if (this.getInputElement().value == "") {
            this.target.classList.remove("is-active");
        }
        else {
            this.target.classList.add("is-active");
        }
    }
}