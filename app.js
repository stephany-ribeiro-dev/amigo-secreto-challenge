const listaAmigos = [];

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

