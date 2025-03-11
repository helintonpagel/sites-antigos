import "./inline";
import "./header";
import "./slideshow";
import "./featured";
import "./tour";

function addInputState(...args) {
    args.forEach(name => {
        const updateState = input => input.classList.toggle(`${name}--active`, input.value !== "");

        document.querySelectorAll(`.${name}`).forEach(input => 
            input.addEventListener("input", () => updateState(input)) || updateState(input)
        );
    });
}

document.addEventListener("DOMContentLoaded", () => addInputState("text-field__input", "message__input"));