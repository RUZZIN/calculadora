// Função para inserir um número ou operador no visor da calculadora
function insert(num) {
    var numero = document.getElementById('resultado').innerHTML; // Obtém o conteúdo atual do visor
    document.getElementById('resultado').innerHTML = numero + num; // Concatena o número ou operador ao conteúdo existente
}

// Função para limpar o visor da calculadora
function clean() {
    document.getElementById('resultado').innerHTML = ''; // Define o conteúdo do visor como vazio
}

// Função para apagar o último caractere no visor da calculadora
function back() {
    var resultado = document.getElementById('resultado').innerHTML; // Obtém o conteúdo atual do visor
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1); // Remove o último caractere
}

// Função para calcular e exibir o resultado da expressão no visor da calculadora
function calcular() {
    var resultado = document.getElementById('resultado').innerHTML; // Obtém o conteúdo atual do visor

    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado); // Calcula e exibe o resultado da expressão usando a função eval
    } else {
        document.getElementById('resultado').innerHTML = 'ERRO!'; // Exibe 'ERRO!' se não houver expressão no visor
    }
}
