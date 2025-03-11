document.addEventListener("DOMContentLoaded", () =>
    document.querySelectorAll(".listbox").forEach(widget => new Listbox(widget))
);

class Listbox {
    constructor(widget) {
        this.widget = widget;

        if (this.initialize()) {
            this.querySelector(".listbox__item").each(
                (element, i) => element.addEventListener("click", () => this.selectItem(element, i))
            );

            this.querySelector(".listbox__button").then(element => {
                window.addEventListener("click", event => {
                    if (element !== event.target) element.classList.remove("listbox__button--active");
                });

                element.addEventListener("click", () => element.classList.toggle("listbox__button--active"));
            });
        }
    }

    querySelector(selectors) {
        return {
            each: callback =>
                this.widget.querySelectorAll(selectors).forEach((value, index, array) => callback(value, index, array))
            ,
            then: callback => {
                const element = this.widget.querySelector(selectors);

                if (element !== null) {
                    return callback(element);
                }
                else {
                    console.warn(`Element was not found: ${selectors}`);
                }
            }
        }
    }

    initialize() {
        this.index = 0;
        this.empty = this.querySelector(".listbox__label").then(element => element.innerText);

        return this.empty !== undefined;
    }

    selectItem(item, i) {
        this.index = i;

        this.querySelector(".listbox__label").then(
            element => element.innerText = this.index === 0 ? this.empty : item.innerText
        );
        
        this.querySelector(".listbox__input").then(element => element.value = item.getAttribute("data-value"));
    }
}