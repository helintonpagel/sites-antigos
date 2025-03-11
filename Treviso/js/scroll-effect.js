window.addEventListener(
    "load",
    function() {
        let targets = document.getElementsByClassName("js-scroll-effect");

        for(let i = 0; i < targets.length; i++) {
            new ScrollEffect(targets[i]);
        }
    }
);

class ScrollEffect {
    constructor(target = undefined) {
        this.boundScrollHandler = this.handleScroll.bind(this);

        if (target != undefined) {
            this.addTarget(target);
        }
    }

    addTarget(target) {
        if (this.target != undefined) {
            throw new Error("Invalid operation: target was already set");
        }

        this.target = target;

        if (this.handleScroll() == false) {
            window.addEventListener("scroll", this.boundScrollHandler);
        }

        return target;
    }

    handleScroll() {
        let target = this.target;

        if (this.getHorizontalPosition(target) <= this.getSpawnPoint(target)) {
            target.classList.add("is-active");
            window.removeEventListener(
                "scroll", this.boundScrollHandler
            );

            return true;
        }
        
        return false;
    }

    getHorizontalPosition(target) {
        let rect = target.getBoundingClientRect();

        if (rect == undefined) {
            throw new Error("Invalid operation: target position is undefined");
        }

        return rect.top;
    }

    getSpawnPoint(target) {
        let point = target.getAttribute("data-spawn-point");

        if (point == undefined) {
            point == 0;
        }

        return point;
    }
}