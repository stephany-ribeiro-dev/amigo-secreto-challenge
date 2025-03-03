const listaAmigos = [];

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

function adicionarAmigo() {

    const amigo = document.querySelector('input').value;
    console.log(amigo);

    if (amigo === "") {
        alert('Por Favor, insira um nome.');
    } else {
        listaAmigos.push(amigo);
        console.log(listaAmigos);
        limparCampo();
    }
}

function limparCampo() {
    amigo = document.querySelector('input');
    amigo.value = '';
}

