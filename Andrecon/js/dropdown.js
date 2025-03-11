class Dropdown {
    constructor(className) {
        query(className).attachEvent("click", function(event) {
            event.stopPropagation();
            this.classList.toggle("show");
        });

        window.addEventListener("click", () => query(className).removeClass("show"));
    }
}