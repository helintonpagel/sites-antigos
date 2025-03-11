<!DOCTYPE html>
<html>
    <head>
        <title>Estofados Treviso</title>
        <?php echo file_get_contents("includes/metas.php"); ?>
    </head>
    <body>
    <?php echo file_get_contents("includes/header.php"); ?>


        <article>
            <section class="banner--dark bg-2 foo">
                <div class="container">
                    <h2 class="banner__title">
                        Representantes
                    </h2>
                </div>
            </section>

            <div class="agent">
                <div class="container">
                    <p>Encontre nosso representante mais próximo para comprar nosso produtos ou ser nosso parceiro</p>
                    <h2>Selecione sua região:</h2>
                    <div class="custom-select">
                        <select onchange="console.log(this)">
                          <option value="0">Curitiba, PR</option>
                          <option value="1">Floranópolis, SC</option>
                          <option value="2">Porto Alegre, RS</option>
                          <option value="3">Rio de Janeiro, RJ</option>
                          <option value="4">São Paulo, SP</option>
                        </select>
                    </div>

                    <ul>
                        <li>
                            <a href="#">
                                Lagoa Móveis<br/>
                                Rua da Anita, 1234<br/>
                                Bairro Agronomia, Porto Alegre - RS<br/>
                                (51) 4002-8922<br/>
                                contato@lagoa.com.br<br/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Lagoa Móveis<br/>
                                Rua da Anita, 1234<br/>
                                Bairro Agronomia, Porto Alegre - RS<br/>
                                (51) 4002-8922<br/>
                                contato@lagoa.com.br<br/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Lagoa Móveis<br/>
                                Rua da Anita, 1234<br/>
                                Bairro Agronomia, Porto Alegre - RS<br/>
                                (51) 4002-8922<br/>
                                contato@lagoa.com.br<br/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Lagoa Móveis<br/>
                                Rua da Anita, 1234<br/>
                                Bairro Agronomia, Porto Alegre - RS<br/>
                                (51) 4002-8922<br/>
                                contato@lagoa.com.br<br/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Lagoa Móveis<br/>
                                Rua da Anita, 1234<br/>
                                Bairro Agronomia, Porto Alegre - RS<br/>
                                (51) 4002-8922<br/>
                                contato@lagoa.com.br<br/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Lagoa Móveis<br/>
                                Rua da Anita, 1234<br/>
                                Bairro Agronomia, Porto Alegre - RS<br/>
                                (51) 4002-8922<br/>
                                contato@lagoa.com.br<br/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Lagoa Móveis<br/>
                                Rua da Anita, 1234<br/>
                                Bairro Agronomia, Porto Alegre - RS<br/>
                                (51) 4002-8922<br/>
                                contato@lagoa.com.br<br/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Lagoa Móveis<br/>
                                Rua da Anita, 1234<br/>
                                Bairro Agronomia, Porto Alegre - RS<br/>
                                (51) 4002-8922<br/>
                                contato@lagoa.com.br<br/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Lagoa Móveis<br/>
                                Rua da Anita, 1234<br/>
                                Bairro Agronomia, Porto Alegre - RS<br/>
                                (51) 4002-8922<br/>
                                contato@lagoa.com.br<br/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Lagoa Móveis<br/>
                                Rua da Anita, 1234<br/>
                                Bairro Agronomia, Porto Alegre - RS<br/>
                                (51) 4002-8922<br/>
                                contato@lagoa.com.br<br/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Lagoa Móveis<br/>
                                Rua da Anita, 1234<br/>
                                Bairro Agronomia, Porto Alegre - RS<br/>
                                (51) 4002-8922<br/>
                                contato@lagoa.com.br<br/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Lagoa Móveis<br/>
                                Rua da Anita, 1234<br/>
                                Bairro Agronomia, Porto Alegre - RS<br/>
                                (51) 4002-8922<br/>
                                contato@lagoa.com.br<br/>
                            </a>
                        </li>
                        
                    </ul>
                </div>
            </div>
            
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