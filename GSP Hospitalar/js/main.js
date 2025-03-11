function applyForEach(className, callback, removeClass = true) {
    let targets = document.getElementsByClassName(className);

    for (let i = 0; i < targets.length; i++) {
        callback(targets[i]);
    }

    if (removeClass == true) {
        while(targets.length > 0) {
            targets[0].classList.remove(className);
        }
    }
}

window.addEventListener(
    "load",
    function() {
        applyForEach(
            "js-dropdown",
            function(element) { new Dropdown(element); }
        );

        applyForEach(
            "js-slideshow",
            function(element) {
                new Slideshow(element, "slideshow-button--back", "slideshow-button--next");
            }
        );

        applyForEach(
            "js-carousel",
            function(element) {
                new Carousel(element, "slideshow-button--back", "slideshow-button--next");
            }
        );

        applyForEach(
            "js-field",
            function(element) {
                let target = element.getElementsByClassName("js-input");

                if (target.length > 0) {
                    new Field(element, target[0]);
                }
            }
        );

        applyForEach(
            "js-product",
            function(element) { new Flexible(element) }
        );

        applyForEach(
            "js-informative",
            function(element) { new Flexible(element, 1.45) }
        );

        applyForEach(
            "js-modal",
            function(element) { new Modal(element, "modal__button--back", "modal__button--next") }
        );
    }
);

function getBottomDistance(target) {
    let rect = target.getBoundingClientRect();

    if (rect == undefined) {
        throw new Error("Invalid operation: target position is undefined");
    }

    return rect.bottom;
}

function getTopDistance(target) {
    let rect = target.getBoundingClientRect();

    if (rect == undefined) {
        throw new Error("Invalid operation: target position is undefined");
    }

    return rect.top;
}

window.addEventListener(
    "scroll",
    function() {
        let whatsapp = document.getElementsByClassName("hanging-whatsapp");
        let slideshow = document.getElementsByClassName("slideshow");
        let bottom = document.getElementsByClassName("footer");

        if (whatsapp.length > 0 && slideshow.length > 0 && bottom.length > 0) {
            let myDistance = getTopDistance(whatsapp[0]);

            console.log(myDistance);

            if (getBottomDistance(slideshow[0]) <= myDistance && getTopDistance(bottom[0]) >= myDistance)  {
                whatsapp[0].classList.add("show");
            }
            else {
                whatsapp[0].classList.remove("show");
            }
        }
    }
);