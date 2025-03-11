window.addEventListener(
    "load",
    function() {
        let modals = document.getElementsByClassName("js-modal");

        for (let i = 0; i < modals.length; i++) {
            new Modal(modals[i]);
        }

        let videos = document.getElementsByClassName("js-video");
        
        for (let i = 0; i < videos.length; i++) {
            new VideoModal(videos[i]);
        }
    }
);

class Modal {
    constructor(modal) {
        if (modal == null) {
            new Error("Invalid operation: modal element is null");
        }

        this.modal = modal;

        this.setButton();
        this.throwModal();

        query("modal__button").items[1].addEventListener("keydown", (event) => {
            if (event.key == "Tab" && event.shiftKey == false) {
                query("modal__brand").items[0].focus();
                event.preventDefault();
            }
        });

        query("modal__brand").items[0].addEventListener("keydown", (event) => {
            if (event.key == "Tab" && event.shiftKey) {
                query("modal__button").items[1].focus();
                event.preventDefault();
            }
        });
    }

    getElement(name) {
        let collection = this.modal.getElementsByClassName(name);

        if (collection.length < 1) {
            throw new Error("Invalid operation: this age modal does not a '" + name + "' class");
        }

        return collection[0];
    }

    setButton() {      
        let button = this.getElement("js-modal-yes");

        button.addEventListener(
            "click",
            this.handleClick.bind(this)
        );
    }

    setCheckbox() {
        this.checkbox = new Checkbox(this.getElement("js-checkbox"));
    }

    handleClick(event) {
        this.modal.classList.remove("is-active");
        this.setCookie();
        
        document.documentElement.style["overflow-y"] = "scroll";
    }

    addErrorMessage() {
        this.modal.classList.add("has-error");
        this.boundRemoveErrorMessage = this.removeErrorMessage.bind(this);

        window.addEventListener(
            "click", this.boundRemoveErrorMessage
        );
    }

    removeErrorMessage(event) {
        this.modal.classList.remove("has-error");

        window.removeEventListener(
            "click", this.boundRemoveErrorMessage
        );
    }

    throwModal() {
        if (this.getCookie("ofAge") != "true") {
            this.modal.classList.add("is-active");
            document.documentElement.style["overflow-y"] = "hidden";

            query("modal__button").items[0].focus();
        }
    }

    getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }

    setCookie() {
        let date = new Date();
        date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000);

        document.cookie = "ofAge=true; expires=" + date.toUTCString() + "; SameSite=Lax; path=/";
    }
}

class VideoModal {
    constructor(modal) {
        if (modal == null) {
            new Error("Invalid operation: modal element is null");
        }

        this.modal = modal;
        this.boundCloseModal = this.closeModal.bind(this);
        this.boundHandleKeypress = this.handleKeypress.bind(this);

        this.setButton();
    }

    getElement(name) {
        let collection = this.modal.getElementsByClassName(name);

        if (collection.length < 1) {
            throw new Error("Invalid operation: this age modal does not a '" + name + "' class");
        }

        return collection[0];
    }

    setButton() {      
        let button = this.getElement("js-button");

        button.addEventListener(
            "click",
            this.openModal.bind(this)
        );
    }

    openModal(event) {
        window.addEventListener(
            "click", this.boundCloseModal
        );

        window.addEventListener(
            "keydown", this.boundHandleKeypress
        );

        this.createIframe();
        this.modal.classList.add("is-active");

        event.stopPropagation();
    }

    closeModal() {
        window.removeEventListener(
            "click", this.boundCloseModal
        );

        window.removeEventListener(
            "keydown", this.boundHandleKeypress
        );

        this.deleteIframe();
        this.modal.classList.remove("is-active");
    }

    handleKeypress(event) {
        if (event.key === "Escape") {
            this.closeModal();
        }
    }

    createIframe() {
        let embedded = this.modal.getElementsByClassName("js-embed")[0];

        if (embedded == undefined) {
            throw new Error("Invalid operation: 'embed' child is missing");
        }

        embedded.innerHTML =
            '<iframe class="video__iframe" id="ytplayer" type="text/html" width="720" height="405"' +
                'src="https://www.youtube.com/embed/4cMZDwy2ElI?autoplay=1&cc_load_policy=1&color=white&mute=1"' +
                'frameborder="0">' +
            '</iframe>';

        this.iframe = embedded.firstChild;
    }

    deleteIframe() {
        let iframe = this.iframe;
        
        if (iframe == undefined) {
            throw new Error("Invalid operation: iframe child is missing");
        }

        iframe.parentNode.removeChild(iframe);
    }
}