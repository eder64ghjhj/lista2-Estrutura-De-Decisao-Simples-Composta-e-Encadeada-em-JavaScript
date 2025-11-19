// Programa que lê a idade de uma pessoa e exibe uma mensagem indicando se ela é criança, adolescente, adulto ou idoso.

function classificarIdade(idade) {
    if (idade < 12) {
        return "Criança";
    } else if (idade < 18) {
        return "Adolescente";
    } else if (idade < 60) {
        return "Adulto";
    } else {
        return "Idoso";
    }
}

const idade = parseInt(prompt("Digite a sua idade:"));
const classificacao = classificarIdade(idade);
alert("Você é: " + classificacao);