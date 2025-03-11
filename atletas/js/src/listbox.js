document.addEventListener("DOMContentLoaded", () => new Listbox());

class Listbox {
    constructor() {
        this.widget = document.querySelector(".listbox");

        if (this.widget !== null) {
            const emptyValue = this.querySelector(".listbox__label").then(element => element.innerText);

            this.querySelectorAll(".listbox__item").each((element, index) => 
                element.addEventListener("click", () => {
                    this.value = element.getAttribute("data-value");
                    this.label = index == 0 ? emptyValue : element.innerText;
                })
            );

            this.querySelector(".listbox__button").then(element => {
                element.addEventListener("click", () => element.classList.toggle("listbox__button--active"));

                window.addEventListener("click", event => {
                    if (element !== event.target) element.classList.remove("listbox__button--active");
                });
            });
        }
    }

    get value() {
        return this.querySelector(".listbox__input").then(element => element.value);
    }

    set value(value) {
        this.querySelector(".listbox__input").then(element => element.value = value);
    }

    get label() {
        return this.querySelector(".listbox__label").then(element => element.innerText);
    }

    set label(value) {
        this.querySelector(".listbox__label").then(element => element.innerText = value);
    }

    querySelector(selectors) {
        const result = this.widget.querySelector(selectors);

        return {
            then: callback => result !== null ? callback(result) : console.warn(`Element was not found: ${selectors}`)
        };
    }

    querySelectorAll(selectors) {
        return {
            each: callback => this.widget.querySelectorAll(selectors).forEach((value, index, array) => callback(value, index, array))
        }
    }
}