var Loader = (() => {
    var count = 0;
    const event = new Event("contentLoaded");
    
    function registerElement(element) {
        count++;

        ["load", "error"].forEach(string => element.addEventListener(string, () => {
            if (--count == 0) {
                const loader = document.querySelector(".loader");

                if (loader != undefined) {
                    loader.addEventListener("transitionend", () => window.dispatchEvent(event));
                    loader.classList.add("loader--hidden");
                }
            }
        }));
    }

    registerElement(window);

    return {registerElement: registerElement};
})();
