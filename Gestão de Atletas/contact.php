<!DOCTYPE html>
<html>
    <head>
        <title>
            Gestão de Atletas
        </title>
<?php
include "includes/meta.php";
?> 
    </head>
    <body>
<?php
include "includes/header.php";
?> 
        <article class="form">
            <h2 class="form__heading">
                Nos envie sua mensagem
            </h2>
            <p class="form__paragraph">
                Mande sua mensagem que, em breve, nossa equipe entrará em contato com você.
            </p>
            <form class="form__fields" action="#">
                <label class="text-field">
                    <input class="text-field__input" name="name" type="text">
                    <span class="text-field__label">Nome</span>
                </label>
                <div class="form-group">
                    <label  class="form-group__field text-field">
                        <input class="text-field__input" name="email" type="email" inputmode="email">
                        <span class="text-field__label">E-mail</span>
                    </label>
                    <label  class="form-group__field text-field">
                        <input class="text-field__input" name="phone" type="tel" inputmode="tel">
                        <span class="text-field__label">Telefone</span>
                    </label>
                </div>
                <label class="form__message message">
                    <textarea class="message__input" name="message" cols="30" rows="10"></textarea>
                    <span class="message__label">Mensagem</span>
                </label>
                <div class="form-group">
                    <div class="form-group__field form-group__field--third">
                        <label class="checkbox">
                            <input class="checkbox__input" name="newsletter" type="checkbox">
                            <img class="checkbox__icon" data-graphics="inline" src="img/check.svg" data-inline="true" width="24" height="24" alt="" role="presentation"> Aceito receber novidadedes
                        </label>
                    </div>
                    <div class="form-group__field form-group__field--third recaptcha">
                        <div class="recaptcha__iframe g-recaptcha" data-sitekey="6Lc6aJIbAAAAAC0iwpRVoxXWOE-GP78Ri9ZNBQLX"></div>
                    </div>
                    <div class="form-group__field form-group__field--third">
                        <button class="form__button button">Enviar</button>
                    </div>
                </div>
                <strong class="form__response form-response">
                    <img class="form-response__icon" src="img/hour-glass.svg" data-graphics="inline" width="24" height="24" alt="Carregando"> Aguarde...
                </strong>
            </form>
        </article>
<?php
include "includes/newsletter.php";
?> 
<?php
include "includes/footer.php";
?> 
    </body>
</html>