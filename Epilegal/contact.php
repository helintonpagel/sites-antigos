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
                    <a class="breadcrumb__link" href="#">Fale Conosco</a>
                </li>
            </ol>
            <img class="banner__image" src="img/contact-banner.webp" height="336" width="1514" alt="" role="presentation">
        </article>
        <article class="contact">
            <h3 class="contact__heading">
                Nos Envie sua <span class="contact__stress">Mensagem</span>
            </h3>
            <p class="contact__paragraph">
                Neste espaço você tem contato direto com a EPI Legal. Mande sua mensagem que, em breve, nossa equipe entrará em contato com você. 
            </p>
            <address class="contact__address">
                <ul class="contact-address">
                    <li class="contact-address__item">
                        <img class="contact-address__icon" src="img/location-pin.svg" data-inline="true" width="24" height="24" alt="Endereço">
                        <a class="contact-address__link" href="#">
                            <b class="contact-address__heading">Endereço</b> Avenida Nelson Carraro, 395 Santo Antão, <br> Bento Gonçalves - RS
                        </a>
                    </li>
                    <li class="contact-address__item">
                        <img class="contact-address__icon" src="img/phone.svg" data-inline="true" width="24" height="24" alt="Telefone">
                        <a class="contact-address__link" href="#">
                            <b class="contact-address__heading">Telefone</b> (54) 3452-9735
                        </a>
                    </li>
                    <li class="contact-address__item">
                        <img class="contact-address__icon" src="img/whatsapp.svg" data-inline="true" width="24" height="24" alt="Whatsapp">
                        <a class="contact-address__link" href="#">
                            <b class="contact-address__heading">Whatsapp</b> (54) 99708-8123
                        </a>
                    </li>
                    <li class="contact-address__item">
                        <img class="contact-address__icon" src="img/mail.svg" data-inline="true" width="24" height="24" alt="E-mail">
                        <a class="contact-address__link" href="#">
                            <b class="contact-address__heading">E-mail</b> epilegal@epilegal.com.br
                        </a>
                    </li>
                </ul>
            </address>
            <form class="contact__form" action="#">
                <label class="contact-field">
                    <input class="contact-field__input" name="name" type="text">
                    <span class="contact-field__label">Nome</span>
                </label>
                <label class="contact-field">
                    <input class="contact-field__input" name="email" type="email">
                    <span class="contact-field__label">E-mail</span>
                </label>
                <label class="contact-field">
                    <input class="contact-field__input" name="phone" type="tel">
                    <span class="contact-field__label">Telefone</span>
                </label>
                <label class="contact-message">
                    <textarea class="contact-message__input" name="message" cols="30" rows="10"></textarea>
                    <span class="contact-message__label">Mensagem</span>
                </label>
                <div class="contact__group">
                    <label class="contact-checkbox">
                        <input class="contact-checkbox__input" name="newsletter" type="checkbox">
                        <img class="contact-checkbox__icon" src="img/check.svg" data-inline="true" width="24" height="24" alt="" role="presentation">
                        <span class="contact-checkbox__label">Aceito receber novidades</span>
                    </label>
                    <div class="contact__recaptcha">
                        <div class="g-recaptcha" data-sitekey="6LfGrGAbAAAAAHMc8qkTyVYVt3qq73yzOKCciYbp"></div>
                    </div>
                    <button class="contact__button">Enviar</button>
                </div>
            </form>
        </article>
        <article class="map">
            <h3 class="map__heading">
                Localização pelo Google Mapas
            </h3>
            <iframe class="map__iframe" width="600" height="456" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=600&amp;height=456&amp;hl=en&amp;q=Avenida%20Nelson%20Carraro,%20395%20Santo%20Ant%C3%A3o,%20Bento%20Gon%C3%A7alves%20-%20RS%20Bento%20Gon%C3%A7alves+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </article>
<?php
include("includes/newsletter.php");
?> 
<?php
include("includes/footer.php");
?> 
    </body>
</html>