

function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let deNumero = parseInt(document.getElementById('de').value);
    let ateNumero = parseInt(document.getElementById('ate').value);

// Protecao contra bug de loop infinito
    if(ateNumero <= deNumero) {
        alert('O valor do campo "Do número" não pode ser MAIOR que o valor do campo "Até o número".');
        return;
    }
    if(quantidade > (ateNumero - deNumero) + 1) {
        alert('A quantidade de números a serem sorteados não pode ser maior do que a quantidade de números contidos no intervalo a ser sorteado.');
        return;
    }
//--------------------------------------------------------

    let numerosSorteados = [];
    let numeroAleatorio;

    for(i = 0; i < quantidade; i++) {
        numeroAleatorio = gerarNumeroAleatorio(ateNumero, deNumero);
        
        while(numerosSorteados.includes(numeroAleatorio)) {
            numeroAleatorio = gerarNumeroAleatorio(ateNumero, deNumero);
        }
        numerosSorteados.push(numeroAleatorio);
    }
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numerosSorteados}</label>`;
    trocarBotao();
}

function gerarNumeroAleatorio(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function trocarBotao() {
    let botaoReiniciar = document.getElementById('btn-reiniciar');

    if(botaoReiniciar.classList.contains('container__botao-desabilitado')) {
        botaoReiniciar.classList.remove('container__botao-desabilitado');
        botaoReiniciar.classList.add('container__botao');
    }else {
        botaoReiniciar.classList.remove('container__botao');
        botaoReiniciar.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    trocarBotao();
}
