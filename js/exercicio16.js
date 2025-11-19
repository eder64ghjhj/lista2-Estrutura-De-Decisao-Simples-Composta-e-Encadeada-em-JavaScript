const quantidadeMacas = parseInt(prompt("Digite o número de maçãs compradas:"));
let precoPorMaca;

if (quantidadeMacas < 12) {
    precoPorMaca = 0.50;
} else {
    precoPorMaca = 0.40;
}

const valorTotal = quantidadeMacas * precoPorMaca;
alert(`O valor total a ser pago é R$ ${valorTotal.toFixed(2)}`);