document.addEventListener("DOMContentLoaded", () => 
    document.querySelectorAll("[data-form='async']").forEach(makeAsynchronous)
);

function makeAsynchronous(form) {
    const formElement = form.querySelector("form");

    console.log(formElement);

    if (formElement !== null) {
        formElement.addEventListener("submit", event => {
            event.preventDefault();
            showLoading(form, "Enviando...");
    
            const request = new XMLHttpRequest();
    
            request.addEventListener("load", event => {
                if (request.status >= 200 && request.status < 400) {
                    clearFormData(formElement);
                    try {
                        showSuccess(form, JSON.parse(event.target.response).mensagem);
                    }
                    catch (error) {
                        console.warn(error);
                        showSuccess(form, "Enviado.");
                    }
                }
                else {
                    try {
                        showFailure(form, JSON.parse(event.target.response).mensagem);
                    }
                    catch (error) {
                        console.warn(error);
                        showFailure(form, "Desculpe, alguma coisa deu errado...");
                    }
                }
            });
    
            request.addEventListener("error", event => {
                showFailure(form, "Desculpe, alguma coisa deu errado...");
            });
    
            request.open("POST", formElement.action);
            request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    
            if (document.querySelector("meta[name='csrf-token']") != null) {
                request.setRequestHeader("X-CSRF-TOKEN", document.querySelector("meta[name='csrf-token']").getAttribute("content") );
            }
            
            request.send(getFormData(formElement));
        });
    }
}

function showLoading(form, message) {
    const response = form.querySelector(`.form-response`);

    response.setAttribute("class", "form-response form-response--loading");
    response.lastChild.innerText = message;
}

function showFailure(form, message) {
    const response = form.querySelector(`.form-response`);

    response.setAttribute("class", "form-response form-response--failure");
    response.lastChild.innerText = message;
}

function showSuccess(form, message) {
    const response = form.querySelector(`.form-response`);

    response.setAttribute("class", "form-response form-response--success");
    response.lastChild.innerText = message;
}

function clearFormData(form) {
    form.querySelectorAll("input, textarea").forEach(input => {
        if (input.type == "checkbox") {
            input.checked = false;
        }
        else {
            input.value = '';
        }
    });
}

function getFormData(form) {
    let data = [];

    form.querySelectorAll("input, textarea").forEach(input => {
        if (input.type == "checkbox") {
            data.push(`${encodeURIComponent(input.name)}=${input.checked ? 1 : 0}`);
        }
        else {
            data.push(`${encodeURIComponent(input.name)}=${encodeURIComponent(input.value)}`);
        }
    });

    return data.join("&").replace(/%20/g, "+");
}