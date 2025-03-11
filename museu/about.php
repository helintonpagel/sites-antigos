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
                        Museu do <br> Imigrante
                    </h2>
                    <img class="banner__image" src="img/museum.webp" width="684" height="456" alt="Adipisicing esse ipsum mollit laboris enim ullamco culpa cupidatat duis proident ex proident.">
                    <nav class="banner__breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb__item">
                                <a class="breadcrumb__link" href="home.php">Início</a>
                            </li>
                            <li class="breadcrumb__item">
                                <img class="breadcrumb__icon" data-graphics="inline" src="img/chevron-small-right.svg" width="24" height="24" alt="" role="presentation"> <a class="breadcrumb__link" href="inicio.php">Conheça o Museu</a>
                            </li>
                        </ol>
                    </nav>
                </div>
            </header>
            <div class="about">
                <div class="about__column">
                    <p class="about__paragraph">
                        Voluptate ad fugiat sunt anim. Et occaecat anim et esse proident velit nisi elit velit Lorem est. Do sit nostrud Lorem ipsum labore veniam occaecat irure commodo consectetur elit.
                    </p>
                    <p class="about__paragraph">
                        Lorem veniam et consectetur ullamco enim irure aute velit fugiat. Commodo et ullamco occaecat veniam adipisicing. Ad incididunt aute occaecat velit deserunt dolor aliqua enim consectetur mollit aliquip. Ipsum labore ea id culpa consectetur qui cillum dolore labore laboris in. Cupidatat ad nisi reprehenderit id ea et quis occaecat adipisicing elit sint. Velit velit incididunt commodo amet.
                    </p>
                </div>
                <div class="about__column">
                    <p class="about__paragraph">
                        Ex commodo irure in cillum voluptate occaecat veniam Lorem cillum. Eiusmod elit aute incididunt occaecat cillum do enim. Dolor excepteur anim ea do irure incididunt non. Laborum ut sit ipsum dolore reprehenderit ex consectetur mollit.
                    </p>
                    <p class="about__paragraph">
                        Irure pariatur sit nisi do aliquip Lorem ullamco culpa. Et tempor voluptate labore reprehenderit consectetur tempor aliquip sint. Esse voluptate sit eiusmod officia velit anim dolor magna aliquip et aute eu. Eu mollit non sint adipisicing sunt consequat in minim dolore esse minim.
                    </p>
                </div>
            </div>
        </article>
<?php
    include "includes/short.php";
?> 

        <article class="video">
            <header class="video__wrapper">
                <button class="video__button">
                    <img class="video__icon" data-graphics="inline" src="img/play.svg" width="24" height="24" alt="Clique para assistir">
                </button>
                <h2 class="video__heading">
                    Assista nosso vídeo
                </h2>
            </header>
            <img class="video__image" src="img/museum.webp" width="684" height="456" alt="Adipisicing esse ipsum mollit laboris enim ullamco culpa cupidatat duis proident ex proident.">
        </article>
        <article class="mission">
            <div class="mission__wrapper">
                <h2 class="mission__heading">
                    Missão
                </h2>
                <p class="mission__paragraph">
                    Viabilizar a reflexão e o conhecimento sobre a história da cidade de Bento Gonçalves, tendo como foco a imigração italiana, especialmente no nordeste do Rio Grande do Sul, e sua relação com as demais etnias presentes em Bento Gonçalves num olhar que privilegie a comunicação, preservação, e expressão do patrimônio cultural que contribua para compreeender diversidade sicial brasileira.
                </p>
                <img class="mission__image" src="img/mission.svg" width="143" height="240" alt="Associação Amigos do Museu do Imigrante">
            </div>
        </article>
        <article class="exhibit exhibit--related">
            <h2 class="exhibit__heading">
                Conheça mais sobre o museu
            </h2>
            <ul class="exhibit__list">
                <li class="exhibit__item">
                    <article class="poster">
                        <div class="poster-text">
                            <h3 class="poster-text__heading poster-text__heading--related">
                                Mollit do lorem et dolore
                            </h3>
                        </div>
                        <a class="poster__link" href="#">
                            <img class="poster__icon poster__icon--related" data-graphics="inline" src="img/chevron-small-right.svg" width="24" height="24" alt="Clique para ver mais sobre essa exposição.">
                        </a>
                        <img class="poster__image" src="img/room-1.webp" width="684" height="456" alt="Ipsum exercitation reprehenderit dolore reprehenderit consequat do et eiusmod nostrud incididunt enim cillum.">
                    </article>
                </li>
                <li class="exhibit__item">
                    <article class="poster">
                        <div class="poster-text">
                            <h3 class="poster-text__heading poster-text__heading--related">
                                Nisi culpa mollit deserunt
                            </h3>
                        </div>
                        <a class="poster__link" href="#">
                            <img class="poster__icon poster__icon--related" data-graphics="inline" src="img/chevron-small-right.svg" width="24" height="24" alt="Clique para ver mais sobre essa exposição.">
                        </a>
                        <img class="poster__image" src="img/room-2.webp" width="684" height="456" alt="Tempor voluptate reprehenderit exercitation nulla ad ipsum esse enim nostrud qui.">
                    </article>
                </li>
            </ul>
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