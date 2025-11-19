const salario = parseFloat(prompt("Digite o salário do funcionário:"));

let bonus;

if (salario > 2000) {
    bonus = salario * 0.10;
} else {
    bonus = salario * 0.05;
}

alert(`O valor do bônus é: R$ ${bonus.toFixed(2)}`);