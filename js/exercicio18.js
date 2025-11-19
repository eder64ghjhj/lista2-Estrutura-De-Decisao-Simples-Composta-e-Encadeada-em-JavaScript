const turno = prompt("Digite o turno (M para Matutino ou V para Vespertino):").toUpperCase();

if (turno === "M") {
    alert("Bom dia, aluno!");
} else if (turno === "V") {
    alert("Boa tarde, aluno!");
} else {
    alert("Turno inválido. Por favor, digite 'M' ou 'V'.");
}