class DropDown {
    constructor(trigger = undefined) {
        this.trigger = null;
        this.isActive = false;
        this.boundDeactivate = this.deactivate.bind(this);

        if (trigger != undefined) {
            this.setTrigger(trigger);
        }
    }

    setTrigger(trigger) {
        if (this.trigger != null) {
            new Error("Invalid operation: trigger was already set");
        }

        this.trigger = trigger;
        
        trigger.addEventListener(
            "click",
            this.handleClick.bind(this)
        );

        return trigger;
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

window.addEventListener(
    "load",
    function() {
        let dropdownTriggers = document.getElementsByClassName("js-dropdown");

        for (let i = 0; i < dropdownTriggers.length; i++) {
            new DropDown(dropdownTriggers[i]);
        }
    }
);