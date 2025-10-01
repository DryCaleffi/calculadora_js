let ligada = true; 

function togglePower() {
    const calculadora = document.querySelector('.calculadora');
    const visor = document.getElementById('visor');
    const powerButton = document.querySelector('.power-button'); 

    // Inverte o estado
    ligada = !ligada;

    if (ligada) {
        // LIGAR
        calculadora.classList.remove('desligada');
        visor.value = ''; 
        powerButton.textContent = '⏻'; 
        powerButton.style.backgroundColor = '#607d8b'; 
    } else {
        // DESLIGAR
        calculadora.classList.add('desligada');
        visor.value = 'OFF'; 
        powerButton.textContent = 'ON'; 
        powerButton.style.backgroundColor = '#f44336'; 
    }
}
function adicionarValor(valor) {
    const visor = document.getElementById('visor');
    visor.value += valor;
}

function limpar() {
    const visor = document.getElementById('visor');
    visor.value = visor.value.slice(0, -1);
}

function limparTudo() {
    document.getElementById('visor').value = "";
}

function calcular() {
    const visor = document.getElementById('visor');
    try {
        let expressao = visor.value;
        expressao = expressao.replace(/,/g, '.');
        expressao = expressao.replace(/\^/g, '**');
        expressao = expressao.replace(/(\d+)%/g, "($1/100)");

        const resultado = eval(expressao);

        if (expressao && !isNaN(resultado)) {
            adicionarHistorico(expressao + ' = ' + resultado);
        }
        visor.value = resultado;
    } catch {
        visor.value = 'Erro';
    }
}

function adicionarHistorico(item) {
    const lista = document.getElementById('historico-lista');
    const li = document.createElement('li');
    li.textContent = item;
    lista.prepend(li);
}

function toggleHistorico() {
    const container = document.getElementById('historico-container');
    container.classList.toggle("oculto");
}

function limparHistorico() {
    document.getElementById('historico-lista').innerHTML = "";
}
