let listaDeNumeros = [];
let numeroLimite = 11;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

//Cria uma varíavel para guardar o espaço de h1 (titulo)
//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';


//Cria uma variável para guardar o espaço p (paragrafo)
//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';


// basicamente ocorre um 

//logo dá para fazer de outro jeito (já que é considerado uma função)
//para resumir usa a function com parâmetros
function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

exibirMensagemInicial()

// essa é uma function sem parâmetros
function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let plural = tentativas == 1 ? 'tentativa' : 'tentativas';
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${plural}!`;
        exibirTextoNaTela('p', mensagemTentativa);
        console.log(tentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute < numeroSecreto){
            exibirTextoNaTela('p', `O número secreto é maior que ${chute}`);
        } else {
            exibirTextoNaTela('p', `O número secreto é menor que ${chute}!`);
        };
        limparCampo()
        tentativas++;
        
    };
};
//função de gerar o número aleatório que tem retorno 
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosDaLista = listaDeNumeros.length;
    if (quantidadeDeElementosDaLista == numeroLimite) {
        listaDeNumeros = [];
    }
    if (listaDeNumeros.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumeros.push(numeroEscolhido);
        console.log(listaDeNumeros)
        return numeroEscolhido;
    }
};

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function exibirMensagemInicial() {  
    exibirTextoNaTela ('h1', 'Jogo do número secreto');
    exibirTextoNaTela ('p', 'Escolha um número entre 1 e 11');
}

exibirMensagemInicial()