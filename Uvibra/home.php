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
        <section class="slider">
            <ul class="slider__list">
                <li class="slider__item">
                    <div class="slide">
                        <div class="slide__card">
                            <p class="slide__paragraph">
                                Cras vitae rutrum mauris, quis lacinia purus
                            </p>
                            <a class="slide__button button" href="#">
                                Saiba mais
                            </a>
                        </div>
                        <picture>
                            <source srcset="img/vineyard.webp" media="(max-width: 600px)"/>
                            <img class="slide__image" src="img/banner-1.webp" width="684" height="456" alt="Colina com parreral de uva em um dia ensolado.">
                        </picture>
                    </div>
                </li>
                <li class="slider__item">
                    <div class="slide">
                        <div class="slide__card">
                            <p class="slide__paragraph">
                                Lorem ipsum sit amet dolor
                            </p>
                            <a class="slide__button button" href="#">
                                Saiba mais
                            </a>
                        </div>
                        <picture>
                            <source srcset="img/vineyard.webp" media="(max-width: 600px)"/>
                            <img class="slide__image" src="img/banner-2.webp" width="684" height="456" alt="Agricultores trabalhando em um parreral de uva visto de cima.">
                        </picture>
                    </div>
                </li>
            </ul>
            <ul class="slider__control">
                <li class="slider__prev">
                    <button class="chevron chevron--prev" title="Anterior"></button>
                </li>
                <li class="slider__next">
                    <button class="chevron chevron--next" title="Próximo"></button>
                </li>
            </ul>
        </section>
        <section class="foreword">
            <div class="foreword__pillar pillar">
                <header class="foreword__intro">
                    <h2 class="heading">
                        <span class="heading__text">Publicações Consevitis</span>
                    </h2>
                    <q class="foreword__paragraph">
                        A Consevitis tem compromisso com seu público, e disponibiliza uma página de transparência e prestação de contas.
                        <br/>
                        Acesse e confira.
                    </q>
                    <a class="button" href="#">
                        Ver todas
                    </a>
                </header>
                <div class="foreword__posts">
                    <section class="posts">
                        <h3 class="heading">
                            <span class="heading__text">Publicações recentes</span>
                        </h3>
                        <ul class="posts__list">
                            <li class="posts__item">
                                <a class="posts__link" href="#">
                                    <time datetime="2021-05-10">
                                        10/05/2021
                                    </time>
                                    Maecenas sit amet lorem et risus pharetra consectetur
                                </a>
                            </li>
                            <li class="posts__item">
                                <a class="posts__link" href="#">
                                    <time datetime="2021-04-05">
                                        05/04/2021
                                    </time>
                                    Aliquam commodo, est quis commodo fermentum, nisl nulla mattis sem, cursus mattis leo augue non nisl
                                </a>
                            </li>
                            <li class="posts__item">
                                <a class="posts__link" href="#">
                                    <time datetime="2021-03-25">
                                        25/03/2021
                                    </time>
                                    Mauris enim dolor, pretium sed erat eu, pulvinar facilisis mi
                                </a>
                            </li>
                            <li class="posts__item">
                                <a class="posts__link" href="#">
                                    <time datetime="2021-02-15">
                                        15/02/2021
                                    </time>
                                    Phasellus lacus velit, semper vel nisl vitae, eleifend cursus ligula
                                </a>
                            </li>
                            <li class="posts__item">
                                <a class="posts__link" href="#">
                                    <time datetime="2021-01-02">
                                        02/01/2021
                                    </time>
                                    Curabitur elementum dapibus tortor, vitae vestibulum tellus sollicitudin eget
                                </a>
                            </li>
                            <li class="posts__item">
                                <a class="posts__link" href="#">
                                    <time datetime="2020-12-12">
                                        12/12/2020
                                    </time>
                                    Cras at mattis dolor, lobortis rutrum lacus
                                </a>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </section>
        <article class="posts-widget">
            <h2 class="heading">
                <span class="heading__text">Acompanhe nossas notícias</span>
            </h2>
            <div class="posts-widget__control pillar">
                <div class="posts-widget__pillar pillar">
                    <ul class="posts-widget__list">
                        <li class="posts-widget__item">
                            <div class="card">
                                <a class="card__link" href="#">
                                    <div class="card__pillar">
                                        <time class="card__time" datetime="2021-05-10">
                                            10 de maio, 2021
                                        </time>
                                        <h2 class="card__heading">
                                            Lorem Ipsum Dolor
                                        </h2>
                                    </div>
                                    <span class="card__button" href="#">
                                        Ver mais
                                    </span>
                                </a>
                                <img class="card__image" src="img/banner-1.webp" width="684" height="456" alt="Colina com parreral de uva em um dia ensolado.">
                            </div>
                        </li>
                        <li class="posts-widget__item">
                            <div class="card">
                                <a class="card__link" href="#">
                                    <div class="card__pillar">
                                        <time class="card__time" datetime="2021-04-17">
                                            17 de abril, 2021
                                        </time>
                                        <h2 class="card__heading">
                                            Phasellus lacus velit
                                        </h2>
                                    </div>
                                    <span class="card__button" href="#">
                                        Ver mais
                                    </span>
                                </a>
                                <img class="card__image" src="img/banner-2.webp" width="684" height="456" alt="Agricultores trabalhando em um parreral de uva visto de cima.">
                            </div>
                        </li>
                        <li class="posts-widget__item">
                            <div class="card">
                                <a class="card__link" href="#">
                                    <div class="card__pillar">
                                        <time class="card__time" datetime="2021-04-01">
                                            1 de abril, 2021
                                        </time>
                                        <h2 class="card__heading">
                                            Nullam auctor tristique nunc eget viverra
                                        </h2>
                                    </div>
                                    <span class="card__button" href="#">
                                        Ver mais
                                    </span>
                                </a>
                                <img class="card__image" src="img/banner-3.webp" width="684" height="456" alt="Entrada para uma casa rústica com um jardim com flores e mata no fundo.">
                            </div>
                        </li>
                        <li class="posts-widget__item">
                            <div class="card">
                                <a class="card__link" href="#">
                                    <div class="card__pillar">
                                        <time class="card__time" datetime="2021-03-26">
                                            26 de março, 2021
                                        </time>
                                        <h2 class="card__heading">
                                            Donec blandit metus dolor
                                        </h2>
                                    </div>
                                    <span class="card__button" href="#">
                                        Ver mais
                                    </span>
                                </a>
                                <img class="card__image" src="img/banner-4.webp" width="684" height="456" alt="Cacho de uva maduro na videira.">
                            </div>
                        </li>
                        <li class="posts-widget__item">
                            <div class="card">
                                <a class="card__link" href="#">
                                    <div class="card__pillar">
                                        <time class="card__time" datetime="2021-05-10">
                                            10 de maio, 2021
                                        </time>
                                        <h2 class="card__heading">
                                            Lorem Ipsum Dolor
                                        </h2>
                                    </div>
                                    <span class="card__button" href="#">
                                        Ver mais
                                    </span>
                                </a>
                                <img class="card__image" src="img/banner-1.webp" width="684" height="456" alt="Colina com parreral de uva em um dia ensolado.">
                            </div>
                        </li>
                        <li class="posts-widget__item">
                            <div class="card">
                                <a class="card__link" href="#">
                                    <div class="card__pillar">
                                        <time class="card__time" datetime="2021-04-17">
                                            17 de abril, 2021
                                        </time>
                                        <h2 class="card__heading">
                                            Phasellus lacus velit
                                        </h2>
                                    </div>
                                    <span class="card__button" href="#">
                                        Ver mais
                                    </span>
                                </a>
                                <img class="card__image" src="img/banner-2.webp" width="684" height="456" alt="Agricultores trabalhando em um parreral de uva visto de cima.">
                            </div>
                        </li>
                        <li class="posts-widget__item">
                            <div class="card">
                                <a class="card__link" href="#">
                                    <div class="card__pillar">
                                        <time class="card__time" datetime="2021-04-01">
                                            1 de abril, 2021
                                        </time>
                                        <h2 class="card__heading">
                                            Nullam auctor tristique nunc eget viverra
                                        </h2>
                                    </div>
                                    <span class="card__button" href="#">
                                        Ver mais
                                    </span>
                                </a>
                                <img class="card__image" src="img/banner-3.webp" width="684" height="456" alt="Entrada para uma casa rústica com um jardim com flores e mata no fundo.">
                            </div>
                        </li>
                        <li class="posts-widget__item">
                            <div class="card">
                                <a class="card__link" href="#">
                                    <div class="card__pillar">
                                        <time class="card__time" datetime="2021-03-26">
                                            26 de março, 2021
                                        </time>
                                        <h2 class="card__heading">
                                            Donec blandit metus dolor
                                        </h2>
                                    </div>
                                    <span class="card__button" href="#">
                                        Ver mais
                                    </span>
                                </a>
                                <img class="card__image" src="img/banner-4.webp" width="684" height="456" alt="Cacho de uva maduro na videira.">
                            </div>
                        </li>
                    </ul>
                </div>
                <ul>
                    <li class="posts-widget__prev">
                        <button class="chevron chevron--prev" title="Anterior"></button>
                    </li>
                    <li class="posts-widget__next">
                        <button class="chevron chevron--next" title="Próximo"></button>
                    </li>
                </ul>
            </div>
            <a class="posts-widget__button button button--light" href="#">
                Ver mais
            </a>
        </article>
        <section class="about">
            <div class="about__pillar pillar">
                <div class="about__header">
                    <h2 class="heading">
                        <span class="heading__text">Somos a Consevitis</span>
                    </h2>
                    <p class="about__paragraph">
                        Nullam ullamcorper, dolor nec cursus maximus, sem ligula consectetur nisi, in feugiat felis augue non justo
                    </p>
                </div>
                <div class="about__button">
                    <a class="button" href="#"> 
                        Conheça
                    </a>
                </div>
            </div>
        </section>
<?php
include("includes/newsletter.php");
?> 
<?php
include("includes/footer.php");
?> 
    </body>
</html>