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
        <article>
            <header class="banner">
                <div class="banner__trunk">
                    <div class="banner__content">
                        <h2 class="banner__heading">
                            Morbi interdum nisl a magna rutrum
                        </h2>
                        <p class="banner__paragraph">
                            <time datetime="2020-05-25">
                                25/05/2020
                            </time>
                            - Cecília Motta
                        </p>
                    </div>
                    <a class="banner__button button--light" href="informativos.php">
                        Voltar
                    </a>
                </div>
                <img class="banner__image" width="762" height="456" src="img/noticia-24.jpg" role="presentation"/>
            </header>
            <section class="informative">
                <h3 class="informative__heading">
                    Vestibulum Quam Ipsum
                </h3>
                <p class="informative__paragraph">
                    Duis maximus maximus dolor vel imperdiet. Ut lectus mi, porta a cursus ornare, euismod vel nisl. Nullam dictum blandit odio, nec malesuada massa molestie non. Vivamus non auctor orci. Cras et quam commodo, elementum turpis at, efficitur nibh. Phasellus tempus, ante nec ultrices eleifend, nulla sapien venenatis justo, vel pretium libero quam a sapien. Sed at dui ullamcorper sem fringilla rhoncus sed nec ligula.
                </p>
                <p class="informative__paragraph">
                    Cras accumsan rhoncus justo, sit amet semper diam euismod vitae. Aliquam aliquam massa elit, ac rhoncus tortor suscipit dignissim. Vivamus semper interdum vulputate. Cras fermentum lectus ac enim semper maximus eget eu velit. Nunc sit amet erat id odio molestie accumsan ut sit amet nibh. Maecenas elementum arcu ullamcorper tincidunt ultrices.
                </p>
                <p class="informative__paragraph">
                    Nam at sem non dolor pellentesque tempor sit amet vel nulla. Maecenas eleifend at odio sed venenatis. Nullam congue non felis ac interdum. Vivamus lacinia placerat risus, vel accumsan leo auctor nec. Curabitur mauris purus, ullamcorper ac efficitur a, luctus vel metus.
                </p>
                <ul class="informative__list">
                    <li class="informative__item">
                        <button class="thumbnail">
                            <img class="thumbnail__image" width="762" height="456" src="img/noticia-26.jpg" role="presentation"/>
                        </button>
                    </li>
                    <li class="informative__item">
                        <button class="thumbnail">
                            <img class="thumbnail__image" width="762" height="456" src="img/noticia-25.jpg" role="presentation"/>
                        </button>
                    </li>
                    <li class="informative__item">
                        <button class="thumbnail">
                            <img class="thumbnail__image" width="762" height="456" src="img/noticia-24.jpg" role="presentation"/>
                        </button>
                    </li>
                    <li class="informative__item">
                        <button class="thumbnail">
                            <img class="thumbnail__image" width="762" height="456" src="img/noticia-26.jpg" role="presentation"/>
                        </button>
                    </li>
                    <li class="informative__item">
                        <button class="thumbnail">
                            <img class="thumbnail__image" width="762" height="456" src="img/noticia-25.jpg" role="presentation"/>
                        </button>
                    </li>
                    <li class="informative__item">
                        <button class="thumbnail">
                            <img class="thumbnail__image" width="762" height="456" src="img/noticia-24.jpg" role="presentation"/>
                        </button>
                    </li>
                    <li class="informative__item">
                        <button class="thumbnail">
                            <img class="thumbnail__image" width="762" height="456" src="img/noticia-26.jpg" role="presentation"/>
                        </button>
                    </li>
                    <li class="informative__item">
                        <button class="thumbnail">
                            <img class="thumbnail__image" width="762" height="456" src="img/noticia-25.jpg" role="presentation"/>
                        </button>
                    </li>
                    <li class="informative__item">
                        <button class="thumbnail">
                            <img class="thumbnail__image" width="762" height="456" src="img/noticia-24.jpg" role="presentation"/>
                        </button>
                    </li>
                </ul>
                <div class="modal js-modal">
                    <img class="modal__image" width="762" height="456" src="img/noticia-24.jpg" role="presentation"/>
                    <ul>
                        <li>
                            <button class="modal__button--back slideshow-button--back" alt="Voltar Imagem"></button>
                        </li>
                        <li>
                            <button class="modal__button--next slideshow-button--next" alt="Próxima Imagem"></button>
                        </li>
                    </ul>
                    <!-- <button class="modal__close" alt="Fechar o modal"></button> -->
                </div>
            </section>
            <section class="informative__video">
                <h4 class="informative__video-heading">
                    Assista ao vídeo
                </h4>
                <iframe class="embed__frame" width="864" height="480" src="http://www.youtube.com/embed/3pg0bbTzqcc?vq=hd480" frameborder="0"></iframe>
            </section>
        </article>
        <article class="article">
            <h2 class="article__underlined-heading">
                Últimas Postagens
            </h2>
            <ul class="article__list">
                <li class="article__informative js-informative">
                    <a class="informative-card" href="artigo.php">
                        <div class="informative-card__content">
                            <time class="informative-card__date" datetime="2020-05-15">
                                15/05/20
                            </time>
                            <h3 class="informative-card__heading">
                                Orci in fermentum malesuada, felis augue semper diam.
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
                                Proin scelerisque dolor at orci lobortis, praesent quis purus quis neque efficitur tristique.
                            </h3>
                        </div>
                        <img class="informative-card__image" width="762" height="456" src="img/noticia-25.jpg" role="presentation"/>
                    </a>
                </li>
                <li class="article__informative js-informative  ">
                    <a class="informative-card" href="artigo.php">
                        <div class="informative-card__content">
                            <time class="informative-card__date" datetime="2020-05-15">
                                15/05/20
                            </time>
                            <h3 class="informative-card__heading">
                                Pellentesque posuere ut tortor et luctus. Curabitur eu leo eget massa maximus convallis non a risus.
                            </h3>
                        </div>
                        <img class="informative-card__image" width="762" height="456" src="img/noticia-26.jpg" role="presentation"/>
                    </a>
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