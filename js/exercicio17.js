const salarioMinimo = parseFloat(prompt("Digite o valor do salário mínimo:"));
const salarioFuncionario = parseFloat(prompt("Digite o salário do funcionário:"));

const salariosMinimos = (salarioFuncionario / salarioMinimo).toFixed(2);

alert(`O funcionário recebe ${salariosMinimos} salários mínimos.`);