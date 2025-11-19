// Lê três números inteiros do usuário
const num1 = parseInt(prompt("Digite o primeiro número:"));
const num2 = parseInt(prompt("Digite o segundo número:"));
const num3 = parseInt(prompt("Digite o terceiro número:"));

// Calcula a média aritmética
const media = (num1 + num2 + num3) / 3;

// Exibe a média e a situação do aluno
if (media >= 7) {
    alert("Média: " + media + " - Aprovado");
} else {
    alert("Média: " + media + " - Reprovado");
}