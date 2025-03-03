const listaAmigos = [];

function adicionarAmigo() {

    const amigo = document.querySelector('input').value;
    console.log(amigo);

    if (amigo === "") {
        alert('Por Favor, insira um nome.');
    } else {
        listaAmigos.push(amigo);
        console.log(listaAmigos);
        exibirAmigos();
        limparCampo();
    }
}

function exibirAmigos() {

    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < listaAmigos.length; i++) {

        const amigo = listaAmigos[i];
        const itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        lista.appendChild(itemLista);
    }
}

function limparCampo() {

    amigo = document.querySelector('input');
    amigo.value = '';
}

function exibirTexto(tag, texto) {

    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 });
}

function textoInicial() {

    exibirTexto('h1', 'Amigo Secreto');
    exibirTexto('h2', 'Digite o nome dos seus amigos');
}
textoInicial();
