const idade = parseInt(prompt("Digite sua idade:"));
const sexo = prompt("Digite seu sexo (M ou F):").toUpperCase();

if (sexo === 'M') {
    if (idade >= 65) {
        alert("Você pode se aposentar.");
    } else {
        alert("Você não pode se aposentar.");
    }
} else if (sexo === 'F') {
    if (idade >= 60) {
        alert("Você pode se aposentar.");
    } else {
        alert("Você não pode se aposentar.");
    }
} else {
    alert("Sexo inválido. Por favor, digite 'M' ou 'F'.");
}