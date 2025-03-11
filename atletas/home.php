<!DOCTYPE html>
<html>
    <head>
        <title>
            Gestão de Atletas
        </title>
<?php
include "includes/meta.php";
?> 
    </head>
    <body class="home">
<?php
include "includes/header.php";
?> 
        <article class="short">
            <div class="short__wrapper">
                <h2 class="short__heading">
                    Sequence Web Gestão de Atletas
                </h2>
                <p class="short__paragraph">
                    Uma solução estratégica e validada para o cenário do e-commerce brasileiro, destinado aos sellers que não possuem ou não querem estoque físico de produto e dependem de processos manuais para tratar o fluxo de pedidos e reposição de saldo de produtos com seus distribuidores.
                </p>
                <img class="short__image" src="img/soccer.svg" width="545" height="456" alt="Três garotos jogando futebol sendo um deles o goleiro, que se localiza ao fundo da ilustração. Os outros dois, disputam a dominação da bola. O garoto da esquerda está vestido com uma blusa laranja com a numeração 10, short preto e chuteira preta. O garoto da direita veste camisa preta com a numeração 20, short laranja e chuteira laranja. O garoto da direita está com uma maior abertura das pernas como se tivesse corrido muito para ter o passe da bola.">
                <a class="short__button button" href="#">Conheça!</a>
            </div>
        </article>
        <article class="brief">
            <h2>
                Por que escolher o Sequence?
            </h2>
            <p class="brief__paragraph">
                O <b class="brief__product">Sequence Web Gestão de Atletas</b> é um software desenvolvido com foco na avaliação de atletas em treino ou individual, que visa mensurar o desempenho do atleta, oferecendo relatórios e dados estatísticos para o treinador desenvolver um jogar e torna-lo muito mais preparado para o profissional.
            </p>
            <ul class="brief__list">
                <li class="brief__item">
                    Avaliação coletiva (passe de bola, domínio, finalização, velocidade e mais).
                </li>
                <li class="brief__item">
                    Avaliação técnica.
                </li>
                <li class="brief__item">
                    Avaliação táticas.
                </li>
                <li class="brief__item">
                    Avaliação física.
                </li>
                <li class="brief__item">
                    Avaliação psicológica.
                </li>
            </ul>
            <a class="brief__button button" href="#">Conheça mais produtos!</a>
        </article>
        <article class="plans">
            <div class="plans__wrapper">
                <h2>
                    Conheça nossos planos para sellers
                </h2>
                <p class="plans__paragraph">
                    Planos com modalidades acessíveis para auxiliar você!
                </p>
                <div class="plans__control">
                    <div class="plans__view">
                        <ul class="plans__list">
                            <li class="plans__item">
                                <article class="plan-card">
                                    <h3 class="plan-card__heading">
                                        <abbr title="Pacote Atletas">PA</abbr>20
                                    </h3>
                                    <ul class="plan-card__list">
                                        <li class="plan-card__item">1 Colaborador</li>
                                        <li class="plan-card__item">20 Atletas</li>
                                    </ul>
                                    <b class="plan-price">
                                        R$60,<span class="plan-price__super">00 <span class="plan-price__cycle">Mensais</span></span>
                                    </b>
                                    <a class="plan-card__button button" href="form.php">Quero este!</a>
                                </article>
                            </li>
                            <li class="plans__item">
                                <article class="plan-card">
                                    <h3 class="plan-card__heading">
                                        <abbr title="Pacote Atletas">PA</abbr>50
                                    </h3>
                                    <ul class="plan-card__list">
                                        <li class="plan-card__item">1 Colaborador</li>
                                        <li class="plan-card__item">50 Atletas</li>
                                    </ul>
                                    <b class="plan-price">
                                        R$125,<span class="plan-price__super">00 <span class="plan-price__cycle">Mensais</span></span>
                                    </b>
                                    <a class="plan-card__button button" href="form.php">Quero este!</a>
                                </article>
                            </li>
                            <li class="plans__item">
                                <article class="plan-card">
                                    <h3 class="plan-card__heading">
                                        <abbr title="Pacote Atletas">PA</abbr>100
                                    </h3>
                                    <ul class="plan-card__list">
                                        <li class="plan-card__item">1 Colaborador</li>
                                        <li class="plan-card__item">100 Atletas</li>
                                    </ul>
                                    <b class="plan-price">
                                        R$250,<span class="plan-price__super">90 <span class="plan-price__cycle">Mensais</span></span>
                                    </b>
                                    <a class="plan-card__button button" href="form.php">Quero este!</a>
                                </article>
                            </li>
                            <li class="plans__item">
                                <article class="plan-card">
                                    <h3 class="plan-card__heading">
                                        <abbr title="Pacote Atletas">PA</abbr>200
                                    </h3>
                                    <ul class="plan-card__list">
                                        <li class="plan-card__item">1 Colaborador</li>
                                        <li class="plan-card__item">200 Atletas</li>
                                    </ul>
                                    <b class="plan-price">
                                        R$500,<span class="plan-price__super">00 <span class="plan-price__cycle">Mensais</span></span>
                                    </b>
                                    <a class="plan-card__button button" href="form.php">Quero este!</a>
                                </article>
                            </li>
                        </ul>
                    </div>
                    <button class="plans-button plans-button--back" title="Voltar">
                        <img class="plans-button__icon" src="img/chevron-thin-left.svg" data-graphics="inline" width="24" height="24" alt="Voltar">
                    </button>
                    <button class="plans-button plans-button--next" title="Próximo">
                        <img class="plans-button__icon" src="img/chevron-thin-right.svg" data-graphics="inline" width="24" height="24" alt="Próximo">
                    </button>
                </div>
                <aside class="plans__aside">
                    Havendo necessidade de upgrade de plano, deverá ser solicitado por e-mail ao suporte.
                </aside>
            </div>
        </article>
<?php
include "includes/newsletter.php";
?> 
<?php
include "includes/footer.php";
?> 
    </body>
</html>