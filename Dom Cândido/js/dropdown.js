class Dropdown {
    constructor(className, target = null) {
        query(className).attachEvent("click", function(event) {
            event.stopPropagation();
            this.classList.toggle(`${className}--active`);

            if (target != null) {
                query(target).toggleClass(`${target}--active`);
            }
        });

        window.addEventListener("click", () => {
            query(className).removeClass(`${className}--active`);

            if (target != null) {
                query(target).removeClass(`${target}--active`);
            }
        });
    }
}