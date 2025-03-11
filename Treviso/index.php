<!DOCTYPE html>
<html>
    <head>
        <title>Estofados Treviso</title>
        <?php echo file_get_contents("includes/metas.php"); ?>
    </head>
    <body>
        <?php echo file_get_contents("includes/header.php"); ?>
        <article>
            <header class="slider">
                <section class="banner banner--sofa-1">
                    <div class="container">
                        <h2 class="banner__title">
                            Design
                            <span class="banner__small-title">Traduzido em Linhas e Formas</span>
                        </h2>
                    </div>
                </section>
                <section class="banner banner--sofa-2">
                    <div class="container">
                        <h2 class="banner__title">
                            Conforto
                            <span class="banner__small-title">e elegância perfeitos para o seu estilo</span>
                        </h2>
                    </div>
                </section>
                <section class="banner banner--sofa-3">
                    <div class="container">
                        <h2 class="banner__title">
                            Design
                            <span class="banner__small-title">Traduzido em Linhas e Formas</span>
                        </h2>
                    </div>
                </section>
                <section class="banner banner--sofa-4">
                    <div class="container">
                        <h2 class="banner__title">
                            Conforto
                            <span class="banner__small-title">e elegância perfeitos para o seu estilo</span>
                        </h2>
                    </div>
                </section>
                <button class="slider__left-button">
                    <svg class="slider__arrow" xmlns="http://www.w3.org/2000/svg" height="24" width="21" viewBox="0 0 448 512"><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
                </button>
                <button class="slider__right-button">
                    <svg class="slider__arrow" xmlns="http://www.w3.org/2000/svg" height="24" width="21" viewBox="0 0 448 512"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
                </button>
                <span class="slider__scroll-down">
                    Role para baixo
                    <svg class="slider__chevron" xmlns="http://www.w3.org/2000/svg" height="24" width="21" viewBox="0 0 448 512"><path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
                </span>
            </header>
            <section class="window">
                <div class="window__rag">
                    <div class="window__inner-rag">
                        <div class="moon">
                            <h2 class="moon__text">Nossas<br/>Coleções</h2>
                        </div>
                        <p class="window__text">Coleções versáteis, desenvolvidas para favorecer o conforto e a funcionalidade dos espaços.</p>
                        <a class="window__button button" href="produtos.php">Conheça</a>
                    </div>
                </div>
            </section>
            <section class="banner--centralized banner--pb fix">
                <!-- banner-'bottom' -->
                <div class="container">
                    <h2 class="banner__title" style="font-style: normal">A Treviso</h2>
                    <p class="banner__text">Mais do que estofados, oferecemos soluções inteligentes, duráveis e confortáveis para ambientes de bem viver.</p>
                    <a class="banner__button button" href="empresa.php">Saiba mais</a>
                </div>
            </section>
            <section class="window window--left">
                <div class="window__rag">
                    <div class="window__inner-rag">
                        <div class="moon--left">
                            <h2 class="moon__text">Nossos<br/>Representantes</h2>
                        </div>
                        <p class="window__text">Nossos parceiros comerciais estão presentes por todo o país. Seja para comprar ou revender nossos produtos, com certeza há um representante próximo de você.</p>
                        <a class="window__button button" href="representantes.php">Encontre</a>
                    </div>
                </div>
            </section>
            <article class="newsletter container" style="max-width: 33rem;">
                <h2 class="newsletter__title">Cadastre-se e receba nossas novidades</h2>
                <form id="newsletter">
                    <label>
                        <!-- <span>Nome completo</span> -->
                        <input class="newsletter__field" placeholder="Nome completo" type="text" />
                    </label>
                    <label>
                        <!-- <span>E-mail</span> -->
                        <input class="newsletter__field" placeholder="E-mail" type="text"/>
                    </label>
                </form>
                <!-- <aside class="newsletter__text">
                    <p>De acordo com a <abbr title="Lei Geral de Proteção de Dados Pessoais">LGPD</abbr> os dados fornecidos serão unicamente utilizados por nossa empresa como canal de cantato.</p>
                </aside> -->
                <button class="newsletter__button button" form="newsletter" type="submit">Cadastrar</button>
            </article>
        </article>

        <?php echo file_get_contents("includes/footer.php"); ?>
        
    </body>
</html>