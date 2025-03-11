var index, block;

document.addEventListener("DOMContentLoaded", () => {
    block =  document.querySelector(".slideshow");

    if (block !== null && initialize()) {
        block.querySelector(".slide-button--back").addEventListener("click", () => selectSlide(index - 1));
        block.querySelector(".slide-button--next").addEventListener("click", () => selectSlide(index + 1));

        block.querySelectorAll(".slide-bullet__button").forEach(
            (element, i) => element.addEventListener("click", () => selectSlide(i))
        );
    }
});

let interval;

function startTimer() {
    interval = setInterval(() => selectSlide(index + 1), 5000);

    block.addEventListener("mouseover", pauseTimer);
    block.removeEventListener("mouseleave", startTimer);
}

function pauseTimer() {
    if (interval !== undefined) {
        clearInterval(interval);
    }

    block.addEventListener("mouseleave", startTimer);
    block.removeEventListener("mouseover", pauseTimer);
}

function initialize() {
    const slides = block.querySelectorAll(".slideshow__slide");

    if (slides.length > 0) {
        for (const slide of slides) {
            slide.querySelectorAll(".slide__line").forEach(
                (line, i) => line.style["transition-delay"] = `${i * 350}ms`
            );
        }

        selectSlide(0);

        return startTimer() || true;
    }
}

function updateBullets() {
    block.querySelectorAll(".slide-bullet").forEach(
        (bullet, i) => bullet.classList.toggle("slide-bullet--active", i == index)
    );
}

function showSlide() {
    block.querySelectorAll(".slideshow__slide").item(index).classList.add("slideshow__slide--show");
}

function updateSlides(callback) {
    const endFade = () => {
        showSlide();
        slide.removeEventListener("transitionend", endFade);
    };
    const slide = block.querySelector(".slideshow__slide--show");

    if (slide != null) {
        slide.addEventListener("transitionend", endFade);
        slide.classList.remove("slideshow__slide--show");
    }
    else {
        showSlide();
    }
}

function selectSlide(i) {
    if (i != index) {
        const length = block.querySelectorAll(".slideshow__slide").length;

        index = (i % length + length) % length;
        updateBullets(); updateSlides();
    }
}

