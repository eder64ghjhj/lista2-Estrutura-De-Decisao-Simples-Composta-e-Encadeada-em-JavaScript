// Lê o código de um produto e a quantidade comprada, e exibe o valor total a ser pago.
const produtos = {
    1: 10.00, // Produto 1
    2: 20.00, // Produto 2
    3: 30.00  // Produto 3
};

const codigoProduto = parseInt(prompt("Digite o código do produto (1, 2 ou 3):"));
const quantidade = parseInt(prompt("Digite a quantidade comprada:"));

if (produtos[codigoProduto]) {
    const valorTotal = produtos[codigoProduto] * quantidade;
    alert(`O valor total a ser pago é R$ ${valorTotal.toFixed(2)}`);
} else {
    alert("Código de produto inválido.");
}