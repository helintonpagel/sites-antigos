<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <title>
            EPI Legal
        </title>
<?php
include("includes/meta.php");
?> 
        <script src="https://www.google.com/recaptcha/api.js" async defer></script>
    </head>
    <body id="top">
<?php
include("includes/header.php");
?> 
        <article class="banner">
            <h2 class="banner__heading">
                Fale Conosco
            </h2>
            <ol class="breadcrumb">
                <li class="breadcrumb__item">
                    <a class="breadcrumb__link" href="#">Home</a>
                </li>
                <li class="breadcrumb__item">
                    <a class="breadcrumb__link" href="#">Formulário</a>
                </li>
            </ol>
            <img class="banner__image" src="img/contact-banner.webp" height="336" width="1514" alt="" role="presentation">
        </article>
        <article class="formulary">
            <h3 class="formulary__heading">
                O Seu Plano <span class="formulary__stress">Foi Selecionado</span>
            </h3>
            <p class="formulary__paragraph">
                Agora, preencha corretamente o formulário abaixo para que possamos receber suas informações e contatá-lo.
            </p>
            <form class="formulary__form" action="#">
                <legend class="formulary__legend">
                    Plano Selecionado: <strong>Até 10 funcionários - Mensal</strong>
                </legend>
                <label class="formulary-field">
                    <input class="formulary-field__input" name="name" type="text">
                    <span class="formulary-field__label">Razão Social</span>
                </label>
                <div>
                    <label class="formulary-field formulary-field--one-half">
                        <input class="formulary-field__input" name="cnpj" type="number" inputmode="numeric">
                        <span class="formulary-field__label">CNPJ</span>
                    </label>
                    <label class="formulary-field formulary-field--one-half">
                        <input class="formulary-field__input" name="employees" type="number" inputmode="numeric">
                        <span class="formulary-field__label">Número de Funcionários</span>
                    </label>
                </div>
                <div>
                    <label class="formulary-field formulary-field--one-half">
                        <input class="formulary-field__input" name="address" type="text">
                        <span class="formulary-field__label">Endereço</span>
                    </label>
                    <label class="formulary-field formulary-field--one-sixth">
                        <input class="formulary-field__input" name="number" type="number" inputmode="numeric">
                        <span class="formulary-field__label">Número</span>
                    </label>
                    <label class="formulary-field formulary-field--one-third">
                        <input class="formulary-field__input" name="complement" type="text">
                        <span class="formulary-field__label">Complemento</span>
                    </label>
                </div>
                <div>
                    <label class="formulary-field formulary-field--one-fourth">
                        <input class="formulary-field__input" name="cep" type="number" inputmode="numeric">
                        <span class="formulary-field__label">CEP</span>
                    </label>
                    <label class="formulary-field formulary-field--one-half">
                        <input class="formulary-field__input" name="city" type="text">
                        <span class="formulary-field__label">Cidade</span>
                    </label>
                    <label class="formulary-field formulary-field--one-fourth">
                        <input class="formulary-field__input" name="state" type="text">
                        <span class="formulary-field__label">Estado</span>
                    </label>
                </div>
                <div>
                    <label class="formulary-field formulary-field--one-half">
                        <input class="formulary-field__input" name="phone" type="tel" inputmode="tel">
                        <span class="formulary-field__label">Telefone</span>
                    </label>
                    <label class="formulary-field formulary-field--one-half">
                        <input class="formulary-field__input" name="email" type="email" inputmode="email">
                        <span class="formulary-field__label">E-mail</span>
                    </label>
                </div>
                <div class="formulary__group">
                    <label class="formulary-checkbox">
                        <input class="formulary-checkbox__input" name="newsletter" type="checkbox">
                        <img class="formulary-checkbox__icon" src="img/check.svg" data-inline="true" width="24" height="24" alt="" role="presentation">
                        <span class="formulary-checkbox__label">Aceito receber novidades</span>
                    </label>
                    <div class="formulary__recaptcha">
                        <div class="g-recaptcha" data-sitekey="6LfGrGAbAAAAAHMc8qkTyVYVt3qq73yzOKCciYbp"></div>
                    </div>
                    <button class="formulary__button">Enviar</button>
                </div>
            </form>
        </article>
<?php
include("includes/newsletter.php");
?> 
<?php
include("includes/footer.php");
?> 
    </body>
</html>