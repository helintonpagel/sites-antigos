import "./inline-svg";
import "./carousel";
import "./listbox";
import "./consent";
import "./form";

document.addEventListener("DOMContentLoaded", () => addInputState("text-field__input", "message__input"));

function addInputState(...args) {
    args.forEach(name => {
        const updateState = input => input.classList.toggle(`${name}--active`, input.value !== "");

        document.querySelectorAll(`.${name}`).forEach(input => 
            input.addEventListener("input", () => updateState(input)) || updateState(input)
        );
    });
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".header-button").forEach(
        button => button.addEventListener("click", event => {
            event.preventDefault();
            
            document.querySelectorAll(".header-menu").forEach(
                element => element.classList.toggle("header-menu--active", button.classList.toggle("header-button--active"))
            );
        })
    );
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("input[type='tel']").forEach(element => {
        function format() {
            let string = element.value.replace(/[^0-9]/g, "");

            if (string.length > 11) {
                string = string.slice(0, 11);
            }

            let pieces = string.match(/([0-9]{2})([0-9]{5})([0-9]{4})/);

            if (pieces == null) {
                pieces = string.match(/([0-9]{1,2})?([0-9]{1,4})?([0-9]{1,4})?/);
            }

            let format =
                (pieces[1] == undefined ? `` : `(${pieces[1]})`) + 
                (pieces[2] == undefined ? `` : ` ${pieces[2]}`) + 
                (pieces[3] == undefined ? `` : `-${pieces[3]}`);

            element.value = format;
        }

        element.addEventListener("keyup", event => {
            switch (event.key) {
                case "Backspace":
                case "Shift":
                case "ArrowUp":
                case "ArrowDown":
                case "ArrowLeft":
                case "ArrowRight":
                case "(":
                case ")":
                case "-":
                case " ":    
                    break;
            
                default: format(); break
            }
        });

        element.addEventListener("blur", format);
    });

    document.querySelectorAll("input[name='cnpj']").forEach(element => {
        function format() {
            let string = element.value.replace(/[^0-9]/g, "");

            if (string.length > 14) {
                string = string.slice(0, 14);
            }

            let pieces = string.match(/([0-9]{2})([0-9]{3})([0-9]{3})([0-9]{4})([0-9]{2})/);

            if (pieces == null) {
                pieces = string.match(/([0-9]{1,2})?([0-9]{1,3})?([0-9]{1,3})?([0-9]{1,4})?([0-9]{1,2})?/);
            }

            let format =
                (pieces[1] === undefined ? `` : `${pieces[1]}.`) + 
                (pieces[2] === undefined ? `` : `${pieces[2]}.`) + 
                (pieces[3] === undefined ? `` : `${pieces[3]}/`) +
                (pieces[4] === undefined ? `` : `${pieces[4]}-`) +
                (pieces[5] === undefined ? `` : `${pieces[5]}`);

            element.value = format;
        }

        element.addEventListener("keyup", event => {
            switch (event.key) {
                case "Backspace":
                case "Shift":
                case "ArrowUp":
                case "ArrowDown":
                case "ArrowLeft":
                case "ArrowRight":
                case "(":
                case ")":
                case "-":
                case " ":    
                    break;
            
                default: format(); break
            }
        });

        element.addEventListener("blur", format);
    });

    document.querySelectorAll("input[name='cep']").forEach(element => {
        function format() {
            let string = element.value.replace(/[^0-9]/g, "");

            if (string.length > 8) {
                string = string.slice(0, 8);
            }

            let pieces = string.match(/([0-9]{5})([0-9]{3})/);

            if (pieces == null) {
                pieces = string.match(/([0-9]{1,5})?([0-9]{1,3})?/);
            }

            let format =
                (pieces[1] === undefined ? `` : `${pieces[1]}-`) + 
                (pieces[2] === undefined ? `` : `${pieces[2]}`);

            element.value = format;
        }

        element.addEventListener("keyup", event => {
            switch (event.key) {
                case "Backspace":
                case "Shift":
                case "ArrowUp":
                case "ArrowDown":
                case "ArrowLeft":
                case "ArrowRight":
                case "(":
                case ")":
                case "-":
                case " ":    
                    break;
            
                default: format(); break
            }
        });

        element.addEventListener("blur", format);
    });

    document.querySelectorAll("input[name='funcionarios'], input[name='numero']").forEach(element => {
        function format() {
            let string = element.value.replace(/[^0-9]/g, "");

            if (string.length > 6) {
                string = string.slice(0, 6);
            }

            element.value = string;
        }

        element.addEventListener("keyup", event => {
            switch (event.key) {
                case "Backspace":
                case "Shift":
                case "ArrowUp":
                case "ArrowDown":
                case "ArrowLeft":
                case "ArrowRight":
                case "(":
                case ")":
                case "-":
                case " ":    
                    break;
            
                default: format(); break
            }
        });

        element.addEventListener("blur", format);
    });
});