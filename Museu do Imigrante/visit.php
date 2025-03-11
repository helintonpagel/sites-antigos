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
                        Visite o <br> Museu
                    </h2>
                    <img class="banner__image" src="img/museum.webp" width="684" height="456" alt="Adipisicing esse ipsum mollit laboris enim ullamco culpa cupidatat duis proident ex proident.">
                    <nav class="banner__breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb__item">
                                <a class="breadcrumb__link" href="home.php">Início</a>
                            </li>
                            <li class="breadcrumb__item">
                                <img class="breadcrumb__icon" data-graphics="inline" src="img/chevron-small-right.svg" width="24" height="24" alt="" role="presentation"> <a class="breadcrumb__link" href="inicio.php">Visite o Museu</a>
                            </li>
                        </ol>
                    </nav>
                </div>
            </header>
            <div class="paper">
                <p class="paper__paragraph">
                    O Museu do Imigrante foi fundado através do decreto dLei 566 de 18 de dezembro de 1974, e abriu suas portas para a comunidade em 21 de maio de 1975, desenvolvendo desde então as suas atividades em um antigo prédio construído em 1913
                </p>
                <img class="paper__image" src="img/visit.svg" width="146" height="72" alt="Consectetur reprehenderit fugiat ea occaecat pariatur ipsum aliquip dolor ea.">
            </div>
        </article>
        <article class="short short--inner">
            <h2 class="short__heading">
                Nossos <br> <span class="short__stress">Horários</span>
            </h2>
            <p class="short__paragraph">
                Terça-feira a sábado <br> <time datetime="08:00">08h</time> às <time datetime="11:45">11h45</time> <br> <time datetime="13:30">13h30</time> às <time datetime="17:45">17h45</time>
            </p>
        </article>
<?php
    include "includes/tour.php";
?> 
        <article class="short">
            <h2 class="short__heading">
                <span class="short__stress">Agende</span> <br> Sua <br> Visita
            </h2>
            <p class="short__paragraph">
                Agende sua visita, você pode nos visitar a qualquer momente, seja sozinho ou em um grupo de menos de 6 pessoas. Pedimos que com grupos com mais de 6 pessoas, entre em contato para agendar. 
            </p>
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