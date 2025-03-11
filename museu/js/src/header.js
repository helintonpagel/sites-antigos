import { Block } from "./block";

window.addEventListener("DOMContentLoaded",
    () => document.querySelectorAll(".header").forEach(widget => new Header(widget))
);

class Header extends Block {
    constructor(widget) {
        super(widget);

        this.windowHandler = this.handleWindow.bind(this);

        this.forOne(".header__button", element => element.addEventListener("click", () => this.showMenu()));
        this.forOne(".header-menu__button", element => element.addEventListener("click", () => this.hideMenu()));

        this.forAll(".header-menu, .header__button",
            element => element.addEventListener("click", () => this.ignoreWindowClick = true)
        );

        this.forOne(".header-menu__link--fall",
            element => element.addEventListener("click", () => element.classList.toggle("header-menu__link--show"))
        );
    }

    showMenu() {
        this.widget.classList.add("header--overlay");
        this.forOne(".header-menu", element => element.classList.add("header-menu--visible"));

        window.addEventListener("click", this.windowHandler);
    }

    hideMenu() {
        this.widget.classList.remove("header--overlay");
        this.forOne(".header-menu", element => element.classList.remove("header-menu--visible"));
        this.forOne(".header-menu__link--fall", element => element.classList.remove("header-menu__link--show"));

        window.removeEventListener("click", this.windowHandler);
    }

    handleWindow() {
        this.ignoreWindowClick = !this.ignoreWindowClick && this.hideMenu();
    }
}