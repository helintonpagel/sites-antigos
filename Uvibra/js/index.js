function find(arg) {
    if (typeof arg === "object") {
        return new Finder([arg]);
    }
    else {
        return new Finder(
            [].slice.call(document.getElementsByClassName(arg))
        );
    }
}

class Finder {
    constructor(items = []) {
        this.items = items;
    }

    get length() {
        return this.items.length;
    }

    find(name) {
        return this.fold(
            (element, partial) => {
                return partial.push(element.getElementsByClassName(name))
            },
            new Finder()
        );
    }

    fold(callback, partial = null) {
        for (const element of this.items) {
            partial = callback(element, partial);
        }

        return partial;
    }

    push(items) {
        return new Finder(
            this.items.concat([].slice.call(items))
        );
    }

    bind(binding, callback, capture = false) {
        this.fold(element => {
            element.addEventListener(binding, callback, capture)
        });
    }

    unbind(binding, callback, capture = false) {
        this.fold(element => {
            element.removeEventListener(binding, callback, capture)
        });
    }

    bindAll(bindlst, callback, capture = false) {
        for (const binding of bindlst) {
            this.bind(binding, callback, capture);
        }
    }

    item(index) {
        return this.items[index];
    }

    add(name) {
        this.fold(element => element.classList.add(name));
    }

    del(name) {
        this.fold(element => element.classList.remove(name));
    }

    delAll(names) {
        for (const name of names) { this.del(name); }
    }

    has(name) {
        return this.item.length > 0 && this.item(0).classList.contains(name);
    }

    toggle(name, state) {
        return this.fold(element => element.classList.toggle(name, state));
    }
}

document.addEventListener("DOMContentLoaded", () => new Slider());

class Slider {
    constructor() {
        const element = find("slider").item(0);

        this.boundCheckTouch = this.checkTouch.bind(this);
        this.boundStartTimer = this.startTimer.bind(this);
        this.boundPauseTimer = this.pauseTimer.bind(this);

        if (element !== undefined) {
            this.slider = new Finder([element]);

            if (this.initialize() === true) {
                this.slider.bind("touchstart", this.startTouch.bind(this));
    
                this.slider.find("slider__next").bind("click", this.nextSlide.bind(this));
                this.slider.find("slider__prev").bind("click", this.prevSlide.bind(this));

                this.slider.find("slider__list").bind("transitionend", this.finishTransform.bind(this));
            }
        }
    }

    get length() {
        return this.slider.find("slider__item").items.length;
    }

    initialize() {
        if (this.length > 0) {
            const parent = this.slider.find("slider__list").item(0);
            const slides = parent != undefined ? parent.children : undefined;

            if (slides !== undefined && slides.length == this.length) {
                this.index = 0;
                const first = slides.item(0);

                parent.appendChild(first.cloneNode(true));
                parent.insertBefore(slides.item(slides.length - 2).cloneNode(true), first);

                this.startTimer();

                return true;
            }
        }

        return false;
    }

    startTouch(event) {
        if (this.interval !== undefined) {
            clearInterval(this.interval);
        }

        this.touchStart = event.targetTouches[0];
        this.slider.bind("touchmove", this.boundCheckTouch);
    }

    checkTouch(event) {
        const offset = this.touchStart.screenX - event.targetTouches[0].screenX;

        if (Math.abs(offset) > 50) {
            if (offset > 50) {
                this.nextSlide();
            }
            else {
                this.prevSlide();
            }

            this.slider.unbind("touchmove", this.boundCheckTouch);
        }
    }

    nextSlide() {
        if (this.halted !== true) {
            this.index = (this.index + 1) % this.length;
            this.transform();
        }
    }

    prevSlide() {
        if (this.halted !== true) {
            this.index = (this.index + this.length - 1) % this.length;
            this.transform();
        }
    }

    transform() {
        const element = this.slider.find("slider__list").item(0);

        if (element !== undefined && this.halted !== true) {
            this.halted = true;
            element.style["transform"] = `translate(${0 - this.index * 100}%)`;
        }
    }

    finishTransform() {
        const index = this.index;

        if (index == 0 || index == this.length - 1) {
            const element = this.slider.find("slider__list").item(0);

            if (index == 0) {
                this.index = this.length - 2;
            }
            else {
                this.index = 1;
            }

            this.halted = false;
            element.style["transition"] = "none";
            
            this.transform();

            element.offsetHeight;
            element.style["transition"] = null;
        }

        this.halted = false;
    }

    startTimer() {
        this.interval = setInterval(this.nextSlide.bind(this), 4000);

        this.slider.bind("mouseover", this.boundPauseTimer);
        this.slider.unbind("mouseleave", this.boundStartTimer);
    }

    pauseTimer() {
        if (this.interval !== undefined) {
            clearInterval(this.interval);
        }

        this.slider.bind("mouseleave", this.boundStartTimer);
        this.slider.unbind("mouseover", this.boundPauseTimer);
    }
}

