document.addEventListener("DOMContentLoaded", () => {
    find("header-button").bindAll(["click", "touchstart"], toggleHeader);

    find("field__input").fold(element => {
        updateField(element);
        element.addEventListener("input", event => updateField(event.currentTarget));
    });

    new Search();
});

function toggleHeader(event) {
    const isActive = find("header-button").toggle("header-button--active");

    event.preventDefault();
    find("header-card").toggle("header-card--active", isActive);
    document.body.style["overflow-y"] = isActive ? "hidden" : null;
}

function updateField(element) {
    const isActive = element.value !== "";
    element.parentElement.classList.toggle("field--active", isActive);
}

class Search {
    // constructor() {
    //     find("search__input").fold(element => {
    //         this.handleInput(element);

    //         element.addEventListener("focusout", this.shrink);
    //         element.addEventListener("input", event => this.handleInput(event.currentTarget));
    //     });

    //     find("search__button").bindAll(["click", "touchstart"], this.handleClick);
    // }

    // shrink(element) {
    //     find("search").del("search--expand");
    // }

    // handleClick(event) {
    //     const search = find("search");

    //     if (search.has("search--expand") === false) {
    //         event.preventDefault();
            
    //         search.add("search--expand")
    //         find("search__input").fold(element => element.focus());
    //     }
    // }

    // handleInput(element) {
    //     const isActive = element.value !== "";
    //     element.classList.toggle("search__input--active", isActive);
    // }
}