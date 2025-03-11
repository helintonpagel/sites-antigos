document.addEventListener("DOMContentLoaded", () => {
    new Header();
    new Dropdown("header-button");
    new Slideshow();

    new Dropdown("select__field");

    new Popup("thumbnail__image");

    new Fly("fly-effect");

    let newsletter =  new HoveringIcon("newsletter");

    newsletter.setShowPoint("slideshow");

    new Field("form__input");
    new Field("form__textarea");

    new Dropdown("newsletter__toggle", "newsletter");

    new window.VLibras.Widget('https://vlibras.gov.br/app');

    query("header-menu").items[0].style["height"] = window.innerHeight + 'px';

    window.addEventListener("resize", () => {
        query("header-menu").items[0].style["height"] = window.innerHeight + 'px';
    });

    query("js-phone").callEvery(element => {
        function format() {
            let string = element.value.replace(/[^0-9]/g, "");

            if (string.length > 11) {
                string = string.slice(0, 11);
            }

            let pieces = string.match(/([0-9]{2})([0-9]{5})([0-9]{4})/);

            if (pieces == null) {
                pieces = string.match(/([0-9]{1,2})?([0-9]{1,4})?([0-9]{1,4})?/);
            }

            let format =
                (pieces[1] == undefined ? `` : `(${pieces[1]})`) + 
                (pieces[2] == undefined ? `` : ` ${pieces[2]}`) + 
                (pieces[3] == undefined ? `` : `-${pieces[3]}`);

            element.value = format;
        }

        element.addEventListener("keyup", event => {
            switch (event.key) {
                case "Backspace":
                case "Shift":
                case "ArrowUp":
                case "ArrowDown":
                case "ArrowLeft":
                case "ArrowRight":
                case "(":
                case ")":
                case "-":
                case " ":    
                    break;
            
                default: format(); break
            }
        });

        element.addEventListener("blur", format);
    })
});

window.addEventListener("load", () => {
    query("loader").addClass("loader--hidden");
});



var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player');
}

window.addEventListener("load", () => {
    function handleEscape(event) {
        if (event.key == "Escape") {
            query("video").removeClass("video--show");
            player.stopVideo();
        }
    }

    query("video__button").attachEvent("click", event => {
        query("video").addClass("video--show");

        window.addEventListener("keydown", handleEscape);
        player.playVideo();
        event.preventDefault();
    });

    query("video__overlay").attachEvent("click", () => {
        query("video").removeClass("video--show");
        player.stopVideo();

        window.removeEventListener("keydown", handleEscape);
    });
});