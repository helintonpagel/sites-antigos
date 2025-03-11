document.addEventListener("DOMContentLoaded", () =>
    document.querySelectorAll("[data-mask]").forEach(input => new Mask(input))
);

class Mask {
    constructor(input) {
        this.input = input;

        if (this.initialize()) {
            input.addEventListener("keyup", () => this.format());
        }
    }

    initialize() {
        this.expression = this.makeExpression(this.input.getAttribute("data-mask"));

        return true;
    }

    makeExpression(mask) {
        let exp = "";

        for (const match of mask.matchAll(/0+/g)) {
            exp = `${exp}([0-9]{1,${match[0].length}})?`;
        }

        return new RegExp(exp);
    }

    format() {
        let result = "";
        let pieces = this.input.value.replace(/[^0-9]/g, "").match(this.expression);

        
    }
}