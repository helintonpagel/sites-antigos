<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <title>
            Vinícula Maximo Boschi
        </title>
<?php
    include("includes/meta.php");
?> 
    </head>
    <body>
<?php
    include("includes/header.php");
?> 
        
        <article class="page">
            <header>
                <h2 class="page__title">
                    Somos a Maximo Boschi
                </h2>
                <div class="banner">
                    <img class="banner__image" src="img/barrels.jpg" role="presentation"/>
                </div>
            </header>
            <section>
                <h3 class="page__subtitle">
                    Nossa Paixão Pelos Vinhos
                </h3>
                <p>
                    A Vinícola Maximo Boschi teve sua origem no ano 2000, através do talento de seus fundadores Renato Antônio Savaris e Daniel Dalla Valle, enólogos com vasta experiência no setor vitivinícola nacional e internacional.
                </p>
                <p>
                    Está localizada no Vale dos Vinhedos, em Bento Gonçalves, no coração da Serra Gaúcha, região que acolheu os primeiros imigrantes italianos apresentou o local perfeito para darem continuidade à sua tradição, iniciando o plantio de vinhedos e a elaboração artesanal de vinhos. 
                </p>
                <div class="boschi-media">
                    <p class="boschi-media__text">
                        Se inspirando nessa paixão, a Vinícola Maximo Boschi alia tecnologia ao cultivo de uvas excepcionais, para elaborar obras primas singulares e de altíssima nobreza. Vinhos tintos de guarda potentes e maduros, tintos jovens, brancos envelhecidos e maturados em carvalho, espumantes evoluídos pelo método clássico tradicional (Champenoise) e pelo método Martinotti (Charmat) além de suco de uva integral. Todos carregados de ímpar personalidade, que é característica marcante de cada taça sob a assinatura da vinícola.
                    </p>
                    <i class="boschi-media__image"></i>
                </div>
                <p class="page__square">
                    Com obras primas que figuram entre os notáveis do mundo, nos últimos anos a Maximo Boschi foi contemplada com premiações internacionais e nacionais renomadas e de grande reconhecimento. 
                </p>
                <div class="page__inline">
                    <section class="page__inline-item">
                        <h4>
                            Missão
                        </h4>
                        <p>
                            Oferecer vinhos, espumantes e produtos gourmet para clientes com paladar exigente, atendendo suas expectativas, obtendo resultados de forma eficiente e com comprometimento social.
                        </p>
                    </section>
                    <section class="page__inline-item">
                        <h4>
                            Visão
                        </h4>
                        <p>
                            Ser reconhecida como vinícola de alta qualidade com atuação forte nos principais mercados do Brasil e ter considerável prospecção internacional. 
                        </p>
                    </section>
                    <section class="page__inline-item">
                        <h4>
                            Valores
                        </h4>
                        <p>
                            Transparência, Qualidade, Ética, Serenidade e Comprometimento.
                        </p>
                    </section>
                </div>
            </section>
        </article>
        <article class="newsletter">
            <h2 class="newsletter__title">
                Cadastre-se e receba nossa novidades em seu e-mail
            </h2>
            <form class="newsletter__form">
                <label class="newsletter__field">
                    Nome Completo
                    <input class="newsletter__input" type="text"/>
                </label>
                <label class="newsletter__field">
                    E-mail
                    <input class="newsletter__input" type="text"/>
                </label>
                <aside class="newsletter__aside">
                    <p>
                        De acordo com a
                        <abbr title="Lei Geral de Proteção de Dados Pessoais">LGPD</abbr>
                        os dados fornecidos serão unicamente utilizados por nossa empresa como canal de contato.
                    </p>
                </aside>
                <button class="button newsletter__button" type="submit">
                    Cadastrar
                </button>
            </form>
        </article>
<?php
    include("includes/footer.php");
?> 
    </body>
    <script>
        window.addEventListener(
            "load",
            function() {
                let slideshowElement = document.getElementsByClassName("js-slideshow")[0];

                if (slideshowElement != null) {
                    slideshow =
                        (new Slideshow(slideshowElement))
                            .addImage("img/vineyard-table.jpg")
                            .addImage("img/wooden-house.jpg")
                            .addImage("img/wine-tossing.jpg")
                            .addImage("img/wine-shelf.jpg");
                            
                    slideshow.makeBackButton("Anterior");
                    slideshow.makeNextButton("Próximo");
                }
            }
        );
    </script>
</html>