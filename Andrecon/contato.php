<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <title>
            Andrecon Laser e Sign - Impressão digital, letreiros e fachadas
        </title>
<?php
    include("includes/meta.php");
?> 
    </head>
    <body>
<?php
    include("includes/header.php");
?> 
        <article class="form">
            <header class="form__header">
                <h2 class="upright-line">
                    Contato
                </h2>
                <p class="form__paragraph">
                    Preencha o formulário para entrar em contato
                </p>
            </header>
            <form class="form__content" id="form-contact">
                <label class="form__field field">
                    <span class="field__label">
                        Nome
                    </span>
                    <input class="field__input" type="text" name="name" />
                </label>
                <label class="form__field field">
                    <span class="field__label">
                        E-mail
                    </span>
                    <input class="field__input" type="email" name="email" />
                </label>
                <label class="form__field field">
                    <span class="field__label">
                        Telefone (opcional)
                    </span>
                    <input class="field__input" type="tel" name="phone" />
                </label>
                <label class="form__field field">
                    <span class="field__label">
                        Sua mensagem
                    </span>
                    <textarea class="field__text" name="message"></textarea>
                </label>
                <label class="form__checkbox checkbox">
                    <input class="checkbox__input" type="checkbox" name="whitelist"/>
                    <span class="checkbox__label">
                        Desejo receber novidades
                    </span>
                </label>
                <div class="form__recaptcha">
                    <div class="g-recaptcha" data-sitekey="6LeBZZUaAAAAAOMI61zgzvkqvHUOLMZGdzlgsMjJ"></div>
                </div>
                <aside>
                    <p class="alert--failure">
                        Essa é uma mensagem de exemplo.
                    </p>
                    <!-- <p class="alert--loading">
                        Essa é uma mensagem de exemplo...
                    </p> -->
                    <!-- <p class="alert--success">
                        Essa é uma mensagem de exemplo!
                    </p> -->
                </aside>
                <div class="form__button">
                    <button class="button" type="submit">
                        Enviar
                    </button>
                </div>
            </form>
        </article>
<?php
    include("includes/footer.php");
?> 
    </body>
</html>