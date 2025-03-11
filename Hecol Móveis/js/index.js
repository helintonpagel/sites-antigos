document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".header__button");

    if (button != undefined) {
        ["click", "touchstart"].forEach(string => 
            button.addEventListener(string, event => {
                event.preventDefault(); button.classList.toggle("header__button--active");
            })
        );
    }

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

    function modifyInput(names) {
        for (const name of names) {
            const modifyInput = element => {
                element.classList.toggle(`text-field__input--active`, element.value !== "");
            }
        
            document.querySelectorAll(name).forEach(element => {
                modifyInput(element);
                element.addEventListener("input", () => modifyInput(element));
                
            });
        }
    }

    modifyInput([".text-field__input"]);

    document.querySelectorAll(".products__image").forEach(element => {
        window.addEventListener("scroll", () => {
            if (element.getBoundingClientRect().top < window.innerHeight) {
                element.classList.add("show");
            }
        });
    });
});

window.addEventListener("contentLoaded", () => {
    document.querySelectorAll(".banner__item, .banner-text__content").forEach(element => element.classList.add("banner__item--show"));
});