class PostsWidget {
    constructor() {
        const element = find("posts-widget").item(0);

        if (element != undefined) {
            this.widget = new Finder([element]);

            if (this.initialize() === true) {
                this.widget.find("posts-widget__next").bind("click", this.nextItem.bind(this));
                this.widget.find("posts-widget__prev").bind("click", this.prevItem.bind(this));

                this.widget.find("posts-widget__pillar").bind("touchstart", this.startTouch.bind(this));
            }
        }
    }

    get length() {
        return this.widget.find("posts-widget__item").items.length;
    }

    get offset() {
        const list = this.widget.find("posts-widget__list").item(0);
        const item = this.widget.find("posts-widget__item").item(0);
        
        if (list !== undefined && item !== undefined) {
            return Math.round(list.getBoundingClientRect().width / item.getBoundingClientRect().width);
        }
        else {
            return NaN;
        }
    }

    initialize() {
        if (this.length > 0) {
            const offset = this.offset;

            if (offset !== NaN && offset !== Infinity) {
                this.selectItem(0)
                find(window).bindAll(["resize", "load"], () => this.selectItem(this.index));

                return true;
            }
        }

        return false;
    }

    nextItem() {
        this.selectItem(this.index + 1);
    }

    prevItem() {
        this.selectItem(this.index - 1);
    }

    selectItem(index) {
        const module = this.length - this.offset;

        this.index = index < 0 ? 0 : index > module ? module : index;

        this.widget.find("posts-widget__prev").find("chevron").toggle("chevron--hidden", this.index == 0);
        this.widget.find("posts-widget__next").find("chevron").toggle("chevron--hidden", this.index == module);

        this.transform();
    }

    transform() {
        const element = this.widget.find("posts-widget__list").item(0);
        if (element !== undefined) {
            element.style["transform"] = `translate(${0 - this.index * 100 / this.offset}%)`;
            
        }
    }

    startTouch(event) {
        this.touchStart = event.targetTouches[0];

        if (this.boundCheckTouch === undefined) {
            this.boundCheckTouch = this.checkTouch.bind(this);
        }

        this.widget.find("posts-widget__pillar").bind("touchmove", this.boundCheckTouch);
    }

    checkTouch(event) {
        const offset = this.touchStart.screenX - event.targetTouches[0].screenX;

        if (Math.abs(offset) > 50) {
            if (offset > 50) {
                this.nextItem();
            }
            else {
                this.prevItem();
            }

            this.widget.find("posts-widget__pillar").unbind("touchmove", this.boundCheckTouch);
        }
    }
}

class Modal {
    constructor() {
        const element = find("modal").item(0);

        if (element != undefined) {
            this.modal = find(element);

            if (this.initialize() === true) {
                this.modal.bind("click", this.handleModalClick.bind(this));

                this.modal.find("modal__next").bind("click", this.nextImage.bind(this));
                this.modal.find("modal__prev").bind("click", this.prevImage.bind(this));
            }
        }
    }

    get length() {
        return find("photos__image").items.length;
    }

    initialize() {
        this.boundHandleKeyboard = this.handleKeyboard.bind(this);

        if (this.length > 0) {
            let index = 0;

            find("photos__button").fold(
                element => {
                    find(element).bind("click", () => this.openModal(index));
                }
            );

            return true;
        }
        
        return false;
    }

    openModal(index = 0) {
        this.selectImage(index);
        this.modal.add("modal--active");
        find(window).bind("keydown", this.boundHandleKeyboard);
    }

    closeModal() {
        this.modal.del("modal--active");
        find(window).unbind("keydown", this.boundHandleKeyboard);
    }

    selectImage(index) {
        const length = this.length;
        this.index = index >= 0 ? index % length : index % length + length;
        
        this.eraseImage();
        this.cloneImage();
    }

    eraseImage() {
        this.modal.find("modal__image").fold(
            element => {
                element.parentElement.removeChild(element);
            }
        )
    }

    cloneImage() {
        const image = find("photos__image").item(this.index);

        if (image !== undefined) {
            const modal = this.modal.item(0);
            const clone = image.cloneNode(true);

            clone.removeAttribute("style");
            clone.setAttribute("class", "modal__image");

            if (modal.firstElementChild === undefined) {
                modal.appendChild(clone)
            }
            else {
                modal.insertBefore(clone, modal.firstElementChild);
            }
        }
        else {
            console.warn(`.photos__image:nth(${this.index}) not found.`);
        }
    }

    handleModalClick(event) {
        this.modal.toggle("modal--active", event.target !== this.modal.item(0));
    }

    nextImage() {
        this.selectImage(this.index + 1);
    }

    prevImage() {
        this.selectImage(this.index - 1);
    }

    handleKeyboard(event) {
        const keyMap = {
            ArrowLeft: this.prevImage,
            ArrowRight: this.nextImage,
            Escape: this.closeModal
        }

        if (keyMap[event.key] !== undefined) { keyMap[event.key].call(this); }
    }
}

