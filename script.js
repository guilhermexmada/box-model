 //div box-model
    const box = document.getElementById('box');
    //inputs de range
    const conteudo = document.getElementById('input_conteudo');
    const interno = document.getElementById('input_interno');
    const borda = document.getElementById('input_borda');
    const margem = document.getElementById('input_margem');
    //mensagem com explicação
    const mes = document.getElementById('message');
    const mes_title = document.getElementById('mes_title');
    const mes_text = document.getElementById('mes_text');
    const mes_close = document.getElementById('mes_close');
    //labels
    const lbc = document.getElementById('lb_conteudo');
    const lbi = document.getElementById('lb_interno');
    const lbb = document.getElementById('lb_borda');
    const lbm = document.getElementById('lb_margem');
    //valores iniciais dos labels
    lbc.innerHTML = conteudo.value + "px";
    lbi.innerHTML = interno.value + "px";
    lbb.innerHTML = borda.value + "px";
    lbm.innerHTML = margem.value + "px";
    //container do box-model
    const container = document.getElementById('container');
    const container_control = document.getElementById('box-control');
    //botão de expandir e reduzir tela
    const btn_fullscreen = document.getElementById('btn_fullscreen');
    //variavel para verificar tela cheia
    let is_fullscreen = false;

    //redimensiona box-model
    function model() {
        box.style.width = conteudo.value + "px";
        box.style.height = conteudo.value + "px";
        box.style.padding = interno.value + "px";
        box.style.borderWidth = borda.value + "px";
        box.style.margin = margem.value + "px";
        box.style.transition = "all 1s ease-in";
        //atualizando valores nos labels
        lbc.innerHTML = conteudo.value + "px";
        lbi.innerHTML = interno.value + "px";
        lbb.innerHTML = borda.value + "px";
        lbm.innerHTML = margem.value + "px"; 
    };

    //mostra mensagem de explicação
    function showExplanation(prop) {
        mes.style.display = "flex";
        switch (prop) {
            case 1:
                mes_title.innerHTML = "Content";
                mes_text.innerHTML = "<p>Parte do elemento HTML que guarda o conteúdo visível, como textos e imagens. Você pode alterar as dimensões do content usando as propriedades <strong>width</strong> e <strong>height</strong> no CSS. A cor de fundo pode ser personalizada.</p>";
                break;
            case 2:
                mes_title.innerHTML = "Padding";
                mes_text.innerHTML = "<p>Espaço interno entre o conteúdo e as bordas do elemento HTML. Aumenta a distância até o limite do elemento. O padding é transparente.</p>";
                break;
            case 3:
                mes_title.innerHTML = "Border";
                mes_text.innerHTML = "<p>Define as bordas do elemento HTML, ou seja, o limite do elemento. A cor de fundo pode ser personalizada, bem como seu estilo: sólido, pontilhado, tracejado, entre outros.</p>";
                break;
            case 4:
                mes_title.innerHTML = "Margin";
                mes_text.innerHTML = "<p>Define o espaço externo do elemento HTML, ou seja, a distância dos outros elementos. A margin é transparente.</p>";
                break;
            default:
                break;
        }
    }
    //fecha mensagem de explicação
    function closeExplanation() {
        mes.style.display = "none";
    }

    //abre e fecha tela cheia
    function fullscreen() {
        if (is_fullscreen == false) {
            container.style.position = "absolute";
            container.style.width = "100%";
            container.style.height = "100%";
            btn_fullscreen.innerHTML = "<ion-icon name='close-outline'></ion-icon>";
            
            is_fullscreen = true;
        }
        else if (is_fullscreen == true) {
            container.style.position = "relative";
            container.style.width = "800px";
            container.style.height = "500px";
            btn_fullscreen.innerHTML = "<ion-icon name='expand-outline'></ion-icon>";
            is_fullscreen = false;
        }
    }