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
                                        Publicações Consevitis
                                    </a>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </aside>
                <header class="banner__header">
                    <h2 class="banner__heading heading heading">
                        <span class="heading__text">Publicações Consevitis</span>
                    </h2>
                    <p class="banner__paragraph">
                        Aqui você acompanha a transparência e nossas prestações de compras
                    </p>
                </header>
            </div>
            <img class="banner__image" src="img/parque.webp" width="609" height="456" alt="Adicionar descrição, por favor não se esqueça"/>
        </section>
        <section class="topics">
            <div class="topics__pillar pillar">
                <h2 class="topics__heading heading">
                    <span class="heading__text">Escolha o departamento</span>
                </h2>
                <ul class="topics__list">
                    <li class="topics__item">
                        <a class="button button--light" href="#">
                            Vitivinicultura
                        </a>
                    </li>
                    <li class="topics__item">
                        <a class="button button--light" href="#">
                            Agricultura
                        </a>
                    </li>
                    <li class="topics__item">
                        <a class="button button--light" href="#">
                            Consevitis
                        </a>
                    </li>
                    <li class="topics__item">
                        <a class="button button--light" href="#">
                            Agricultura
                        </a>
                    </li>
                    <li class="topics__item">
                        <a class="button button--light" href="#">
                            Licitações
                        </a>
                    </li>
                    <li class="topics__item">
                        <a class="button button--light" href="#">
                            Conselho
                        </a>
                    </li>
                    <li class="topics__item">
                        <a class="button button--light" href="#">
                            Vitivinicultura
                        </a>
                    </li>
                </ul>
            </div>
        </section>
        <section class="topic-posts topic-posts__pillar pillar">
            <h2 class="topic-posts__heading heading">
                <span class="heading__text">Confira a lista de publicações abaixo</span>
            </h2>
            <ul class="topic-posts__list">
                <li class="topic-posts__item">
                    <a class="topic-posts__link" href="post.php">
                        <p class="topic-posts__heading">
                            Maecenas sit amet lorem et risus pharetra consectetur
                        </p>
                        <time class="topic-posts__time" datetime="2021-05-10">
                            Publicado em 10/05/2021
                        </time>
                    </a>
                </li>
                <li class="topic-posts__item">
                    <a class="topic-posts__link" href="post.php">
                        <p class="topic-posts__heading">
                            Aliquam commodo, est quis commodo fermentum, nisl nulla mattis sem, cursus mattis leo augue non nisl
                        </p>
                        <time class="topic-posts__time" datetime="2021-04-05">
                            Publicado em 05/04/2021
                        </time>
                    </a>
                </li>
                <li class="topic-posts__item">
                    <a class="topic-posts__link" href="post.php">
                        <p class="topic-posts__heading">
                            Mauris enim dolor, pretium sed erat eu, pulvinar facilisis mi
                        </p>
                        <time class="topic-posts__time" datetime="2021-03-25">
                            Publicado em 25/03/2021
                        </time>
                    </a>
                </li>
                <li class="topic-posts__item">
                    <a class="topic-posts__link" href="post.php">
                        <p class="topic-posts__heading">
                            Phasellus lacus velit, semper vel nisl vitae, eleifend cursus ligula
                        </p>
                        <time class="topic-posts__time" datetime="2021-02-15">
                            Publicado em 15/02/2021
                        </time>
                    </a>
                </li>
                <li class="topic-posts__item">
                    <a class="topic-posts__link" href="post.php">
                        <p class="topic-posts__heading">
                            Curabitur elementum dapibus tortor, vitae vestibulum tellus sollicitudin eget
                        </p>
                        <time class="topic-posts__time" datetime="2021-01-02">
                            Publicado em 02/01/2021
                        </time>
                    </a>
                </li>
                <li class="topic-posts__item">
                    <a class="topic-posts__link" href="post.php">
                        <p class="topic-posts__heading">
                            Cras at mattis dolor, lobortis rutrum lacus
                        </p>
                        <time class="topic-posts__time" datetime="2020-12-12">
                            Publicado em 12/12/2020
                        </time>
                    </a>
                </li>
            </ul>
            <ol class="topic-posts__breadcrumb breadcrumb">
                <li class="breadcrumb__item">
                    <a class="breadcrumb__link breadcrumb__link--active" href="#">
                        1
                    </a>
                </li>
                <li class="breadcrumb__item">
                    <a class="breadcrumb__link" href="#">
                        2
                    </a>
                </li>
                <li class="breadcrumb__item">
                    <a class="breadcrumb__link" href="#">
                        3
                    </a>
                </li>
            </ol>
        </section>
<?php
include("includes/newsletter.php");
?> 
<?php
include("includes/footer.php");
?> 
    </body>
</html>