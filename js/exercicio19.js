// Programa que lê a idade de uma pessoa e exibe se ela pode ou não votar
function verificarVoto() {
    const idade = parseInt(prompt("Digite a sua idade:"));

    if (idade < 0) {
        alert("Idade inválida.");
    } else if (idade >= 18 && idade <= 70) {
        alert("Você é obrigado a votar.");
    } else if (idade >= 16 && idade < 18 || idade > 70) {
        alert("O voto é facultativo.");
    } else {
        alert("Você não pode votar.");
    }
}

verificarVoto();