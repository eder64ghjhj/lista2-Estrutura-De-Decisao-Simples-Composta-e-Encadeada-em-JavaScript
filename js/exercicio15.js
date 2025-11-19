const nome = prompt("Digite o nome do aluno:");
const nota = parseFloat(prompt("Digite a nota do aluno:"));

if (nota >= 7) {
    alert(`${nome} está aprovado.`);
} else {
    alert(`${nome} está em recuperação.`);
}