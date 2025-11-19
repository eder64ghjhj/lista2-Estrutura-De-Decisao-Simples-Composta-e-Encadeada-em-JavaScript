// Programa que recebe três notas de um aluno e exibe se ele foi aprovado ou reprovado. A média para aprovação é 7.

function verificarAprovacao() {
    const nota1 = parseFloat(prompt("Digite a primeira nota:"));
    const nota2 = parseFloat(prompt("Digite a segunda nota:"));
    const nota3 = parseFloat(prompt("Digite a terceira nota:"));
    
    const media = (nota1 + nota2 + nota3) / 3;
    
    if (media >= 7) {
        alert("Aprovado! Média: " + media.toFixed(2));
    } else {
        alert("Reprovado! Média: " + media.toFixed(2));
    }
}

verificarAprovacao();