class Flexible {
    constructor(element, sizeRatio = 1) {
        this.sizeRatio = sizeRatio;

        if (element == undefined) {
            new Error("Element is undefined");
        }

        window.addEventListener(
            "resize",
            function() {
                this.fixHeight(element)
            }.bind(this)
        );

        this.fixHeight(element);
    }

    fixHeight(element) {
        element.style.height = `${
            24 * Math.ceil(
                element.getBoundingClientRect().width * this.sizeRatio / 24 - 1.5
            )
        }px`;
    }
}