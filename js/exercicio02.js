const nome1 = prompt("Digite o nome da primeira pessoa:");
const idade1 = parseInt(prompt("Digite a idade da primeira pessoa:"));

const nome2 = prompt("Digite o nome da segunda pessoa:");
const idade2 = parseInt(prompt("Digite a idade da segunda pessoa:"));

if (idade1 > idade2) {
    alert(`${nome1} é mais velho(a) que ${nome2}.`);
} else if (idade2 > idade1) {
    alert(`${nome2} é mais velho(a) que ${nome1}.`);
} else {
    alert(`${nome1} e ${nome2} têm a mesma idade.`);
}