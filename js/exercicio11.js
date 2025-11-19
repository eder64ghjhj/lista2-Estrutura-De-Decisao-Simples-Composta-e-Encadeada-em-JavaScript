// Programa que lê o número de faltas de um aluno e exibe sua situação
const faltas = parseInt(prompt("Digite o número de faltas do aluno:"));

if (faltas > 15) {
    console.log("Reprovado por falta.");
} else {
    console.log("Aprovado.");
}