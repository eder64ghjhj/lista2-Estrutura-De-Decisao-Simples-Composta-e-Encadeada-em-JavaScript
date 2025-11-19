// Programa que lê dois números inteiros e exibe o maior deles
const numero1 = parseInt(prompt("Digite o primeiro número:"));
const numero2 = parseInt(prompt("Digite o segundo número:"));

if (numero1 > numero2) {
    alert("O maior número é: " + numero1);
} else if (numero2 > numero1) {
    alert("O maior número é: " + numero2);
} else {
    alert("Os números são iguais.");
}