class HoveringIcon {
    constructor(className) {
        this.className = className;

        window.addEventListener(
            "scroll", () => this.updateAll()
        );
    }

    setHidePoint(className) {
        this.hidePoint = query(className).items[0];
        this.updateAll();
    }

    setShowPoint(className) {
        this.showPoint = query(className).items[0];
        this.updateAll();
    }

    updateAll() {
        query(this.className).callEvery((element) => this.update(element));
    }

    update(element) {
        let isWithin = this.isWithin(HoveringIcon.getTopDistance(element));

        if (isWithin) {
            element.classList.add("show");
        }
        else {
            element.classList.remove("show");
        }
    }

    isWithin(distance) {
        let hidePoint = HoveringIcon.getTopDistance(this.hidePoint);
        let showPoint = HoveringIcon.getBottomDistance(this.showPoint);

        return (
            (isNaN(showPoint) || showPoint <= distance) &&
            (isNaN(hidePoint) || hidePoint >= distance)
        );
    }

    static getTopDistance(element) {
        let rect;

        if (element == undefined || (rect = element.getBoundingClientRect()) == undefined) {
            return Number.NaN;
        }

        return rect.top;
    }

    static getBottomDistance(element) {
        let rect;

        if (element == undefined || (rect = element.getBoundingClientRect()) == undefined) {
            return Number.NaN;
        }

        return rect.bottom;
    }
}