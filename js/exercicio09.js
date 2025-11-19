const meses = {
    janeiro: 31,
    fevereiro: 28, // Considerando anos não bissextos
    março: 31,
    abril: 30,
    maio: 31,
    junho: 30,
    julho: 31,
    agosto: 31,
    setembro: 30,
    outubro: 31,
    novembro: 30,
    dezembro: 31
};

function obterDiasDoMes() {
    const nomeMes = prompt("Digite o nome de um mês:").toLowerCase();
    
    if (meses[nomeMes] !== undefined) {
        alert(`O mês de ${nomeMes.charAt(0).toUpperCase() + nomeMes.slice(1)} possui ${meses[nomeMes]} dias.`);
    } else {
        alert("Mês inválido. Por favor, digite um mês válido.");
    }
}

obterDiasDoMes();