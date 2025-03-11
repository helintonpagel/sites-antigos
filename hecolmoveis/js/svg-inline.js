(() => {

document.addEventListener("DOMContentLoaded", () => document.querySelectorAll("img").forEach(makeSvgInline));

function makeSvgInline(img) {
    const src = img.getAttribute("src");

    if (src !== null && src.endsWith(".svg")) {
        fetchXmlDocument(src, doc => {
            img.removeAttribute("src");
            img.parentElement.insertBefore(insertSvgContent(doc.querySelector("svg"), createSvgElement(img)), img);
            img.remove();
        });
    }
}

function fetchXmlDocument(resource, callback) {
    const request = new XMLHttpRequest();

    request.addEventListener("load", () => {
        if (request.status >= 200 & request.status < 400) {
            return callback(request.responseXML);
        }
        
        console.warn(`${request.responseURL}: ${request.statusText}`);
    });

    request.open("GET", resource, true);
    request.send();
}

function insertSvgContent(xmlSvg, newSvg) {
    if (xmlSvg !== undefined) {
        newSvg.setAttribute("viewBox", xmlSvg.getAttribute("viewBox"));
        [].forEach.call(xmlSvg.children, element => newSvg.appendChild(element.cloneNode(true)));
    }

    return newSvg;
}

function createSvgElement(img) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    [].forEach.call(img.attributes, attribute => svg.setAttribute(attribute.name, attribute.value));

    return svg;
}

})();