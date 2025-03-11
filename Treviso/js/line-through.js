window.addEventListener(
    "load",
    function() {
        let headings = document.getElementsByClassName("js-heading");

        for(let i = 0; i < headings.length; i++) {
            new LineThrough(headings[i]);
        }
    }
);

class LineThrough {
    constructor(heading) {
        this.setBackground(heading);

        window.addEventListener(
            "resize",
            function(event) {
                this.setBackground(heading);
            }.bind(this)
        );
    }

    getTextWidth(heading) {
        if (this.textWidth == undefined) {
            let previousStyle =
                getComputedStyle(heading).getPropertyValue("display");

            heading.style.display = "inline-block";
            this.textWidth = this.getWidth(heading);
            heading.style.display = previousStyle;
        }
        
        return this.textWidth;
    }

    getWidth(heading) {
        let rects = heading.getClientRects();

        if (rects.length == 1) {
            return rects[0].width;
        }

        return undefined;
    }

    setBackground(heading) {
        heading.style.backgroundSize =  this.computeLineLength(heading) + "px 1px";
    }

    computeLineLength(heading) {
        let extraWidth = 16; // in px
        let totalSpace =
            this.getWidth(heading) -
            (extraWidth + this.getTextWidth(heading));

        return Math.round(
            totalSpace / 2
        );
    }
}