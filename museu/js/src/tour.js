document.addEventListener("DOMContentLoaded",
    () => document.querySelectorAll(".tour").forEach(addMouseEvent)
);

function addMouseEvent(element) {
    element.addEventListener("mousemove",
        event => document.querySelector(".tour__image").style["margin-left"] = `-${50 * event.clientX / window.innerWidth}%`
    );

    console.log(1);
}
