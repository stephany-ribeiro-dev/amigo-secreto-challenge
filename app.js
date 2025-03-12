const listaAmigos = [];

function adicionarAmigo() {

    const amigo = document.getElementById('amigo').value;

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
        const itemDiv = document.createElement('div');
        lista.appendChild(itemDiv);

        const itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        itemDiv.appendChild(itemLista);

        const buttonEdit = document.createElement('button');
        buttonEdit.textContent = 'editar';
        buttonEdit.className = 'button-edit';
        buttonEdit.addEventListener("click", () => editarAmigo(i));
        itemDiv.appendChild(buttonEdit);
    }
}

function editarAmigo(input) { 
	const novoNome = prompt('Digite o novo nome do amigo:'); 
    	
    if ( novoNome.trim() === ""){

        alert('Insira um novo nome valido');
    } else { 

        listaAmigos[input] = novoNome; 
		exibirAmigos(); 
    }
} 

function deletarAmigo(input) {
    
    listaAmigos.splice(input, 1);
    exibirAmigos();
    console.log(listaAmigos)
}


function sortearAmigo() {

    if (listaAmigos.length === 0) {
        alert('Adicione amigos antes de sortear.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceAleatorio];

    document.getElementById('resultado').innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`;
}

function limparCampo() {
    amigo = document.getElementById('amigo');
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
