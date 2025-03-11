(() => {
    document.addEventListener("DOMContentLoaded", () => 
        document.querySelectorAll("[class$='icon'], .logo__image, .products__watermark, .footer__icon, .tooltip__image").forEach(makeInline)
    );

    function makeInline(img) {
        const src = img.getAttribute("src");

        if (src !== null && src.endsWith(".svg")) {
            fetchDocument(src, xmlDocument => {
                img.parentElement.insertBefore(
                    insertContent(xmlDocument.querySelector("svg"), createElement(img)), img
                );
                img.remove();
            });
        }
    }

    function fetchDocument(document, callback) {
        const request = new XMLHttpRequest();

        request.addEventListener("load", () => {
            if (request.status >= 200 && request.status < 400) {
                return callback(request.responseXML);
            }

            console.warn(`${request.responseURL}: ${request.statusText}`);
        });

        request.addEventListener("error", () => {
            console.warn(`An error ocurred when opening ${document}`);
        });

        if (Loader != undefined) {
            Loader.registerElement(request);
        }
        
        request.open("GET", document);
        request.send();
    }

    function insertContent(srcElement, dstElement) {
        if (srcElement != undefined) {
            dstElement.setAttribute("viewBox", srcElement.getAttribute("viewBox"));

            [].forEach.call(srcElement.children, element =>
                dstElement.appendChild(element.cloneNode(true))
            );
        }

        return dstElement;
    }

    function createElement(img) {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

        [].forEach.call(img.attributes, attribute => 
            attribute.name !== "src" && svg.setAttribute(attribute.name, attribute.value)
        );

        return svg;
    }
})();
