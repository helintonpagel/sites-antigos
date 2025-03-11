<!DOCTYPE html>
<html>
    <head>
        <title>
            Vinícola Dom Cândido
        </title>
<?php
include("includes/meta.php");
?> 
    </head>
    <body>
<?php
include("includes/header.php");
?> 
        <section class="guide">
            <img class="guide__image" src="img/vineyard-path.jpg" width="684" height="456" alt="Paisagem muito bonita de alguma coisa relacionada a uva ou vinho que você não consegue ver."/>
        </section>
        <section class="column" id="conteudo">
            <div class="column__content">
                <header class="column__header">
                    <h2 class="heading">
                        Entre em
                        <span class="heading__handwritten">
                            Contato
                        </span>
                    </h2>
                    <address class="column__address">
                        <p>
                            Estrada Via Trento, 2169 Bento Gonçalves / RS CEP 95711-970, Vale dos vinhedos <br/>
                            Bento Gonçalves - RS – Brasil
                        </p>
                        <a class="column__email" href="mailto:domcandido@domcandido.com.br">
                            domcandido@domcandido.com.br
                        </a>
                        <h3 class="column__strong">
                            Horário de Atendimento
                        </h3>
                        <p>
                            Atendimento e-commerce: Segunda à Sexta-feira das 08h às 17h30.
                        </p>
                        <p>
                            Atendimento na Vinícola de: Diariamente das 9h até 17h:30min.
                        </p>
                        <ul>
                            <li>
                                <a class="footer__phone phone-icon" href="tel:05425213500">
                                    (54) 2521-3500
                                </a>
                            </li>
                            <li>
                                <a class="footer__phone whatsapp-icon" href="tel:054996569686">
                                    (54) 9965-69686
                                </a>
                            </li>
                        </ul>
                    </address>
                </header>
                <div class="column__text">
                    <form class="form">
                        <label class="form__field">
                            <input class="form__input" type="text" name="name" />
                            <span class="form__label">
                                Nome
                            </span>
                        </label>
                        <label class="form__field">
                            <input class="form__input" type="text" name="email" inputmode="email"/>
                            <span class="form__label">
                                E-mail
                            </span>
                        </label>
                        <label class="form__field">
                            <input class="form__input js-phone" type="text" name="phone" inputmode="tel"/>
                            <span class="form__label">
                                Telefone
                            </span>
                        </label>
                        <label class="form__field">
                            <textarea class="form__textarea" name="message"></textarea>
                            <span class="form__label">
                                Mensagem
                            </span>
                        </label>
                        <div class="form__recaptcha">
                            <div class="g-recaptcha" data-sitekey="6LeBZZUaAAAAAOMI61zgzvkqvHUOLMZGdzlgsMjJ"></div>
                        </div>
                        <label class="form__checkbox checkbox" tabindex="0">
                            <input class="checkbox__input" type="checkbox" name="newsletter"/>
                            <span class="checkbox__label">
                                Receber informações por e-mail
                            </span>
                        </label>
                        <button class="form__button button--light" type="submit">
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </section>
        <section class="map">
            <iframe class="map__frame" width="696" height="456" id="gmap_canvas" src="https://maps.google.com/maps?q=Vin%C3%ADcola%20Dom%20C%C3%A2ndido&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </section>
<?php
include("includes/footer.php");
?> 
    </body>
</html>