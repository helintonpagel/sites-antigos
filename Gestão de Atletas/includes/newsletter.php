        <article class="newsletter" data-asynchronous="true">
            <h2 class="newsletter__heading">
                Cadastre-se e receba nossas novidades.
            </h2>
            <form class="newsletter__form" action="#">
                <label class="newsletter__field text-field">
                    <input class="text-field__input" name="name" type="text">
                    <span class="text-field__label">Nome</span>
                </label>
                <label class="newsletter__field text-field">
                    <input class="text-field__input" name="email" type="email">
                    <span class="text-field__label">E-mail</span>
                </label>
                <button class="newsletter__button button">Enviar</button>
            </form>
            <strong class="form-response form-response--loading">
                <img class="form-response__icon" src="img/hour-glass.svg" data-graphics="inline" width="24" height="24" alt="Carregando"> Aguarde...
            </strong>
            <strong class="form-response form-response--success"></strong>
            <strong class="form-response form-response--failure"></strong>
        </article>