class Fly {
    constructor(className) {
        this.className = className;

        this.updateAll()
        window.addEventListener("scroll", () => this.updateAll());
    }

    updateAll() {
        query(this.className).callEvery((element) => this.update(element));
    }

    update(element) {
        if (Fly.getTopDistance(element) < window.innerHeight) {
            element.classList.add(`${this.className}--show`);
        }
    }

    static getTopDistance(element) {
        let rect;

        if (element == undefined || (rect = element.getBoundingClientRect()) == undefined) {
            return Number.NaN;
        }

        return rect.top;
    }
}