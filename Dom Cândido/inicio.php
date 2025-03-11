<!DOCTYPE html>
<html lang="pt-BR">
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
        <article class="slideshow">
            <section class="slideshow__guide guide">
                <img class="guide__image" src="img/vineyard-path.jpg" width="684" height="456" alt="Paisagem muito bonita de alguma coisa relacionada a uva ou vinho que você não consegue ver."/>
            </section>
            <ul class="slideshow__list">
                <li class="slideshow__item">
                    <a class="slideshow__link" href="#">
                        <img class="slideshow__image" src="img/wine-glass.jpg" width="684" height="456" alt="Paisagem muito bonita de alguma coisa relacionada a uva ou vinho que você não consegue ver."/>
                    </a>
                </li>
                <li class="slideshow__item">
                    <a class="slideshow__link" href="#">
                        <img class="slideshow__image" src="img/wine-shelf.jpg" width="684" height="456" alt="Paisagem muito bonita de alguma coisa relacionada a uva ou vinho que você não consegue ver."/>
                    </a>
                </li>
                <li class="slideshow__item">
                    <a class="slideshow__link" href="#">
                        <img class="slideshow__image" src="img/vineyard-table.jpg" width="684" height="456" alt="Paisagem muito bonita de alguma coisa relacionada a uva ou vinho que você não consegue ver."/>
                    </a>
                </li>
            </ul>
            <button class="slideshow__prev">
                Anterior
            </button>
            <button class="slideshow__next">
                Próximo
            </button>
        </article>
        <section class="branding">
            <header class="branding-header">
                <div class="branding-header__content">
                    <h2 class="heading fly-effect">
                        Onde Encontrar
                        <span class="heading__handwritten">
                            Nossos Produtos
                        </span>
                    </h2>
                    <p class="branding-header__paragraph fly-effect">
                        Compre os produtos Dom Cândido no nosso e-commerce ou conheça os parceiros da vinícola em todo Brasil. Você também pode adquiri-los diretamente em nossa loja física. Faça-nos uma visita.
                    </p>
                </div>
            </header>
            <div class="branding__content  fly-effect">
                <ul>
                    <li class="branding__bottle">
                        <figure class="bottle">
                            <img class="bottle__image" src="img/bottle-1.png" width="54" height="216">
                            <figcaption class="bottle__text">
                                Gran Reserva Cabernet Sauvignon
                            </figcaption>
                        </figure>
                    </li>
                    <li class="branding__bottle">
                        <figure class="bottle">
                            <img class="bottle__image" src="img/bottle-2.png" width="54" height="216">
                            <figcaption class="bottle__text">
                                Vinho 4ª Geração Marselan
                            </figcaption>
                        </figure>
                    </li>
                    <li class="branding__bottle">
                        <figure class="bottle">
                            <img class="bottle__image" src="img/bottle-3.png" width="54" height="216">
                            <figcaption class="bottle__text">
                                Reserva Dom Cândido Tannat
                            </figcaption>
                        </figure>
                    </li>
                </ul>
                <ul>
                    <li class="branding__inline">
                        <a class="branding__button button" href="encontrar.php">
                            Nossos parceiros
                        </a>
                    </li>
                    <li class="branding__inline">
                        <a class="branding__button button" href="#">
                            Compre agora
                        </a>
                    </li>
                </ul>
            </div>
        </section>
        <section class="featured">
            <div class="featured__leaves featured-leaves">
                <img class="featured-leaves__image" src="img/home-history.png" width="431" height="600"
                    alt="Homem em um parreiral tocando em um cacho de uva."/>
            </div>
            <div class="featured__content" id="conteudo">
                <div class="featured__card">
                    <h2 class="heading fly-effect">
                        Uma História de
                        <span class="heading__handwritten">
                            Amor pelo Vinho
                        </span>
                    </h2>
                    <p class="featured__paragraph fly-effect">
                        A família Dom Cândido se orgulha de suas raízes e história. Pessoas envolvidas no trabalho, dedicação e amor por esta terra. Tradição e valores passados de geração em geração, fazendo com que o cultivo de uvas nobres, em vinhedos próprios, resulte na elaboração de quantidades limitadas de garrafas. Vinhos, espumantes e sucos, em cada produto temos aromas e sabores incomparáveis! Uma história de amor pelo vinho!
                    </p>
                    <a class="featured__button button" href="vinicola.php">
                        A Vinícola
                    </a>
                </div>
            </div>
        </section>
        <section class="inferior">
            <div class="inferior__content fly-effect">
                <h2 class="heading">
                    Acompanhe nossas
                    <span class="heading__handwritten">
                        Novidades
                    </span>
                </h2>
                <p class="inferior__paragraph">
                    Acompanhe a Dom Cândido nas redes sociais, conheça um pouco mais sobre o mundo do vinho e venha nos visitar.
                </p>
                <p class="inferior__paragraph">
                    Aproveite para assinar nossa newsletter e receber nossas promoções.
                </p>
                <ul class="inferior__icon-bar icon-bar">
                    <li class="icon-bar__item">
                        <a class="icon-bar__link tripadvisor-icon" href="https://www.tripadvisor.com.br/Attraction_Review-g680210-d8368217-Reviews-Vinicola_Dom_Candido-Bento_Goncalves_State_of_Rio_Grande_do_Sul.html" target="_blank">
                            Tripadvisor
                        </a>
                    </li>
                    <li class="icon-bar__item">
                        <a class="icon-bar__link facebook-icon" href="https://www.facebook.com/domcandido?fref=ts" target="_blank">
                            Facebook
                        </a>
                    </li>
                    <li class="icon-bar__item">
                        <a class="icon-bar__link instagram-icon" href="https://www.instagram.com/vinicoladomcandido/" target="_blank">
                            Instagram
                        </a>
                    </li>
                </ul>
            </div>
        </section>
<?php
include("includes/footer.php");
?> 
    </body>
</html>