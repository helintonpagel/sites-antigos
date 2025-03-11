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
                Nossos Produtos
            </h2>
            <p class="article__paragraph">
                Confira abaixo alguns de nossos produtos
            </p>
            <div class="article__select select">
                <button class="select__field js-dropdown">
                    Todos
                    <i class="select__chevron"></i>
                </button>
                <ul class="select__list">
                    <li class="select__item">
                        <a class="select__option" href="#">
                            Todos
                        </a>
                    </li>
                    <li class="select__item">
                        <a class="select__option" href="#">
                            Equipamentos Hospitalares
                        </a>
                    </li>
                    <li class="select__item">
                        <a class="select__option" href="#">
                            Insumos
                        </a>
                    </li>
                    <li class="select__item">
                        <a class="select__option" href="#">
                            Mobiliário
                        </a>
                    </li>
                </ul>
            </div>
            <ul class="article__list">
                <li class="article__item js-product">
                    <a class="internal-product" href="placeholder.php">
                        <div class="internal-product__content">
                            <h3 class="internal-product__heading">
                                Maecenas eleifend
                            </h3>
                            <p class="internal-product__paragraph">
                                Orci in fermentum malesuada, felis augue semper diam.
                            </p>
                        </div>
                        <img class="internal-product__image" width="240" height="240" src="img/produto-10.jpg" role="presentation"/>
                    </a>
                </li>
                <li class="article__item js-product">
                    <a class="internal-product" href="placeholder.php">
                        <div class="internal-product__content">
                            <h3 class="internal-product__heading">
                                Donec non blandit
                            </h3>
                            <p class="internal-product__paragraph">
                                Proin scelerisque dolor at orci lobortis, praesent quis purus quis neque efficitur tristique.
                            </p>
                        </div>
                        <img class="internal-product__image" width="240" height="240" src="img/produto-12.jpg" role="presentation"/>
                    </a>
                </li>
                <li class="article__item js-product">
                    <a class="internal-product" href="placeholder.php">
                        <div class="internal-product__content">
                            <h3 class="internal-product__heading">
                                Facilisis tortor
                            </h3>
                            <p class="internal-product__paragraph">
                                Pellentesque posuere ut tortor et luctus. Curabitur eu leo eget massa maximus convallis non a risus.
                            </p>
                        </div>
                        <img class="internal-product__image" width="240" height="240" src="img/produto-11.jpg" role="presentation"/>
                    </a>
                </li>
                <li class="article__item js-product">
                    <a class="internal-product" href="placeholder.php">
                        <div class="internal-product__content">
                            <h3 class="internal-product__heading">
                                Proin luctus
                            </h3>
                            <p class="internal-product__paragraph">
                                Proin luctus pellentesque nibh, a venenatis nisl mollis et.
                            </p>
                        </div>
                        <img class="internal-product__image" width="240" height="240" src="img/produto-13.jpg" role="presentation"/>
                    </a>
                </li>
                <li class="article__item js-product">
                    <a class="internal-product" href="placeholder.php">
                        <div class="internal-product__content">
                            <h3 class="internal-product__heading">
                                Donec egestas
                            </h3>
                            <p class="internal-product__paragraph">
                                Tempus dolor, malesuada faucibus ex fringilla ac. Suspendisse potenti.
                            </p>
                        </div>
                        <img class="internal-product__image" width="240" height="240" src="img/produto-15.jpg" role="presentation"/>
                    </a>
                </li>
                <li class="article__item js-product">
                    <a class="internal-product" href="placeholder.php">
                        <div class="internal-product__content">
                            <h3 class="internal-product__heading">
                                Vestibulum dapibus
                            </h3>
                            <p class="internal-product__paragraph">
                                Suspendisse libero est, iaculis at sollicitudin pulvinar, pellentesque vel neque.
                            </p>
                        </div>
                        <img class="internal-product__image" width="240" height="240" src="img/produto-14.jpg" role="presentation"/>
                    </a>
                </li>
                <li class="article__item js-product">
                    <a class="internal-product" href="placeholder.php">
                        <div class="internal-product__content">
                            <h3 class="internal-product__heading">
                                Phasellus volutpat
                            </h3>
                            <p class="internal-product__paragraph">
                                Augue in massa tempus commodo. Etiam in ullamcorper metus
                            </p>
                        </div>
                        <img class="internal-product__image" width="240" height="240" src="img/produto-16.jpg" role="presentation"/>
                    </a>
                </li>
                <li class="article__item js-product">
                    <a class="internal-product" href="placeholder.php">
                        <div class="internal-product__content">
                            <h3 class="internal-product__heading">
                                Pellentesque
                            </h3>
                            <p class="internal-product__paragraph">
                                Pellentesque tortor velit, luctus sed fringilla mollis, blandit sollicitudin leo.
                            </p>
                        </div>
                        <img class="internal-product__image" width="240" height="240" src="img/produto-17.jpg" role="presentation"/>
                    </a>
                </li>
                <li class="article__item js-product">
                    <a class="internal-product" href="placeholder.php">
                        <div class="internal-product__content">
                            <h3 class="internal-product__heading">
                                Phasellus
                            </h3>
                            <p class="internal-product__paragraph">
                                Phasellus id nisl consequat, fringilla magna posuere, consequat nunc. Nunc rhoncus nibh a auctor sagittis.
                            </p>
                        </div>
                        <img class="internal-product__image" width="240" height="240" src="img/produto-19.jpg" role="presentation"/>
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
    include("includes/price.php");
?> 
<?php
    include("includes/footer.php");
?> 
    </body>
</html>