<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>
            GSP Hospitalar
        </title>
<?php
        include("includes/meta.php");
?> 
    </head>
    <body>
<?php
    include("includes/header.php");
?> 
        <article class="contact">
            <h2 class="contact__heading">
                Contatos
            </h2>
            <div class="contact__context">
                <div class="contact__column">
                    <p>
                        Nesse espaço, você tem contato direto com a GSP Hospitalar. Envie sua mensagem, preenchendo o formulário abaixo, e em breve você receberá contato da nossa equipe. 
                    </p>
                    <p class="contact__locale">
                        <span class="contact__icon marker-icon">
                            Rua Júlio de Castilhos, 01
                        </span>
                        Bento Gonçalves - RS
                        <br/>
                        (CEP 95700-00)
                    </p>
                    <address>
                        <ul class="article__leading">
                            <li class="contact__icon phone-icon">
                                <a class="contact__link" href="tel:05534343535">
                                    (54) 3434-3535
                                </a>
                            </li>
                            <li class="contact__icon envelope-icon">
                                <a class="contact__link" href="mailto:contato@gsphospitalar.com">
                                    contato@gsphospitalar.com
                                </a>
                            </li>
                        </ul>
                    </address>
                </div>
                <form class="contact__form form">
                    <label class="form__field js-field">
                        <span class="form__label">
                            Nome completo
                        </span>
                        <input class="form__input js-input" type="text" name="name"/>
                    </label>
                    <label class="form__field js-field">
                        <span class="form__label">
                            E-mail
                        </span>
                        <input class="form__input js-input" type="email" name="email"/>
                    </label>
                    <label class="form__field js-field">
                        <span class="form__label">
                            Telefone
                        </span>
                        <input class="form__input js-input" type="tel" name="tel"/>
                    </label>
                    <label class="form__field js-field">
                        <span class="form__label">
                            Mensagem
                        </span>
                        <textarea class="form__text-area js-input" name="message"></textarea>
                    </label>
                    <label class="form__checkbox checkbox">
                        <input class="checkbox__input" type="checkbox" name="consent">
                        <span class="checkbox__label">
                            Desejo receber informações por este e-mail
                        </span>
                    </label>
                    <div class="form__captcha">
                        <div class="g-recaptcha" data-sitekey="6LfgOGYaAAAAAHuxaWLOQhJIQoKPO9qbN5wl67Y4"></div>
                    </div>
                    <button class="form__button button--light" type="submit">
                        Enviar
                    </button>
                    <aside class="form__text">
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
                </form>
            </div>
        </article>
        <article class="embed-map">
            <iframe class="embed-map__frame" width="696" height="456" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=Rua%20General%20G%C3%B3es%20Monteiro%20-%20S%C3%A3o%20Francisco,%20Bento%20Gon%C3%A7alves%20-%20RS&t=&z=17&ie=UTF8&iwloc=&output=embed"></iframe>
        </article>
<?php
    include("includes/price.php");
?> 
<?php
    include("includes/footer.php");
?> 
    </body>
</html>