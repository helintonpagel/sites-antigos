<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <title>
        Vinícola Maximo Boschi
    </title>
    <?php
    include("includes/meta.php");
    ?>
</head>

<body>
    <?php
    include("includes/header.php");
    ?>
    <article class="article">
        <h2 class="article__title js-heading">
            Fale conosco
        </h2>
        <div class="article__banner banner">
            <img class="banner__image" src="img/wine-tossing.jpg" role="presentation" />
        </div>
        <p class="article__paragraph article__text">
            Neste espaço você tem contato direto com a Maximo Boschi.
            <br />
            Preencha o formulário abaixo, e em breve retornaremos sua mensagem.
        </p>
        <form class="form">
            <label class="form__field js-placeholder">
                <span class="form__placeholder">
                    Nome
                </span>
                <input class="form__input" type="text" />
            </label>
            <label class="form__field js-placeholder">
                <span class="form__placeholder">
                    Telefone
                </span>
                <input class="form__input js-phone" type="text" />
            </label>
            <label class="form__field js-placeholder">
                <span class="form__placeholder">
                    E-mail
                </span>
                <input class="form__input" type="text" />
            </label>
            <label class="form__field form__field--textarea js-placeholder">
                <span class="form__placeholder">
                    Mensagem
                </span>
                <textarea class="form__input--textarea"></textarea>
            </label>
            <label class="form__inline">
                <input type="checkbox" style="display: none;"/>
                <i class="form__checkbox"></i>
                Desejo receber informações por esse e-mail
            </label>
            <aside class="newsletter__aside">
                <!-- <p class="form__success">
                    Essa é uma mensagem de exemplo.
                </p> -->
                <p class="form__error">
                    Essa é uma mensagem de exemplo.
                </p>
            </aside>
            <div class="article__button">
                <button class="button form__button" type="submit">
                    Enviar
                </button>
            </div>
        </form>
        <div class="inline--leading">
            <p class="inline__column article__location">
                Linha 15 da Graciema - 570, Vale dos Vinhedos
                <br />
                Bento Gonçalves - RS
                <br />
                (CEP 95700-000)
            </p>
            <ul class="inline__column article__link-list">
                <li>
                    <a class="article__link whatsapp-icon" href="tel:+5554991751106">
                        (54) 99175-1106 (Comercial)
                    </a>
                </li>
                <li>
                    <a class="article__link whatsapp-icon" href="tel:+5554991131314">
                        (54) 99113-1314 (Administrativo)
                    </a>
                </li>
                <li>
                    <a class="article__link envelope-icon" href="mailto:vinicola@maximoboschi.com.br">
                        vinicola@maximoboschi.com.br
                    </a>
                </li>
            </ul>
        </div>
    </article>
    <article>
        <iframe class="article__maps-iframe" width="600" height="500" id="gmap_canvas"src="https://maps.google.com/maps?q=Linha%2015%20da%20Graciema%20-%20570,%20Vale%20dos%20Vinhedos&t=&z=15&ie=UTF8&iwloc=&output=embed"frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
    </article>
<?php
    include("includes/newsletter.php");
?> 
    <?php
    include("includes/footer.php");
    ?>
</body>

</html>