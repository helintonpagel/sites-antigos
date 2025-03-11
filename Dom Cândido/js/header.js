class Header {
    constructor() {
        Header.updateState();

        window.addEventListener("scroll", () => {
            Header.updateState();
        });
    }

    static updateState() {
        if (document.documentElement.scrollTop == 0) {
            query("header").removeClass("header--small");
        }
        else { query("header").addClass("header--small"); }
    }
}