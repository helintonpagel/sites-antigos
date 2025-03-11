class Dropdown {
    constructor(button = undefined) {
        this.trigger = null;
        this.isActive = false;
        this.boundDeactivate = this.deactivate.bind(this);

        if (button != undefined) {
            this.setTrigger(button);
        }
    }

    setTrigger(button) {
        if (this.trigger != null) {
            new Error("Trigger was already set");
        }

        this.trigger = button;
        
        button.addEventListener(
            "click",
            this.handleClick.bind(this)
        );

        return button;
    }

    handleClick(event) {
        if (this.isActive != true) { this.activate(); }
        else { this.deactivate(); }

        event.stopPropagation();
    }

    activate() {
        this.isActive = true;
        this.trigger.classList.add("is-active");

        window.addEventListener("click", this.boundDeactivate);
    }

    deactivate() {
        this.isActive = false;
        this.trigger.classList.remove("is-active");

        window.removeEventListener("click", this.boundDeactivate);
    }
}