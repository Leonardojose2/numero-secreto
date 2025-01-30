// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim(); // Remove espaços em branco

    // Validação: Verifica se o campo está vazio
    if (nome === "") {
        alert("Por favor, digite um nome válido.");
        return;
    }

    // Verifica se o nome já está na lista
    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }

    // Adiciona o nome à lista de amigos
    amigos.push(nome);
    atualizarLista(); // Atualiza a lista exibida
    input.value = ""; // Limpa o campo de entrada
}

// Função para atualizar a lista de amigos exibida na página
function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Limpa a lista atual

    // Adiciona cada amigo à lista exibida
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    // Validação: Verifica se há pelo menos dois amigos na lista
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear.");
        return;
    }

    // Sorteia um amigo aleatoriamente
    const indexSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indexSorteado];

    // Exibe o resultado do sorteio
    mostrarResultado(amigoSorteado);
}

// Função para mostrar o resultado do sorteio na página
function mostrarResultado(amigoSorteado) {
    const resultadoList = document.getElementById('resultado');
    resultadoList.innerHTML = ""; // Limpa resultados anteriores

    const li = document.createElement('li');
    li.textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;
    resultadoList.appendChild(li);
}