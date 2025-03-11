<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <title>
            Hecol Móveis
        </title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="css/style.css">
        <script src="js/index.php"></script>
        <script src="https://www.google.com/recaptcha/api.js" async defer></script>
        <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png">
        <link rel="manifest" href="favicon/site.webmanifest">
        <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#5bbad5">
        <link rel="shortcut icon" href="favicon/favicon.ico">
        <meta name="msapplication-TileColor" content="#da532c">
        <meta name="msapplication-config" content="favicon/browserconfig.xml">
        <meta name="theme-color" content="#ffffff">
    </head>
    <body>
        <div class="loader">
            <img class="loader__image" src="img/loader.svg" width="182" height="48" alt="" role="presentation">
        </div>
        <div class="top-bar">
            <section>
                <h2 class="top-bar__heading">
                    Contato
                </h2>
                <ul class="top-bar__list">
                    <li class="top-bar__item">
                        <a class="top-bar__link" href="tel:05434545900">
                            <img class="top-bar__icon" src="img/phone.svg" width="24" height="24" alt="Telefone">
                            (54) 3454 5900
                        </a>
                    </li>
                    <li class="top-bar__item">
                        <a class="top-bar__link" href="mailto:contato@hecolmoveis.com.br">
                            <img class="top-bar__icon" src="img/mail.svg" width="24" height="24" alt="E-mail">
                            contato@hecolmoveis.com.br
                        </a>
                    </li>
                </ul>
            </section>
            <header class="header">
                <h1 class="header__logo">
                    <a class="logo" href="inicio.php">
                        <img class="logo__image" src="img/hecol-logo.svg" width="163" height="72" alt="Hecol Móveis">
                    </a>
                </h1>
                <button class="header__button" title="Abrir menu">
                    <img class="header__icon" src="img/menu.svg" width="24" height="24" alt="Menu">
                </button>
                <div class="header__menu menu">
                    <section>
                        <h2 class="menu__heading">
                            Menu
                        </h2>
                        <nav>
                            <ul class="menu__list">
                                <li class="menu__item">
                                    <a class="menu__link" href="inicio.php">Início</a>
                                </li>
                                <li class="menu__item">
                                    <a class="menu__link" href="#sobre">Sobre</a>
                                </li>
                                <li class="menu__item">
                                    <a class="menu__link" href="#catalogo">Catálogo</a>
                                </li>
                                <li class="menu__item">
                                    <a class="menu__link" href="#contato">Contato</a>
                                </li>
                            </ul>
                        </nav>
                    </section>
                    <section class="menu__contact menu-contact">
                        <h2 class="menu-contact__heading">
                            Contato
                        </h2>
                        <address>
                            <ul class="menu-contact__list">
                                <li>
                                    <a class="menu-contact__link" href="tel:05434545900">
                                        <img class="menu-contact__icon" src="img/phone.svg" width="24" height="24" alt="Telefone">
                                        (54) 3454 5900
                                    </a>
                                </li>
                                <li>
                                    <a class="menu-contact__link" href="mailto:contato@hecolmoveis.com.br">
                                        <img class="menu-contact__icon" src="img/mail.svg" width="24" height="24" alt="E-mail">
                                        contato@hecolmoveis.com.br
                                    </a>
                                </li>
                                <li>
                                    <img class="menu-contact__icon" src="img/location-pin.svg" width="24" height="24" alt="Endereço">
                                    Rua Arlindo Baccin, 601, Pav. 05 e 06 <br> Vinhedos - Bento Gonçalves - RS <br> Cx. Postal 847 / CEP 95707-150
                                </li>
                            </ul>
                        </address>
                    </section>
                </div>
            </header>
        </div>
        <article class="banner">
            <h2 class="banner-text">
                <div class="banner-text__content">
                    Nossos Produtos São <br> Desenvolvidos Com <br> Soluções Inteligentes
                </div>
            </h2>
            <ul class="banner__list">
                <li class="banner__item">
                    <img class="banner__image" src="img/light-desk.webp" width="593" height="456" alt="Ambiente escritório com janela e um mural escuro na parede; escrivaninha de canto branca, com um computador iMac em cima, contendo duas gavetas e uma porta, acompanhando uma cadeira de acrílico; estante livreiro branca contendo seis nichos; gavetão com quatro gavetas e rodinhas;">
                </li>
                <li class="banner__item">
                    <img class="banner__image" src="img/living-room.webp" width="684" height="456" alt="Ambiente sala de estar com carpete e dois vasos brancos com cactos; rack com cores claras, contendo quatro pés palitos, servindo de suporte para uma TV LG três nichos, dois retangulares e um quadrado, e um compartimento com uma porta.">
                </li>
                <li class="banner__item">
                    <img class="banner__image" src="img/kitchen.webp" width="684" height="456" alt="Ambiente cozinha compacta de cores escuras, com puxadores tipo cava; torre de calor com dois compartimentos contendo um microondas e um forno; armários aéreos com uma e duas portas de abrir, ao meio três nichos quadrados, um retangular e logo abaixo um nicho comprido; pia com duas portas de abrir, ao lado armários com gaveteiros e espaço para fogão de seis bocas.">
                </li>
            </ul>
            <span class="span banner-sign">
                <div class="banner-sign__text">Role para baixo</div>
                <img class="banner-sign__icon" src="img/chevron-down.svg" height="24" width="24" alt="" role="presentation">
            </span>
        </article>
        <article class="intro" id="sobre">
            <div class="intro__wrapper">
                <div class="intro__background">
                    <h2 class="intro__heading">
                        Sobre a Hecol Móveis
                    </h2>
                    <p>
                        Localizada na cidade de Bento Gonçalves, região serrana do Rio Grande do Sul, a Hecol Móveis foi fundada em 21 de março de 1994 pelo seu atual diretor Valdir Ribeiro de Almeida.
                    </p>
                    <p>
                        No início de suas atividades, o segmento de produção era somente a linha de produtos tubulares. Seguindo a tendência do mercado da época, em pouco tempo houve a necessidade de se optar em produzir móveis revestidos em painel aglomerado FF (Finish Fool) e anos mais tarde introduziu-se um maquinário moderno de pintura para realizar a impressão UV (Ultravioleta) com cores bem diversificadas em suas linhas de produtos.
                    </p>
                    <p>
                        Movida pela constante necessidade de aprimoramento de seus produtos, a Hecol vem concentrando seus esforços na busca de inovações no campo do design, funcionalidade e qualidade em sua linha. Dessa maneira desenvolveu novos ambientes voltados para atender as necessidades de seus consumidores em todo o Brasil. Além disso, pode-se destacar o atendimento ágil e prestativo, com muita seriedade e parcerias duradouras com seus clientes, através de uma relação de confiança para cada vez mais melhorar seu posicionamento no mercado atual altamente concorrido.
                    </p>
                </div>
            </div>
        </article>
        <article class="products">
            <h2 class="products__heading">
                Produtos
            </h2>
            <div class="products__content">
                <p class="products__paragraph">
                    Nossos produtos são desenvolvidos com soluções inteligentes, priorizando qualidade e praticidade, com atendimento personalizado.
                </p>
                <img class="products__image" src="img/light-kitchen.webp" width="684" height="456" alt="Ambiente cozinha compacta de cores claras e textura na parede: Geladeria de inox, em cima dois armários aéreos retangulares, contendo espaços paragGeladeria e fogão com depurador de ar. No Meio dois armário aéreos com folhas de abrir, em baixo uma pia com duas portas de abrir e três gavetas.">
            </div>
            <div class="products__content">
                <img class="products__image" src="img/desk.webp" width="593" height="456" alt="Ambiente de escritório de estudo: escrivaninha retangular, com um iMac em cima, e embaixo quatro nichos acompanhada poar uma cadeira de plástico PP. Ao lado estante livreiro com nove nichos, alternado entre retangulares e quadrados.">
                <img class="products__watermark" src="img/watermark.svg" width="179" height="456" alt="Hecol Móveis">
            </div>
        </article>
        <article class="catalog" id="catalogo">
            <div class="catalog__content">
                <div class="catalog__wrapper">
                    <h2 class="catalog__heading">
                        Confira Nosso <br> Catálogo
                    </h2>
                    <img class="catalog__image" src="img/catalog.png" width="662" height="456" alt="" role="presentation">
                </div>
            </div>
            <div class="catalog__content">
                <section class="catalog__wrapper">
                    <h3 class="catalog__logo logo">
                        <img class="logo__image" src="img/basic-hecol-logo.svg" width="163" height="72" alt="Hecol Móveis">
                    </h3>
                    <button class="catalog__button">
                        Baixe o Catálogo
                        <img class="catalog__icon" src="img/baixar.svg" width="24" height="24" alt="" role="presentation">
                    </button>
                </section>
            </div>
        </article>
        <article class="contact" id="contato">
            <header class="contact-header">
                <div class="contact-header__wrapper">
                    <div class="contact-header__content">
                        <h2 class="contact-header__heading">
                            Fale Conosco
                        </h2>
                        <p class="contact-header__paragraph">
                            Para saber mais sobre nossos produtos <br> ou a empresa <br> entre em contato
                        </p>
                    </div>
                </div>
            </header>
            <div class="contact__content">
                <div class="contact__form">
                    <form class="contact-form" action="#">
                        <label class="text-field">
                            <input class="text-field__input" name="name" type="text">
                            <span class="text-field__label">Nome</span>
                        </label>
                        <label class="text-field">
                            <input class="text-field__input" name="phone" type="tel" inputmode="tel">
                            <span class="text-field__label">Telefone</span>
                        </label>
                        <label class="text-field">
                            <input class="text-field__input" name="email" type="email" inputmode="email">
                            <span class="text-field__label">E-mail</span>
                        </label>
                        <label class="textarea">
                            <span class="textarea__label">Escreva Aqui</span>
                            <textarea class="textarea__input" name="message" cols="30" rows="10"></textarea>
                        </label>
                        <label class="checkbox">
                            <input class="checkbox__input" type="checkbox">
                            <img class="checkbox__icon" src="img/check.svg" width="24" height="24" alt="" role="presentation">
                            <span class="checkbox__label">Desejo receber informações</span>
                        </label>
                        <div class="contact-form__recaptcha">
                            <div class="g-recaptcha" data-sitekey="your_site_key"></div>
                        </div>
                        <button class="contact-form__button" type="submit">
                            Enviar
                        </button>
                        <strong class="contact-form__message">Sua mensagem foi enviada com sucesso!</strong>
                    </form>
                </div>
            </div>
            <div class="contact__content">
                <iframe class="contact__map" width="600" height="456" src="https://maps.google.com/maps?q=%20Rua%20Arlindo%20Baccin,%20601,%20Vinhedos%20-%20Bento%20Gon%C3%A7alves%20-%20RS%20&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>
        </article>
        <footer class="footer">
            <div class="footer__wrapper">
                <h2 class="footer__logo logo">
                    <img class="logo__image" src="img/hecol-logo.svg" width="163" height="72" alt="Hecol Móveis">
                </h2>
                <div class="footer__content">
                    <section>
                        <h3 class="footer__heading">
                            Contato
                        </h3>
                        <address>
                            <ul>
                                <li>
                                    <a href="tel:05434545900">
                                        <img class="footer__icon" src="img/phone.svg" width="24" height="24" alt="Telefone">
                                        (54) 3454 5900
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:contato@hecolmoveis.com.br">
                                        <img class="footer__icon" src="img/mail.svg" width="24" height="24" alt="E-mail">
                                        contato@hecolmoveis.com.br
                                    </a>
                                </li>
                            </ul>
                        </address>
                    </section>
                    <section>
                        <h3 class="footer__heading">
                            Endereço
                        </h3>
                        <address>
                            <img class="footer__icon footer__icon--marker" src="img/location-pin.svg" width="24" height="24" alt="" role="presentation">
                            Rua Arlindo Baccin, 601, Pav. 05 e 06 <br> Vinhedos - Bento Gonçalves - RS <br> Cx. Postal 847 / CEP 95707-150
                        </address>
                    </section>
                </div>
                <div class="footer__content">
                    <section>
                        <h3 class="footer__heading">
                            Menu
                        </h3>
                        <nav>
                            <ul>
                                <li>
                                    <a href="inicio.php">Início</a>
                                </li>
                                <li>
                                    <a href="#sobre">Sobre</a>
                                </li>
                                <li>
                                    <a href="#catalogo">Catálogo</a>
                                </li>
                                <li>
                                    <a href="#contato">Contato</a>
                                </li>
                            </ul>
                        </nav>
                    </section>
                </div>
                <div class="footer__content">
                    <section>
                        <h3 class="footer__heading">
                            Central de Relacionamento
                        </h3>
                        <ul>
                            <li>
                                <a href="#">Fale Conosco</a>
                            </li>
                            <li>
                                <a href="#">Política de Privacidade</a>
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h3 class="footer__heading">
                            Horários
                        </h3>
                        <p>Segunda à Sexta <br> <time datetime="07:30">07h30</time> às <time datetime="11:00">11h</time> / <time datetime="13:00">13h</time> às <time datetime="17:00">17h</time></p>
                    </section>
                </div>
            </div>
            <aside class="closure">
                <strong class="closure__heading">
                    <img class="footer__icon" src="img/lock.svg" width="24" height="24" alt="" role="presentation">
                    Site seguro
                </strong>
                <p class="closure__paragraph">
                    2021 - Todos os direitos reservados. CNPJ 97.357.032/0001-80. Todas as imagens são meramente ilustrativas.
                </p>
                <section class="tooltip">
                    <h3 class="tooltip__heading">
                        <a class="tooltip__link" href="#">
                            <img class="tooltip__image" src="img/goon-logo.svg" width="193" height="24" alt="Goon, Design e Tecnologia">
                        </a>
                    </h3>
                    <p class="tooltip__paragraph">
                        Goon Design e Tecnologia, parceiro da sua empresa na web. Acesse e confira nossos projetos!
                    </p>
                </section>
            </aside>
        </footer>
    </body>
</html>