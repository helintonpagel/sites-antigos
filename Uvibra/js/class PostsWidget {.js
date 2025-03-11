class PostsWidget {
    constructor() {
        this.index = 0;
        this.boundCheckTouch = this.checkTouch.bind(this);

        const element = find("story").item(0);

        if (element != undefined) {
            this.story = new Finder([element]);

            if (this.length > 0) {
                this.story.find("story__next").bind("click", this.nextSlide.bind(this));
                this.story.find("story__prev").bind("click", this.previousSlide.bind(this));

                this.story.find("story__view").bind("touchstart", this.startTouch.bind(this));
                this.story.find("story__prev").find("chevron").add("chevron--hidden");

                window.addEventListener("resize", () => {
                    if (this.index >= this.length - this.offset) {
                        this.index = this.length - this.offset;
                    }
                    this.transform(this.index);
                });
            }
        }
    }

    get length() {
        return this.story.find("story__item").items.length;
    }

    get offset() {
        const width = window.innerWidth;

        if (width < 750) {
            return 1;
        }
        else if (width < 1000) {
            return 3;
        }
        else {
            return 4;
        }
    }

    nextSlide() {
        if (this.index < this.length - this.offset) {
            this.transform(++this.index);
            this.story.find("story__prev").find("chevron").del("chevron--hidden");

            if (this.index == this.length - this.offset) {
                this.story.find("story__next").find("chevron").add("chevron--hidden");
            }
        }
    }

    previousSlide() {
        if (this.index > 0) {
            this.transform(--this.index);
            this.story.find("story__next").find("chevron").del("chevron--hidden");

            if (this.index == 0) {
                this.story.find("story__prev").find("chevron").add("chevron--hidden");
            }
        }
    }

    transform(index) {
        const element = this.story.find("story__list").item(0);

        if (element !== undefined) {
            element.style["transform"] = `translate(${0 - index * 100 / this.offset}%)`;
        }
    }

    startTouch(event) {
        this.touch = event.targetTouches[0];

        this.story.find("story__view").bind("touchmove", this.boundCheckTouch);
    }

    checkTouch(event) {
        const offset = this.touch.screenX - event.targetTouches[0].screenX;

        if (Math.abs(offset) > 50) {
            if (offset > 50) {
                this.nextSlide();
            }
            else {
                this.previousSlide();
            }

            this.story.find("story__view").unbind("touchmove", this.boundCheckTouch);
        }
    }
}