
// class SmoothScroll {
//     constructor(className) {
//         this.handleScroll(location.href)

//         query(className).callEvery(element => 
//             element.addEventListener("click", event => {
//                 if (this.handleScroll(element.href) == true) {
//                     event.preventDefault();
//                 }
//             })
//         );
//     }

//     handleScroll(href) {
//         let anchor = this.extractAnchor(href);

//         if (anchor !== undefined) {
//             let target = document.getElementById(anchor);

//             if (target != null) {
//                 this.scroll(HoveringIcon.getTopDistance(target) - 120);
//                 return true;
//             }
//         }

//         return false;
//     }

//     extractAnchor(str) {
//         if (typeof str == 'string') {
//             let arr = str.split('#');

//             if (arr.length == 2) {
//                 return arr[1];
//             }
//         }

//         return undefined;
//     }

//     scroll(pixels) {
//         let start = (new Date()).getTime();
//         let duration = 1000;
//         let position = window.scrollY;

//         let i = setInterval(() => {
//             let time = ((new Date()).getTime() - start) / duration;

//             if (time >= 1) {
//                 clearInterval(i);
//                 window.scrollTo(0, position + pixels);
//             }
//             else {
//                 window.scrollTo(0, position + this.curvePoint(time) * pixels);
//             }
//         }, 10)
//     }

//     curvePoint(time, c = 1) {
//         return 2 * (time - Math.pow(time, 2)) * c + Math.pow(time, 2);
//     }
// }

function updatePhoto(photo) {
    if (HoveringIcon.getTopDistance(photo) < window.innerHeight) {
        photo.classList.add("show");
    }
}

window.addEventListener(
    "load",
    function() {
        new Dropdown("bars-button");

        let icon = new HoveringIcon("hovering-icon");

        icon.setShowPoint("banner");
        icon.setHidePoint("footer");

        new Field("field__text");
        new Field("field__input");

        new Dropdown("select__button");

        new Gallery();

        query("photo").callEvery(element => {
            updatePhoto(element);
            window.addEventListener("scroll", () => updatePhoto(element));
        });

        query("loader").addClass("hide");

        // new SmoothScroll("menu__anchor");

        let tels = query("field__input").filter(e => e.getAttribute("type") == "tel");

        tels.callEvery(element => {
            element.addEventListener("keyup",
                function(event) {
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
                    
                        default:
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

                            break;
                    }
                }
            );
        })
    }
);

