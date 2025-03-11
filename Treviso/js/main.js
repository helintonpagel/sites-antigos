// window.addEventListener("load", function(){
    
    var header_button = document.getElementsByClassName("topbar__button")[0];

    header_button.addEventListener("click", function() {
        this.classList.toggle("show");
        document.body.parentNode.classList.toggle("no-scroll");
    });

    /* slider */

    var slideList = document.querySelectorAll(".slider .banner");
    var slideLength = slideList.length;
    var currentSlide = 0;

    if (slideLength > 0) {
        slideList[0].classList.add("top");
    }

    function nextSlide() {

        slideList[currentSlide].classList.remove("top");
        currentSlide = (currentSlide + 1) % slideLength;
        slideList[currentSlide].classList.add("top");
    }

    var rightButton = document.getElementsByClassName("slider__right-button")[0];

    if (rightButton != undefined) {
        rightButton.addEventListener("click", nextSlide);
    }

    function previousSlide() {

        slideList[currentSlide].classList.remove("top");
        currentSlide = (currentSlide - 1 + slideLength) % slideLength;
        slideList[currentSlide].classList.add("top");
    }

    var leftButton = document.getElementsByClassName("slider__left-button")[0];

    if (leftButton != undefined) {
        leftButton.addEventListener("click", previousSlide);
    }

    var time;

    function setSlideTime() {
        if (window.innerWidth > 900) {
            time = setInterval(function() {
                nextSlide();
            }, 5000);
        }
    }

    var theFckinSlider = document.getElementsByClassName("slider")[0];

    if (theFckinSlider != undefined) {
        theFckinSlider.
            addEventListener("mouseenter", function() {
                clearInterval(time);
            });

            theFckinSlider.
            addEventListener("mouseleave", function() {
                setSlideTime();
            });

        setSlideTime();
    }

    

    // var slides = document.querySelectorAll(".slider .banner");
    // var currentSlide = 0;

    // var leftButton = document.getElementsByClassName("slider__left-button")[0];
    // var rightButton = document.getElementsByClassName("slider__right-button")[0];

    // rightButton.addEventListener("click", function() {
    //     currentSlide = (currentSlide + 1) % slides.length;
    //     for (var i = 0; i < slides.length; i++) {
    //         slides[i].classList.add("animate");
    //     }
    //     moveSlider();
    // });

    

    // leftButton.addEventListener("click", function() {
    //     currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    //     for (var i = 0; i < slides.length; i++) {
    //         slides[i].classList.add("animate");
    //     }
    //     moveSlider();
    // });

    // var time = setTimeout(function() {
    //     currentSlide = (currentSlide + 1) % slides.length;
    //     for (var i = 0; i < slides.length; i++) {
    //         slides[i].classList.add("animate");
    //     }
    //     moveSlider();
    // }, 5000);

    // function moveSlider () {
    //     clearTimeout(time);

    //     for (var i = 0; i < slides.length; i++) {
    //         slides[i].classList.remove("top");
    //         slides[i].classList.remove("next");
    //         slides[i].classList.remove("previous");
    //     }
        
    //     slides[currentSlide].classList.add("top");
    //     slides[(currentSlide + 1) % slides.length].classList.add("next");
    //     slides[(currentSlide - 1 + slides.length) % slides.length].classList.add("previous");

    //     time = setTimeout(function() {
    //         currentSlide = (currentSlide + 1) % slides.length;
    //         for (var i = 0; i < slides.length; i++) {
    //             slides[i].classList.add("animate");
    //         }
    //         moveSlider();
    //     }, 5000);
    // }

    // moveSlider();

    var rags = document.getElementsByClassName("window__rag");

    function show() {
        for(var i = 0; i < rags.length; i++) {
            var top = rags[i].getBoundingClientRect().top;

            if (top <= 300) {
                rags[i].classList.add("show");
            }
            else {
                // rags[i].classList.remove("show");
            }
        }
    }

    show();


    window.addEventListener("scroll", function() {
        show();
    })

    // accordion

    var acc = document.querySelectorAll('.accordion .banner--dark');
    var activeItem = null;

    var hash = window.location.hash;

    if (hash != "") {
        var e = document.querySelector(hash);

        if (e != null) {
            e.classList.add("show");
            activeItem = e;
        }
    }

    var fi_lst = document.getElementsByClassName("js-fi");

    for (var i = 0; i < fi_lst.length; i++) {
        fi_lst[i].addEventListener("click", function() {
            setTimeout(function () {
                document.location.reload();
            }, 125);
        }, false);
    }
    
    function approximateBy(amount, target) {
        if (window.scrollY > target) {
            window.scrollBy(0, amount * -1);
        }
        else if (window.scrollY < target) {
            window.scrollBy(0, amount);
        }
    }

    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            if (activeItem != null) {
                activeItem.classList.remove("show");
            }
            this.classList.add("show");
            activeItem = this;
            var t = Date.now() + 500;

            var i = setInterval(function(){
                var s = document.querySelector('.accordion .banner--dark.show');
                var distance = window.scrollY - s.offsetTop;

                if (Math.abs(distance) >= 1 && Date.now() <= t) {
                    window.scrollBy(0, distance / 10 * -1);
                }
                else if (Date.now() > t) {
                    clearInterval(i);
                }
            }, 10);
        });
    }

    (function(){
        var x, i, j, l, ll, selElmnt, a, b, c;
    /* Look for any elements with the class "custom-select": */
    x = document.getElementsByClassName("custom-select");
    l = x.length;
    for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
        /* For each option in the original select element,
        create a new DIV that will act as an option item: */
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function(e) {
            /* When an item is clicked, update the original select box,
            and the selected item: */
            var y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for (i = 0; i < sl; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
                


                s.selectedIndex = i;
                h.innerHTML = this.innerHTML;
                y = this.parentNode.getElementsByClassName("same-as-selected");
                yl = y.length;
                for (k = 0; k < yl; k++) {
                y[k].removeAttribute("class");
                }
                this.setAttribute("class", "same-as-selected");

                console.log(s);
                break;
            }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
        /* When the select box is clicked, close any other select boxes,
        and open/close the current select box: */
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
    }

    function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
        arrNo.push(i)
        } else {
        y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
        }
    }
    }

    /* If the user clicks anywhere outside the select box,
    then close all select boxes: */
    document.addEventListener("click", closeAllSelect);
    })();

    $(document).ready(function(){
        $('.phone_with_ddd').mask('(00) 00000-0000');
        
      });
// });