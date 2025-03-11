<!DOCTYPE html>
<html>

<head>
    <title>Estofados Treviso</title>
    <?php echo file_get_contents("includes/metas.php"); ?>

    <script src="https://www.google.com/recaptcha/api.js"></script>
</head>

<body>
    <?php echo file_get_contents("includes/header.php"); ?>


    <article>
        <section class="banner--dark bg-3 foo">
            <div class="container">
                <h2 class="banner__title">
                    Contato
                </h2>
            </div>
        </section>

        <div class="">
            <div class="container agent" style="font-size: 1.2rem;">
                <p>Preecha os campos abaixo e envie sua mensagem.<br />Em breve você receberá contata de nossa equipe.</p>
                <article class="newsletter">
                    <form id="newsletter">
                        <label>
                            <!-- <span>Nome completo</span> -->
                            <input class="newsletter__field" placeholder="Nome" type="text" />
                        </label>
                        <label>
                            <!-- <span>E-mail</span> -->
                            <input class="newsletter__field phone_with_ddd" placeholder="Telefone" type="text" />
                        </label>

                        <label>
                            <!-- <span>E-mail</span> -->
                            <input class="newsletter__field" placeholder="E-mail" type="text" />
                        </label>

                        <label>
                            <!-- <span>E-mail</span> -->
                            <input class="newsletter__field" placeholder="Mensagem" type="text" />
                        </label>

                        <label class="check">
                            <input class="newsletter__field" placeholder="Mensagem" type="checkbox" />
                            <span style="line-height: 55px;">&nbsp;Desejo receber notificações por este e-mail.</span>
                        </label>
                        <br />

                        <div class="g-recaptcha" data-sitekey="6LdVPRMaAAAAAPwUtHVd8Bt6QtMzi-LIipFIcTzo"></div>

                        <button class="newsletter__button button" form="newsletter" type="submit">Enviar</button>

                    </form>


                </article>


            </div>

            <div class="container footer fake">
                <ul class="the">
                    <li>
                        <h3>Contato</h3>
                        <a href="tel:+555434771215">
                            <svg class="social-media__icon footer__icon" xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path>
                            </svg>
                            (54) 3477-1215
                        </a>
                        <a href="tel:+555434771021">
                            /
                            (54) 3477-1021
                        </a>
                        <br/>
                        <a href="mailto:constato@estofadostreviso.com.br">
                                <svg class="social-media__icon footer__icon" xmlns="http://www.w3.org/2000/svg" height="24" width="21" viewBox="0 0 448 512"><path fill="currentColor" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path></svg>
                                constato@estofadostreviso.com.br</a>
                    </li>
                    <li>
                        <h3>Onde Estamos</h3>
                        <div class="">
                            
                            <p>
                                <svg class="social-media__icon footer__icon" xmlns="http://www.w3.org/2000/svg" height="24" width="21" viewBox="0 0 448 512">
                                    <path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                </svg>
                                Rua Francisco José Trevizan, nº. 270
                                <br />
                                Distrito Industrial III
                                <br />
                                Paraí - RS
                            </p>
                        </div>
                    </li>
                    <!-- <li>
                        <h3>Horário de atendimento</h3>
                        <ul>
                            <li>
                                <svg class="social-media__icon footer__icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24" height="24" viewBox="0 0 31.183 31.183" style="enable-background:new 0 0 31.183 31.183;" xml:space="preserve">
                                    <g>
                                        <g>
                                            <path d="M15.591,2.359C8.046,2.359,1.93,8.476,1.93,16.02c0,3.743,1.507,7.132,3.945,9.6c-0.434,0.556-1.101,1.408-2.016,2.583
			c-0.5,0.642-0.384,1.565,0.257,2.066c0.269,0.209,0.587,0.311,0.904,0.311c0.438,0,0.873-0.194,1.163-0.566
			c0,0,1.232-1.582,1.979-2.536c2.14,1.392,4.688,2.207,7.43,2.207s5.291-0.815,7.432-2.207c0.746,0.954,1.978,2.536,1.978,2.536
			c0.291,0.372,0.726,0.566,1.163,0.566c0.316,0,0.636-0.102,0.903-0.311c0.642-0.501,0.757-1.426,0.257-2.066
			c-0.915-1.175-1.582-2.028-2.016-2.584c2.437-2.467,3.943-5.855,3.943-9.599C29.252,8.476,23.136,2.359,15.591,2.359z
			 M4.562,16.02c0-6.081,4.949-11.029,11.03-11.029c6.083,0,11.03,4.948,11.03,11.029c0,6.084-4.946,11.033-11.03,11.033
			C9.509,27.053,4.562,22.104,4.562,16.02z" />
                                            <path d="M16.492,14.167l0.007-3.83c0-0.485-0.391-0.878-0.876-0.879c-0.484-0.001-0.877,0.391-0.878,0.877l-0.007,3.806
			c-0.472,0.215-0.851,0.598-1.053,1.076l-6.351-0.012c-0.485-0.001-0.877,0.393-0.878,0.878c-0.001,0.48,0.39,0.875,0.875,0.876
			l6.433,0.011c0.344,0.663,1.029,1.12,1.828,1.12c1.145,0,2.068-0.927,2.068-2.069C17.659,15.203,17.183,14.502,16.492,14.167z" />
                                            <path d="M1.583,2.154c-2.013,1.999-2.105,5.191-0.277,7.303l7.583-7.521C6.791,0.092,3.594,0.158,1.583,2.154z" />
                                            <path d="M29.603,2.154c-2.016-1.995-5.208-2.062-7.307-0.217l7.581,7.521C31.705,7.345,31.614,4.153,29.603,2.154z" />
                                        </g>
                                    </g>
                                </svg>


                                Seg à Sex: 08:00 - 17:00
                            </li>
                            <li>Sáb e Dom: 12:00 - 19:00</li>
                        </ul>
                    </li> -->
                </ul>
            </div>

            <iframe class="gmaps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3482.983194213235!2d-51.506400885227!3d-29.194621699229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951c22d820688e39%3A0xeae7fb350b6dff77!2sR.%20Nelson%20Carraro%2C%20395%2C%20Bento%20Gon%C3%A7alves%20-%20RS%2C%2095700-000!5e0!3m2!1spt-BR!2sbr!4v1608818644049!5m2!1spt-BR!2sbr" width="500" height="500" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>

    </article>


    <?php echo file_get_contents("includes/footer.php"); ?>
</body>

</html>