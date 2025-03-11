window.addEventListener(
    "load",
    function() {
        let selects = document.getElementsByClassName("js-select");

        for (let i = 0; i < selects.length; i++) {
            (new Select(selects[i])).addListener(console.log);;
        }
    }
);

class Select {
    constructor(target) {
        this.listeners = [];

        if (target == undefined) {
            throw new Error("Invalid operation: element is undefined.");
        }
        
        this.target = target;
        let optionCollection = target.parentNode.getElementsByClassName("js-select-option");

        for (let i = 0; i < optionCollection.length; i++) {
            this.addOption(optionCollection[i]);
        }
    }

    addOption(option) {
        if (option == undefined) {
            throw new Error("Invalid operation: 'option' element is undefined.");
        }

        option.addEventListener(
            "click",
            this.handleClick.bind(this)
        );
    }

    handleClick(event) {
        let option = event.target;
        let value = option.getAttribute("data-value");

        if (value == null) {
            throw new Error("Invalid operation: data-value attribute is empty");
        }
        else if (value != this.value) {
            this.value = value;
            this.selectOption(option);
            this.callback();
        }
    }

    selectOption(option) {
        if (this.option != undefined) {
            this.option.classList.remove("is-active");
        }

        option.classList.add("is-active");

        this.option = option;
        this.target.innerHTML = option.innerHTML;
    }

    addListener(listener) {
        this.listeners.push(listener);
    }

    callback() {
        for (let i = 0; i < this.listeners.length; i++) {
            this.listeners[i](this.value);
        }
    }
}