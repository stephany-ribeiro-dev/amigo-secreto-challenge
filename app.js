const listaAmigos = [];

function adicionarAmigo() {

    const amigo = document.querySelector('input').value;
    console.log(amigo);

    if (amigo === "") {
        alert('Por Favor, insira um nome.');
        return;
    } else if (listaAmigos.includes(amigo)) {
        alert('Este amigo já foi adicionado.');
        limparCampo();
        return;
    } else {
        listaAmigos.push(amigo);
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

function sortearAmigo() {

    if (listaAmigos.length === 0) {
        alert('Adicione amigos antes de sortear.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceAleatorio];

    document.getElementById('resultado').innerHTML = `<p>Amigo sorteado: ${amigoSorteado}</p>`;
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
