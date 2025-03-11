// window.addEventListener(
//     "load",
//     function() {
//         let dropdownTriggers = document.getElementsByClassName("js-drop-down");

//         for (let i = 0; i < dropdownTriggers.length; i++) {
//             (new DropDown())
//                     .setTrigger(dropdownTriggers[i]);
//         }

//         let slideshowElement = document.getElementsByClassName("js-slideshow")[0];

//         if (slideshowElement != null) {
//             slideshow =
//                 (new Slideshow(slideshowElement))
//                     .addImage("img/vineyard-table.jpg")
//                     .addImage("img/vineyard-path.jpg")
//                     .addImage("img/wooden-house.jpg");

//             slideshow.makeBackButton("Anterior");
//             slideshow.makeNextButton("Próximo");
//         }
//     }
// );