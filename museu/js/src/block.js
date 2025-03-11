export class Block {
    constructor(widget) {
        this.widget = widget;
    }

    forOne(selectors, callback) {
        return (value => value === null ? null : callback(value))(this.widget.querySelector(selectors));
    }

    forAll(selectors, callback) {
        return this.widget.querySelectorAll(selectors).forEach((value, index, array) => callback(value, index, array));
    }
}