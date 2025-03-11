<!DOCTYPE html>
<html>
    <head>
        <title>Estofados Treviso</title>
        <?php echo file_get_contents("includes/metas.php"); ?>
    </head>
    <body>
    <?php echo file_get_contents("includes/header.php"); ?>

        <article>
            <section class="banner--dark bg-1 foo">
                <div class="container">
                    <h2 class="banner__title">
                        A Treviso
                    </h2>
                </div>
            </section>
            <section class="media a">
                <div class="media__left">
                    <img class="" src="img/fabrica.jpeg"/>
                </div>
                <div class="media__right">
                    <div class="vertical-align">
                        <h2 class="banner__title">Nossa História</h2>
                        <p style="font-size: 1.25rem;font-weight: 300;line-height: 1.2;">
                        Uma história de trabalho e dedicação que iniciou em 1994, em um pequeno pavilhão com pouco mais de 800 m², e que hoje se transformou em uma referência em estofados no cenário nacional.
                        </p>
                    </div>
                </div>
            </section>

            <div class="container b">
                <p>A Estofados Treviso sempre buscou a máxima excelência em seus processos e produtos, atendendo aos mais exigentes mercados de decoração e interiores. Desta forma, a marca figura entre as escolhidas pelos consumidores que não abrem mão de produtos que agreguem sofisticação, conforto e classe aos seus ambientes.</p>
                <p>Com soluções que transitam entre todos os estilos, desde o clássico ao contemporâneo, e do tradicional ao moderno, a Treviso materializa, em estofados e poltronas, os conceitos de design inteligente, durável e confortável para ambientes de bem viver.</p>

            </div>

            <section class="conheca_mais">
                <div class="container">
                    <h2 class="banner__title">Conheça Mais</h2>
                    <ul>
                        <li>
                            <a class="button" href="produtos.php">
                                Nossa Coleção
                            </a>
                        </li>
                        <li>
                            <a class="button" href="representantes.php">
                                Representantes
                            </a>
                        </li>
                        <li>
                            <a class="button" href="contato.php">
                                Fale Conosco
                            </a>
                        </li>
                    </ul>
                </div>
            </section>

            <article class="newsletter container">
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