class ValuesWidget {
    constructor() {
        const element = find("values-widget").item(0);

        if (element != undefined) {
            this.widget = new Finder([element]);

            if (this.initialize() === true) {
                this.widget.find("values-widget__next").bind("click", this.nextItem.bind(this));
                this.widget.find("values-widget__prev").bind("click", this.prevItem.bind(this));

                this.widget.find("values-widget__pillar").bind("touchstart", this.startTouch.bind(this));
            }
        }
    }

    get length() {
        return this.widget.find("values-widget__item").items.length;
    }

    get offset() {
        const list = this.widget.find("values-widget__list").item(0);
        const item = this.widget.find("values-widget__item").item(0);
        
        if (list !== undefined && item !== undefined) {
            return Math.round(list.getBoundingClientRect().width / item.getBoundingClientRect().width);
        }
        else {
            return NaN;
        }
    }

    initialize() {
        if (this.length > 0) {
            const offset = this.offset;

            if (offset !== NaN && offset !== Infinity) {
                this.selectItem(0)
                find(window).bindAll(["resize", "load"], () => this.selectItem(this.index));

                return true;
            }
        }

        return false;
    }

    nextItem() {
        this.selectItem(this.index + 1);
    }

    prevItem() {
        this.selectItem(this.index - 1);
    }

    selectItem(index) {
        const module = this.length - this.offset;

        this.index = index < 0 ? 0 : index > module ? module : index;

        this.widget.find("values-widget__prev").find("chevron").toggle("chevron--hidden", this.index == 0);
        this.widget.find("values-widget__next").find("chevron").toggle("chevron--hidden", this.index == module);

        this.transform();
    }

    transform() {
        const element = this.widget.find("values-widget__list").item(0);
        if (element !== undefined) {
            element.style["transform"] = `translate(${0 - this.index * 100 / this.offset}%)`;
            
        }
    }

    startTouch(event) {
        this.touchStart = event.targetTouches[0];

        if (this.boundCheckTouch === undefined) {
            this.boundCheckTouch = this.checkTouch.bind(this);
        }

        this.widget.find("values-widget__pillar").bind("touchmove", this.boundCheckTouch);
    }

    checkTouch(event) {
        const offset = this.touchStart.screenX - event.targetTouches[0].screenX;

        if (Math.abs(offset) > 50) {
            if (offset > 50) {
                this.nextItem();
            }
            else {
                this.prevItem();
            }

            this.widget.find("values-widget__pillar").unbind("touchmove", this.boundCheckTouch);
        }
    }
}

function preserveAspect(name, ratio) {
    const preserveAspect = () => {
        find(name).fold(
            element => {
                element.style["height"] = `${
                    24 * Math.ceil(element.getBoundingClientRect().width / ratio / 24)
                }px`;
            }
        )
    }

    preserveAspect();
    find(window).bindAll(["load", "resize"], preserveAspect);
}

function modifyInput(names) {
    for (const name of names) {
        const modifyInput = element => {
            find(element).toggle(`${name}--active`, element.value !== "");
        }
    
        find(name).fold(
            element => {
                modifyInput(element);
                find(element).bind("input", () => modifyInput(element));
            }
        );   
    }
}

find(window).bindAll(
    ["scroll", "load"], () => {
        find("top-bar").fold(element => {
            find(element).toggle("top-bar--shrink", window.scrollY > 36);
        }
    );
});



document.addEventListener("DOMContentLoaded", () => {
    find("toggle").bindAll(
        ["click", "touchstart"],
        event => {
            event.preventDefault();
            find(event.currentTarget).toggle("toggle--active");
        }
    );

    preserveAspect("card", 0.711598746); // todo: data-aspect!!!
    preserveAspect("photos__image", 1.643617021276596);

    modifyInput(["field__input", "search__input"]);

    new Slider();
    new PostsWidget();
    new Modal();
    new ValuesWidget();
});


function onYouTubeIframeAPIReady() { new Video(new YT.Player('player')); }

class Video {
    constructor(player) {
        this.player = player;
        const element = find("video").item(0);

        if (element != undefined) {
            this.modal = find(element);

            if (this.initialize() === true) {
                this.modal.find("video__thumb").bind("click", this.openVideo.bind(this));
                this.modal.find("video__overlay").bind("click", this.handleOverlayClick.bind(this));
            }
        }
    }

    initialize() {
        this.boundHandleKeyboard = this.handleKeyboard.bind(this);
        return true;
    }

    openVideo() {
        this.player.playVideo();

        find(window).bind("keydown", this.boundHandleKeyboard);
        this.modal.find("video__overlay").add("video__overlay--active");
    }

    closeVideo() {
        this.player.stopVideo();

        find(window).unbind("keydown", this.boundHandleKeyboard);
        this.modal.find("video__overlay").del("video__overlay--active");
    }

    handleOverlayClick(event) {
        if (event.target === event.currentTarget) {
            this.closeVideo();
        }
    }

    handleKeyboard(event) {
        if (event.key == "Escape") { this.closeVideo(); }
    }
}