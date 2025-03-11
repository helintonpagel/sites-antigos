document.addEventListener("DOMContentLoaded", () => showConsentBox());

function showConsentBox() {
    if (getCookie("cookieConsent") != "true") {
        document.querySelectorAll(".consent").forEach(element => {
            element.classList.add("consent--show");
            element.querySelector(".consent__button").addEventListener("click", consentCookie);
        });
    }
}

function getCookie(cookieName) {
    const cookies = decodeURIComponent(document.cookie).split(";");

    for (let cookie of cookies) {
        while (cookie.charAt(0) == " ") {
            cookie = cookie.substring(1);
        }

        if (cookie.indexOf(cookieName) == 0) {
            return cookie.substring(cookieName.length + 1, cookie.length);
        }
    }

    return "";
}

function consentCookie() {
    document.querySelectorAll(".consent").forEach(element => {
        element.classList.remove("consent--show");
        document.cookie = `cookieConsent=true; expires=${(new Date(Date.now() + 31536000000)).toUTCString()}; path=/;`;
    });
}