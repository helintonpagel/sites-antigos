<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <title>
            Sequence Web Dropshipping
        </title>
<?php
include "includes/meta.php";
?> 
    </head>
    <body>
<?php
include "includes/header.php";
?> 
        <article class="contact">
            <h2 class="contact__heading">
                Seu plano foi selecionado!
            </h2>
            <p class="contact__paragraph">
                Agora, preencha corretamente o formulário abaixo para que possamos receber suas informações e contatá-lo.
            </p>
            <form class="contact__form form" action="#">
                <h3 class="form__heading">
                    Plano selecionado: <strong class="form__code"><abbr title="Pacote 50 Distribuidores">P50</abbr></strong>
                </h3>
                <label class="text-field">
                    <input class="text-field__input" name="name" type="text">
                    <span class="text-field__label">Razão social</span>
                </label>
                <div class="form__group field-group">
                    <label class="field-group__field text-field">
                        <input class="text-field__input" name="cnpj" type="text" inputmode="numeric">
                        <span class="text-field__label">CNPJ</span>
                    </label>
                    <label class="field-group__field text-field">
                        <input class="text-field__input" name="employees" type="text" inputmode="numeric">
                        <span class="text-field__label">Número de Funcionários</span>
                    </label>
                </div>
                <div class="form__group field-group">
                    <label class="field-group__field text-field">
                        <input class="text-field__input" name="address" type="text">
                        <span class="text-field__label">Endereço</span>
                    </label>
                    <label class="field-group__field field-group__field--sixth text-field">
                        <input class="text-field__input" name="number" type="text" inputmode="numeric">
                        <span class="text-field__label">Número</span>
                    </label>
                    <label class="field-group__field field-group__field--third text-field">
                        <input class="text-field__input" name="complement" type="text">
                        <span class="text-field__label">Complemento</span>
                    </label>
                </div>
                <div class="form__group field-group">
                    <label class="field-group__field field-group__field--fourth text-field">
                        <input class="text-field__input" data-mask="00000-000" name="cep" type="text" inputmode="numeric">
                        <span class="text-field__label">CEP</span>
                    </label>
                    <label class="field-group__field text-field">
                        <input class="text-field__input" name="city" type="text">
                        <span class="text-field__label">Cidade</span>
                    </label>
                    <label class="field-group__field field-group__field--fourth text-field">
                        <input class="text-field__input" name="state" type="text">
                        <span class="text-field__label">Estado</span>
                    </label>
                </div>
                <div class="form__group field-group">
                    <label class="field-group__field text-field">
                        <input class="text-field__input" name="phone" type="tel" inputmode="tel">
                        <span class="text-field__label">Telefone</span>
                    </label>
                    <label class="field-group__field text-field">
                        <input class="text-field__input" name="email" type="email" inputmode="email">
                        <span class="text-field__label">E-mail</span>
                    </label>
                </div>
                <div class="form__listbox listbox">
                    <span class="listbox__label">Adicionar mais colaboradores?</span>
                    <button class="listbox__button" type="button">
                        <img class="listbox__icon" src="img/chevron-thin-down.svg" data-graphics="inline" width="24" height="24" alt="" role="presentation">
                    </button>
                    <ul class="listbox__list">
                        <li class="listbox__item" data-value="0">Deixar em branco</li>
                        <li class="listbox__item" data-value="4"><b>Mais 4 colaboradores</b> - R$12,90</li>
                        <li class="listbox__item" data-value="9"><b>Mais 9 colaboradores</b> - R$25,80</li>
                        <li class="listbox__item" data-value="19"><b>Mais 19 colaboradores</b> - R$51,60</li>
                        <li class="listbox__item" data-value="49+"><b>Mais 49 ou mais colaboradores</b> - R$129,90</li>
                    </ul>
                    <input class="listbox__input" name="contributors" type="hidden" value="0">
                </div>
                <div class="form__group field-group">
                    <div class="field-group__field field-group__field--third">
                        <label class="checkbox">
                            <input class="checkbox__input" name="newsletter" type="checkbox">
                            <img class="checkbox__icon" data-graphics="inline" src="img/check.svg" data-inline="true" width="24" height="24" alt="" role="presentation"> Aceito receber novidadedes
                        </label>
                    </div>
                    <div class="field-group__field field-group__field--third recaptcha">
                        <div class="recaptcha__iframe g-recaptcha" data-sitekey="6Lc6aJIbAAAAAC0iwpRVoxXWOE-GP78Ri9ZNBQLX"></div>
                    </div>
                    <div class="field-group__field field-group__field--third">
                        <button class="form__button button">Enviar</button>
                    </div>
                </div>
                <strong class="form__response form-response form-response--loading form-response--visible">
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