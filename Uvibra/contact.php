<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <title>
            Uvibra Consevitis
        </title>
<?php
include("includes/meta.php");
?> 
    </head>
    <body>
<?php
include("includes/header.php");
?> 
        <section class="banner">
            <div class="banner__pillar pillar">
                <aside class="banner__nav">
                    <div class="banner-nav">
                        <p class="banner-nav__heading">
                            Você está em:
                        </p>
                        <nav class="banner-nav__list">
                            <ol>
                                <li class="banner-nav__item">
                                    <a class="banner-nav__link" href="#">
                                        Home
                                    </a>
                                </li>
                                <li class="banner-nav__item">
                                    <a class="banner-nav__link" href="#">
                                        Contato
                                    </a>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </aside>
                <header class="banner__header">
                    <h2 class="banner__heading heading heading">
                        <span class="heading__text">Contato</span>
                    </h2>
                    <p class="banner__paragraph">
                        Contate-nos através dos nossos canais de atendimento
                    </p>
                </header>
            </div>
            <img class="banner__image" src="img/parque.webp" width="609" height="456" alt="Adicionar descrição, por favor não se esqueça"/>
        </section>
        <section class="contact">
            <div class="contact__pillar pillar">
                <div class="contact__form">
                    <h2 class="contact__heading heading">
                        <span class="heading__text">Fale Conosco</span>
                    </h2>
                    <form>
                        <label class="contact__field field">
                            <input class="field__input" type="text" name="name" inputmode="text"/>
                            <span class="field__label">
                                Nome
                            </span>
                        </label>
                        <label class="contact__field field">
                            <input class="field__input" type="text" name="phone" inputmode="phone"/>
                            <span class="field__label">
                                Telefone
                            </span>
                        </label>
                        <label class="contact__field field">
                            <input class="field__input" type="email" name="email" inputmode="email"/>
                            <span class="field__label">
                                E-mail
                            </span>
                        </label>
                        <label class="contact__field field">
                            <textarea class="field__input field__input--multiline" name="message"></textarea>
                            <span class="field__label">
                                Escreva aqui
                            </span>
                        </label>
                        <label class="contact__checkbox checkbox">
                            <input class="checkbox__input" type="checkbox" name="newsletter"/>
                            <span class="checkbox__label">
                                Desejo receber informações por esse e-mail
                            </span>
                        </label>
                        <button class="contact__button button" type="submit">
                            Enviar
                        </button>
                    </form>
                    <p class="contact__response">
                        Sua mensagem foi enviado com sucesso!
                    </p>
                </div>
                <address class="contact__list address">
                    <ul>
                        <li>
                            <img class="contact__icon address__icon address__icon--marker" src="img/marker-brand.svg" width="24" height="24" alt="" role="presentation"/>
                            <p class="address__paragraph">
                                Alameda Fenavinho, 481 <br/> Bento Gonçalves - RS <br/> CEP 95703 - 364
                            </p>
                        </li>
                        <br/>
                        <li>
                            <a class="address__link" chref="#">
                                <img class="contact__icon address__icon" src="img/phone-brand.svg" width="24" height="24" alt="" role="presentation"/>
                                (54) 3451 1062
                            </a>
                        </li>
                        <li>
                            <a class="address__link" chref="#">
                                <img class="contact__icon address__icon" src="img/email-brand.svg" width="24" height="24" alt="" role="presentation"/>
                                uvibra@uvibra.com.br
                            </a>
                        </li>
                    </ul>
                </address>
            </div>
        </section>
        <section class="map">
            <iframe class="map__frame" width="600" height="456" src="https://maps.google.com/maps?q=Alameda%20Fenavinho,%20481&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </section>
<?php
include("includes/newsletter.php");
?> 
<?php
include("includes/footer.php");
?> 
    </body>
</html>