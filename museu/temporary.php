<!DOCTYPE html>
<html>
    <head>
        <title>
            Museu do Imigrante
        </title>
<?php
    include "includes/meta.php";
?> 
    </head>
    <body>
<?php
    include "includes/header.php";
?> 
        <article>
            <header class="banner">
                <div class="banner__wrapper">
                    <h2 class="banner__heading">
                        Exposições Temporárias
                    </h2>
                    <img class="banner__image" src="img/museum.webp" width="684" height="456" alt="Adipisicing esse ipsum mollit laboris enim ullamco culpa cupidatat duis proident ex proident.">
                    <nav class="banner__breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb__item">
                                <a class="breadcrumb__link" href="home.php">Início</a>
                            </li>
                            <li class="breadcrumb__item">
                                <img class="breadcrumb__icon" data-graphics="inline" src="img/chevron-small-right.svg" width="24" height="24" alt="" role="presentation"> <a class="breadcrumb__link" href="inicio.php">Exposições Temporárias</a>
                            </li>
                        </ol>
                    </nav>
                </div>
            </header>
            <div class="exhibit">
                <div class="exhibit__menu">
                    <ul class="exhibit-menu">
                        <li class="exhibit-menu__item">
                            <a class="exhibit-menu__link" href="#">Em Cartaz</a>
                        </li>
                        <li class="exhibit-menu__item">
                            <a class="exhibit-menu__link" href="#">Anteriores</a>
                        </li>
                        <li class="exhibit-menu__item">
                            <a class="exhibit-menu__link" href="#">Em breve</a>
                        </li>
                    </ul>
                </div>
                <ul class="exhibit__list">
                    <li class="exhibit__item">
                        <article class="poster">
                            <header class="poster-text poster-text--exhibit">
                                <h3 class="poster-text__heading poster-text__heading--exhibit">
                                    Mollit do lorem et dolore
                                </h3>
                                <p class="poster-text__category">
                                    Exposições
                                </p>
                                <p class="poster-text__paragraph">
                                    <time datetime="2022-03-26">26/03</time> até <time datetime="2022-03-26">26/06</time> no Museu do Imigrante
                                </p>
                            </header>
                            <a class="poster__link" href="#">
                                <img class="poster__icon poster__icon--exhibit" data-graphics="inline" src="img/chevron-small-right.svg" width="24" height="24" alt="Clique para ver mais sobre essa exposição.">
                            </a>
                            <img class="poster__image" src="img/room-1.webp" width="684" height="456" alt="Ipsum exercitation reprehenderit dolore reprehenderit consequat do et eiusmod nostrud incididunt enim cillum.">
                        </article>
                    </li>
                    <li class="exhibit__item">
                        <article class="poster">
                            <header class="poster-text poster-text--exhibit">
                                <h3 class="poster-text__heading poster-text__heading--exhibit">
                                    Nisi culpa mollit deserunt
                                </h3>
                                <p class="poster-text__category">
                                    Exposições
                                </p>
                                <p class="poster-text__paragraph">
                                    <time datetime="2022-03-26">26/03</time> até <time datetime="2022-03-26">26/06</time> no Museu do Imigrante
                                </p>
                            </header>
                            <a class="poster__link" href="#">
                                <img class="poster__icon poster__icon--exhibit" data-graphics="inline" src="img/chevron-small-right.svg" width="24" height="24" alt="Clique para ver mais sobre essa exposição.">
                            </a>
                            <img class="poster__image" src="img/room-2.webp" width="684" height="456" alt="Tempor voluptate reprehenderit exercitation nulla ad ipsum esse enim nostrud qui.">
                        </article>
                    </li>
                    <li class="exhibit__item">
                        <article class="poster">
                            <header class="poster-text poster-text--exhibit">
                                <h3 class="poster-text__heading poster-text__heading--exhibit">
                                    Anim Lorem consectetur culpa id labore ea non
                                </h3>
                                <p class="poster-text__category">
                                    Exposições
                                </p>
                                <p class="poster-text__paragraph">
                                    <time datetime="2022-03-26">26/03</time> até <time datetime="2022-03-26">26/06</time> no Museu do Imigrante
                                </p>
                            </header>
                            <a class="poster__link" href="#">
                                <img class="poster__icon poster__icon--exhibit" data-graphics="inline" src="img/chevron-small-right.svg" width="24" height="24" alt="Clique para ver mais sobre essa exposição.">
                            </a>
                            <img class="poster__image" src="img/room-3.webp" width="684" height="456" alt="Amet officia cillum minim veniam ea duis consectetur adipisicing nulla nulla ullamco.">
                        </article>
                    </li>
                    <li class="exhibit__item">
                        <article class="poster">
                            <header class="poster-text poster-text--exhibit">
                                <h3 class="poster-text__heading poster-text__heading--exhibit">
                                    Occaecat aute nulla adipisicing anim
                                </h3>
                                <p class="poster-text__category">
                                    Exposições
                                </p>
                                <p class="poster-text__paragraph">
                                    <time datetime="2022-03-26">26/03</time> até <time datetime="2022-03-26">26/06</time> no Museu do Imigrante
                                </p>
                            </header>
                            <a class="poster__link" href="#">
                                <img class="poster__icon poster__icon--exhibit" data-graphics="inline" src="img/chevron-small-right.svg" width="24" height="24" alt="Clique para ver mais sobre essa exposição.">
                            </a>
                            <img class="poster__image" src="img/room-4.webp" width="684" height="456" alt="Deserunt adipisicing esse ipsum amet nulla fugiat ad cupidatat magna non eiusmod nulla magna.">
                        </article>
                    </li>
                </ul>
                <div class="exhibit__control control">
                    <button class="control__button control__button--back">
                        <img data-graphics="inline" src="img/chevron-small-left.svg" width="24" height="24" alt="Voltar">
                    </button>
                    <button class="control__button control__button--next">
                        <img data-graphics="inline" src="img/chevron-small-right.svg" width="24" height="24" alt="Próximo">
                    </button>
                    <ol class="control-bullets">
                        <li class="control-bullets__item">
                            <button class="control-bullets__button control-bullets__button--active">Slide 1</button>
                        </li>
                        <li class="control-bullets__item">
                            <button class="control-bullets__button">Slide 2</button>
                        </li>
                        <li class="control-bullets__item">
                            <button class="control-bullets__button">Slide 3</button>
                        </li>
                        <li class="control-bullets__item">
                            <button class="control-bullets__button">Slide 4</button>
                        </li>
                    </ol>
                </div>
            </div>
        </article>
<?php
    include "includes/social.php";
?> 
<?php
    include "includes/newsletter.php";
?> 
<?php
    include "includes/footer.php";
?> 
    </body>
</html>