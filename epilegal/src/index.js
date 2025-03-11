import "./inline-svg";
import "./slideshow";
import "./plans";
import "./form";

function modifyInput(names) {
    for (const name of names) {
        const modifyInput = element => {
            element.classList.toggle(`${name}--active`, element.value !== "");
        }
    
        document.querySelectorAll("." + name).forEach(element => {
            modifyInput(element);
            element.addEventListener("input", () => modifyInput(element));
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".plan-select__button").forEach(button => {
        ["click", "touchstart"].forEach(string => {
            button.addEventListener(string, event => {
                button.classList.toggle("plan-select__button--active");
            })
        });
    });

    window.addEventListener("click", event => {
        document.querySelectorAll(".plan-select__button").forEach(button => {
            if (button != event.target) {
                button.classList.remove("plan-select__button--active");
            }
        });
    })/

    document.querySelectorAll(".menu-button").forEach(button => {
        ["click", "touchstart"].forEach(string => {
            button.addEventListener(string, event => {
                event.preventDefault();
                event.stopPropagation();
                button.classList.toggle("menu-button--active");
            })
        });
    });

    window.addEventListener("click", event => {
        document.querySelectorAll(".menu-button").forEach(button => {
            if (button != event.target) {
                button.classList.remove("menu-button--active");
            }
        });
    })

    modifyInput(["news-field__input", "contact-field__input", "contact-message__input", "formulary-field__input"]);

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
    })

    document.querySelectorAll(".plan-select__item").forEach(element => {
        element.addEventListener("click", () => {
            element.parentElement.parentElement.querySelector(".plan-select__text").innerText = element.innerText;
            element.parentElement.parentElement.parentElement.querySelector(".plan-card__value").innerText = element.getAttribute("data-value");
            element.parentElement.parentElement.parentElement.querySelector(".plan-card__period").innerText = element.getAttribute("data-period");
        })
    });

    const header = document.querySelector(".header");

    if (header != null) {
        header.classList.toggle("header--fixed", window.scrollY >= 120);

        window.addEventListener("scroll", () => {
            if (window.scrollY >= 168) {
                header.classList.add("header--fixed");
                document.querySelectorAll(".top-button").forEach(element => element.classList.add("top-button--show"));
            }
            else if (window.scrollY == 0) {
                header.classList.remove("header--fixed");
                document.querySelectorAll(".top-button").forEach(element => element.classList.remove("top-button--show"));
            }
        });
    }
})

