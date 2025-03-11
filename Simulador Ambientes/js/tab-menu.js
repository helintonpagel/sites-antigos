// window.addEventListener(
//     "load",
//     function() {
//         new TabMenu(
//             document.getElementsByClassName("js-tab-button")
//         );
//     }
// );

class TabMenu {
    constructor(buttons = undefined) {
        if (buttons != undefined) {
            for (let i = 0; i < buttons.length; i++) {
                this.setButton(buttons[i]);
            }
        }
    }

    setButton(button) {
        if (this.activeTab == undefined) {
            this.handleClick(button);
        }

        button.addEventListener(
            "click",
            function(event) {
                this.handleClick(event.target);
            }.bind(this)
        );
    }

    getButtonTargetString(button) {
        let id = button.getAttribute("data-target");

        if (id == undefined) {
            id = button.parentElement.getAttribute("data-target");
        }

        if (id == undefined) {
            throw new Error("This button does not have a 'data-target' attribute");
        }

        return id;
    }

    getButtonTarget(button) {
        let id = button.getAttribute("data-target");

        if (id == undefined) {
            id = button.parentElement.getAttribute("data-target");
        }

        if (id == undefined) {
            throw new Error("This button does not have a 'data-target' attribute");
        }

        return document.getElementById(id);
    }

    handleClick(button) {
        // if (this.activeButton != undefined) {
        //     this.activeButton.classList.remove("is-active");
        // }

        // this.activeButton = button;
        // this.activeButton.classList.add("is-active");

        let olds = document.querySelectorAll(".js-tab-button.is-active");

        for (let i = 0; i < olds.length; i++) {
            olds[i].classList.remove("is-active");
        }

        olds = document.querySelectorAll(".js-tab-button[data-target='" + this.getButtonTargetString(button) +"']" );

        for (let i = 0; i < olds.length; i++) {
            olds[i].classList.add("is-active");
        }

        return this.activatePage(
            this.getButtonTarget(button)
        );
    }

    activatePage(target) {
        if (this.activeTab != undefined) {
            this.activeTab.classList.remove("is-active");
        }

        if (target == undefined) {
            throw new Error("This button does not have a target tab");
        }
        else {
            this.activeTab = target;
            this.activeTab.classList.add("is-active");
        }
    }
}