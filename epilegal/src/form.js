document.addEventListener("DOMContentLoaded", () => 
    document.querySelectorAll("form[data-asynchronous='true']").forEach(makeAsynchronous)
);

function makeAsynchronous(form) {
    form.addEventListener("submit", event => {
        event.preventDefault();
        showLoading(form, "Enviando...");

        const request = new XMLHttpRequest();

        request.addEventListener("load", event => {
            if (request.status >= 200 && request.status < 400) {
                clearFormData(form);
                showSuccess(form, JSON.parse(event.target.response).mensagem);
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

        request.open("POST", form.action);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.setRequestHeader("X-CSRF-TOKEN", document.querySelector("meta[name='csrf-token']").getAttribute("content") );
        request.send(getFormData(form));
    });
}

function showLoading(form, message) {
    let blockClass = form.getAttribute("class");
    blockClass = blockClass.slice(0, blockClass.indexOf("__"));

    const response = form.parentElement.querySelector(`.${blockClass}__response`);

    response.innerText = message;
    response.classList.remove(`${blockClass}__response--failure`);
    response.classList.remove(`${blockClass}__response--success`);
}

function showFailure(form, message) {
    let blockClass = form.getAttribute("class");
    blockClass = blockClass.slice(0, blockClass.indexOf("__"));

    const response = form.parentElement.querySelector(`.${blockClass}__response`);

    response.innerText = message;
    response.classList.add(`${blockClass}__response--failure`);
}

function showSuccess(form, message) {
    let blockClass = form.getAttribute("class");
    blockClass = blockClass.slice(0, blockClass.indexOf("__"));

    const response = form.parentElement.querySelector(`.${blockClass}__response`);

    response.innerText = message;
    response.classList.add(`${blockClass}__response--success`);
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