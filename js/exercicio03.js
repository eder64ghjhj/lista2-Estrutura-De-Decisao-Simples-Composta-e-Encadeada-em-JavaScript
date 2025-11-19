// Programa que verifica se um número é positivo, negativo ou zero

function verificarNumero() {
    const numero = parseFloat(prompt("Digite um número:"));

    if (numero > 0) {
        alert("O número é positivo.");
    } else if (numero < 0) {
        alert("O número é negativo.");
    } else {
        alert("O número é zero.");
    }
}

verificarNumero();