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
        <article class="article">
            <h2 class="article__heading">
                Informativos
            </h2>
            <p class="article__paragraph">
                Neste espaço você encontra informações, conteúdos importantes, os mais recentes lançamentos e novidades sobre insumos hospitalares.
            </p>
            <div class="article__select select">
                <button class="select__field js-dropdown">
                    Janeiro/2021
                    <i class="select__chevron"></i>
                </button>
                <ul class="select__list">
                    <li class="select__item">
                        <a class="select__option" href="">
                            Janeiro/2021
                        </a>
                    </li>
                    <li class="select__item">
                        <a class="select__option" href="">
                            Dezembro/2020
                        </a>
                    </li>
                    <li class="select__item">
                        <a class="select__option" href="">
                            Novembro/2020
                        </a>
                    </li>
                    <li class="select__item">
                        <a class="select__option" href="">
                            Outubro/2020
                        </a>
                    </li>
                    <li class="select__item">
                        <a class="select__option" href="">
                            Setembro/2020
                        </a>
                    </li>
                    <li class="select__item">
                        <a class="select__option" href="">
                            Agosto/2020
                        </a>
                    </li>
                    <li class="select__item">
                        <a class="select__option" href="">
                            Julho/2020
                        </a>
                    </li>
                    <li class="select__item">
                        <a class="select__option" href="">
                            Junho/2020
                        </a>
                    </li>
                    <li class="select__item">
                        <a class="select__option" href="">
                            Maio/2020
                        </a>
                    </li>
                    <li class="select__item">
                        <a class="select__option" href="">
                            Abril/2020
                        </a>
                    </li>
                    <li class="select__item">
                        <a class="select__option" href="">
                            Março/2020
                        </a>
                    </li>
                    <li class="select__item">
                        <a class="select__option" href="">
                            Fevereiro/2020
                        </a>
                    </li>
                    <li class="select__item">
                        <a class="select__option" href="">
                            Janeiro/2020
                        </a>
                    </li>
                </ul>
            </div>
            <ul class="article__list">
                <li class="article__informative js-informative">
                    <a class="informative-card" href="artigo.php">
                        <div class="informative-card__content">
                            <time class="informative-card__date" datetime="2020-05-15">
                                15/05/20
                            </time>
                            <h3 class="informative-card__heading">
                                Orci in fermentum malesuada
                            </h3>
                        </div>
                        <img class="informative-card__image" width="762" height="456" src="img/noticia-24.jpg" role="presentation"/>
                    </a>
                </li>
                <li class="article__informative js-informative">
                    <a class="informative-card" href="artigo.php">
                        <div class="informative-card__content">
                            <time class="informative-card__date" datetime="2020-05-15">
                                15/05/20
                            </time>
                            <h3 class="informative-card__heading">
                                Proin scelerisque dolor at orci lobortis
                            </h3>
                        </div>
                        <img class="informative-card__image" width="762" height="456" src="img/noticia-25.jpg" role="presentation"/>
                    </a>
                </li>
                <li class="article__informative js-informative">
                    <a class="informative-card" href="artigo.php">
                        <div class="informative-card__content">
                            <time class="informative-card__date" datetime="2020-05-15">
                                15/05/20
                            </time>
                            <h3 class="informative-card__heading">
                                Pellentesque posuere ut tortor et luctus
                            </h3>
                        </div>
                        <img class="informative-card__image" width="762" height="456" src="img/noticia-26.jpg" role="presentation"/>
                    </a>
                </li>
                <li class="article__informative js-informative">
                    <a class="informative-card" href="artigo.php">
                        <div class="informative-card__content">
                            <time class="informative-card__date" datetime="2020-05-15">
                                15/05/20
                            </time>
                            <h3 class="informative-card__heading">
                                Proin luctus pellentesque nibh
                            </h3>
                        </div>
                        <img class="informative-card__image" width="762" height="456" src="img/noticia-24.jpg" role="presentation"/>
                    </a>
                </li>
                <li class="article__informative js-informative">
                    <a class="informative-card" href="artigo.php">
                        <div class="informative-card__content">
                            <time class="informative-card__date" datetime="2020-05-15">
                                15/05/20
                            </time>
                            <h3 class="informative-card__heading">
                                Tempus dolor, malesuada faucibus ex fringilla ac.
                            </h3>
                        </div>
                        <img class="informative-card__image" width="762" height="456" src="img/noticia-25.jpg" role="presentation"/>
                    </a>
                </li>
                <li class="article__informative js-informative">
                    <a class="informative-card" href="artigo.php">
                        <div class="informative-card__content">
                            <time class="informative-card__date" datetime="2020-05-15">
                                15/05/20
                            </time>
                            <h3 class="informative-card__heading">
                                Suspendisse libero est, iaculis at sollicitudin pulvinar
                            </h3>
                        </div>
                        <img class="informative-card__image" width="762" height="456" src="img/noticia-26.jpg" role="presentation"/>
                    </a>
                </li>
            </ul>
            <ul class="article__leading pagination">
                <li class="pagination__item">
                    <button class="pagination__button is-active">
                        1
                    </button>
                </li>
                <li class="pagination__item">
                    <button class="pagination__button">
                        2
                    </button>
                </li>
                <li class="pagination__item">
                    <button class="pagination__button">
                        3
                    </button>
                </li>
            </ul>
        </article>
<?php
    include("includes/newsletter.php");
?> 
<?php
    include("includes/footer.php");
?> 
    </body>
</html>