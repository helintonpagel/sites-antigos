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
                        Acervo
                    </h2>
                    <img class="banner__image" src="img/museum.webp" width="684" height="456" alt="Adipisicing esse ipsum mollit laboris enim ullamco culpa cupidatat duis proident ex proident.">
                    <nav class="banner__breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb__item">
                                <a class="breadcrumb__link" href="home.php">Início</a>
                            </li>
                            <li class="breadcrumb__item">
                                <img class="breadcrumb__icon" data-graphics="inline" src="img/chevron-small-right.svg" width="24" height="24" alt="" role="presentation"> <a class="breadcrumb__link" href="inicio.php">Acervo</a>
                            </li>
                        </ol>
                    </nav>
                </div>
            </header>
            <div class="paper">
                <p class="paper__paragraph">
                    Conheça nosso acervo e aproveite o máximo para aprender sobre esculturas, pinturas, objetos e demais informações. Vamos ficar felizes em saber que estamos contribuindo para a comunidade ficar a par do que temos aqui.
                </p>
                <img class="paper__image" src="img/visit.svg" width="146" height="72" alt="Consectetur reprehenderit fugiat ea occaecat pariatur ipsum aliquip dolor ea.">
            </div>
        </article>
        <article class="short short--inner">
            <h2 class="short__heading">
                Acesse <br> <span class="short__stress">o Link</span>
            </h2>
            <a class="short-link">
                <img class="short-link__icon" data-graphics="inline" src="img/chevron-small-right.svg" width="24" height="24" alt="" role="presentation"> Museu do Imigrante
            </a>
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