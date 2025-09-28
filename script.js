document.addEventListener('DOMContentLoaded', () => {

    const menuButton = document.querySelector('.menu-button');
    const closeButton = document.querySelector('.close-button');
    const body = document.querySelector('body');

    if (menuButton) {
        menuButton.addEventListener('click', () => {
            body.classList.add('nav-active');
        });
    }

    if (closeButton) {
        closeButton.addEventListener('click', () => {
            body.classList.remove('nav-active');
        });
    }

    const mainContent = document.querySelector('main');

    const pageContent = {
        home: `
            <section class="welcome-banner">
                <div class="banner-content">
                    <h1>Bem-vindo ao SpottedPuc!</h1>
                    <p class="subtitle">O seu espaço para interagir, compartilhar e se divertir. Fique por dentro de tudo que rola na faculdade!</p>
                    <div class="rules-container">
                        <div class="rules-section">
                            <h2>🚫 O que NÃO pode:</h2>
                            <ul>
                                <li>🚫 Proibido qualquer tipo de discurso de ódio, preconceito ou assédio.</li>
                                <li>🚫 Não compartilhe informações pessoais ou de contato (suas ou de outros).</li>
                                <li>🚫 Sem bullying ou difamação. Pegue leve nas brincadeiras!</li>
                                <li>🚫 Mantenha o respeito. Críticas construtivas são bem-vindas, ataques não.</li>
                            </ul>
                        </div>
                        <div class="rules-section">
                            <h2>✅ O que PODE:</h2>
                            <ul>
                                <li>✅ Se divertir e interagir com respeito.</li>
                                <li>✅ Compartilhar memes e momentos engraçados da vida na PUC.</li>
                                <li>✅ Ajudar a galera nos classificados e achados e perdidos.</li>
                                <li>✅ Ficar por dentro e divulgar os melhores eventos e rolês!</li>
                            </ul>
                        </div>
                        <div class="home-action-button-wrapper">
                            <a href="#spotted" class="contact-link">Ir para o Spotted</a>
                        </div>
                    </div>
                    <p class="anonymity-note">
                        🕵 Levamos o anonimato a sério. Sinta-se à vontade para participar sem se identificar.
                    </p>
                    <p class="disclaimer">
                        ⚠️ Este é um espaço para diversão e conexão entre os alunos. Não nos responsabilizamos pelo descumprimento das regras. Contamos com o bom senso de todos! ⚠️
                    </p>
                </div>
            </section>
        `,
         spotted: `
            <div class="page-content" id="spotted-page">
                <h1>🤫 Spotted (Confissões)</h1>
                <p>As últimas confissões e flagras, direto do nosso Instagram!</p>
                <hr class="divider">

                <div class="elfsight-app-8327e7cf-a0f7-444f-a14e-c404b6aa5271" data-elfsight-app-lazy></div>

            </div>
        `,
        eventos: `<div class="page-content" id="mural-eventos"><h1>🎉 Eventos da Faculdade</h1><p>Fique por dentro de todas as festas, eventos oficiais da PUC.</p><iframe src="//lightwidget.com/widgets/504b0646b1e45b8a9597359063e88f67.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width:100%;border:0;overflow:hidden;"></iframe></div>`,
        roles: `<div class="page-content" id="mural-roles"><h1>🍻 Rolês Universitários</h1><p>Descubra os melhores bares, festas, calouradas e encontros da galera.</p><iframe src="//lightwidget.com/widgets/0b96336999e95a7284d02d2fee5cfa6d.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width:100%;border:0;overflow:hidden;"></iframe></div>`,
        classificados: `<div class="page-content" id="mural-classificados"><h1>📝 Classificados da PUC</h1><p>Procurando um livro, um lugar para morar ou um colega para dividir apê? Anuncie aqui!</p><iframe src="//lightwidget.com/widgets/ce1ca837edf052b0896dec54f1ffb1d1.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width:100%;border:0;overflow:hidden;"></iframe></div>`,
        achados: `<div class="page-content" id="mural-achados"><h1>🔎 Achados e Perdidos</h1><p>Perdeu sua carteirinha, seu guarda-chuva ou sua dignidade no último rolê? Talvez alguém tenha encontrado.</p><iframe src="//lightwidget.com/widgets/f103e3498a4a5fbfbd19228e31887fef.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width:100%;border:0;overflow:hidden;"></iframe></div>`,
        memes: `<div class="page-content" id="mural-memes"><h1>😂 Mural de Memes</h1><p>Apenas os melhores e mais autênticos memes da vida universitária.</p><iframe src="//lightwidget.com/widgets/76969229ff45521bafe0d1d868c031e5.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width:100%;border:0;overflow:hidden;"></iframe></div>`,
        contato: `<div class="page-content" id="mural-contato"><h1>💬 Fale Conosco</h1><p>Queremos ouvir você! Veja abaixo a melhor forma de entrar em contato conosco.</p><hr class="divider"><div class="contact-section"><h3>💡 Sugestões ou Críticas</h3><p>Sua opinião é super importante para nós! A maneira mais rápida de nos enviar sua sugestão é através de uma mensagem direta no Instagram.</p></div><div class="contact-section"><h3>📢 Parcerias e Anúncios</h3><p>Quer divulgar sua festa, seu negócio ou evento para a galera da faculdade? Fale com a gente pelo Instagram para mais detalhes e condições.</p></div><div class="contact-button-wrapper"><a href="https://www.instagram.com/spotted_puc_/" target="_blank" class="contact-link">Ir para o Instagram</a></div></div>`
    };

    function loadContent(pageKey) {
        const pageToLoad = pageKey || 'home'; 
        const content = pageContent[pageToLoad];
        mainContent.innerHTML = content;
        
        if (pageToLoad === 'home') {
            const title = mainContent.querySelector('.banner-content h1');
            const subtitle = mainContent.querySelector('.banner-content .subtitle');
            const rules = mainContent.querySelector('.banner-content .rules-container');
            const anonymity = mainContent.querySelector('.banner-content .anonymity-note');
            const disclaimer = mainContent.querySelector('.banner-content .disclaimer');
            const actionButton = mainContent.querySelector('.home-action-button-wrapper');


            if (title) title.classList.add('slide-in');
            if (subtitle) subtitle.classList.add('slide-in', 'delay-1');
            if (rules) rules.classList.add('slide-in', 'delay-2');
            if (anonymity) anonymity.classList.add('slide-in', 'delay-3');
            if (disclaimer) disclaimer.classList.add('slide-in', 'delay-4');
        } else {
            const pageCard = mainContent.querySelector('.page-content');
            if (pageCard) {
                pageCard.classList.add('slide-in');
            }
        }

        if (pageToLoad !== 'home' && pageToLoad !== 'contato') {
            if (typeof LightWidget !== 'undefined') {
                LightWidget.init();
            }
        }
    }

    function router() {
        const pageKey = window.location.hash.substring(1) || 'home';
        loadContent(pageKey);
        window.scrollTo(0, 0);
        body.classList.remove('nav-active');
    }

    window.addEventListener('hashchange', router);
    window.addEventListener('load', router);
    
    const navLinks = document.querySelectorAll('.main-nav a[data-page]');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            body.classList.remove('nav-active');
        });
    });
});