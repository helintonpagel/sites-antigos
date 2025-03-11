<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <title>
            Vinícula Maximo Boschi
        </title>
<?php
    include("includes/meta.php");
?> 
    </head>
    <body>
<?php
    include("includes/header.php");
?> 
        <article class="js-slideshow"></article>
        <article>
            <header class="hero">
                <h2 class="hero__heading js-heading">
                    A Maximo Boschi
                </h2>
                <p class="hero__paragraph">
                    Transformamos uvas excepcionais em verdadeiras obras primas.
                    <br/>
                    Vinhos e espumantes que aguçam os sentidos e harmonizam com todos os momentos.
                    <br/>
                    Que tal uma pausa, para apreciar e vivenciar essa experiência?
                </p>
                <a class="hero__button button" href="#">
                    Saiba Mais
                </a>
            </header>
            <div class="gallery">
                <div class="gallery__card">
                    <section class="card--dune">
                        <h3 class="card__title js-heading">
                            Nossas Obras
                        </h3>
                        <p class="card__paragraph">
                            A paixão por vinhos e espumantes, associada a processos de elaboração singulares, se traduz em garrafas de bebidas que figuram entre as mais notáveis do mundo. Usufrua de nossas obras primas!
                        </p>
                    </section>
                </div>
                <section class="gallery__section">
                    <h3 class="gallery__blazon blazon--larger">
                        Vinícula Máximo Boschi
                    </h3>
                    <a class="gallery__button button" href="#">
                        Visite a Galeria
                    </a>
                </section>
                <i class="gallery__bottle js-scroll-effect" data-spawn-point="200"></i>
            </div>
            <footer class="article__footer">
                <div class="article__card card js-scroll-effect" data-spawn-point="700">
                    <h3 class="card__title js-heading">
                        Onde encontrar
                    </h3>
                    <p class="card__paragraph">
                        Adquira nossas obras primas na Galleria Maximo Boschi ou conheça os parceiros da vinícola em todo Brasil. Você também pode adquiri-los diretamente em nosso varejo. Faça-nos uma visita.
                    </p>
                    <a class="card__button button" href="#">
                        Saiba Mais
                    </a>
                </div>
                <div class="banner">
                    <img class="banner__image" src="img/gray-wine-barrels.jpg" role="presentation"/>
                </div>
            </footer>
        </article>
        <article class="newsletter">
            <h2 class="newsletter__title">
                Cadastre-se e receba nossa novidades em seu e-mail
            </h2>
            <form class="newsletter__form">
                <label class="newsletter__field js-placeholder">
                    <span class="newsletter__placeholder">
                        Nome Completo
                    </span>
                    <input class="newsletter__input" type="text"/>
                </label>
                <label class="newsletter__field js-placeholder">
                    <span class="newsletter__placeholder">
                        E-mail
                    </span>
                    <input class="newsletter__input" type="text"/>
                </label>
                <aside class="newsletter__aside">
                    <p>
                        De acordo com a
                        <abbr title="Lei Geral de Proteção de Dados Pessoais">LGPD</abbr>
                        os dados fornecidos serão unicamente utilizados por nossa empresa como canal de contato.
                    </p>
                </aside>
                <button class="button newsletter__button" type="submit">
                    Cadastrar
                </button>
            </form>
        </article>
<?php
    include("includes/footer.php");
?> 
    </body>
    <script>
        window.addEventListener(
            "load",
            function() {
                let slideshowElement = document.getElementsByClassName("js-slideshow")[0];

                if (slideshowElement != null) {
                    slideshow =
                        (new Slideshow(slideshowElement))
                            .addImage("img/vineyard-table.jpg")
                            .addImage("img/wooden-house.jpg")
                            .addImage("img/wine-tossing.jpg")
                            .addImage("img/wine-shelf.jpg");
                            
                    slideshow.makeBackButton("Anterior");
                    slideshow.makeNextButton("Próximo");
                }
            }
        );
    </script>
</html>