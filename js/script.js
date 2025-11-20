const butao01 = document.querySelector("#exer01")
const butao02 = document.querySelector("#exer02")
const butao03 = document.querySelector("#exer03")
const butao04 = document.querySelector("#exer04")
const butao05 = document.querySelector("#exer05")
const butao06 = document.querySelector("#exer06")
const butao07 = document.querySelector("#exer07")
const butao08 = document.querySelector("#exer08")
const butao09 = document.querySelector("#exer09")
const butao10 = document.querySelector("#exer10")
const butao11 = document.querySelector("#exer11")
const butao12 = document.querySelector("#exer12")
const butao13 = document.querySelector("#exer13")
const butao14 = document.querySelector("#exer14")
const butao15 = document.querySelector("#exer15")
const butao16 = document.querySelector("#exer16")
const butao17 = document.querySelector("#exer17")
const butao18 = document.querySelector("#exer18")
const butao19 = document.querySelector("#exer19")
const butao20 = document.querySelector("#exer20")
const res = document.querySelector('.res')

function limparDiv() {
    res.innerHTML = " "
}

function exercicio01() {
    limparDiv()
    /* Escreva um programa que leia a idade de uma pessoa e exiba uma mensagem dizendo se ela é maior de idade ou menor de idade. */

    let idade = parseInt(prompt("Digite sua idade"))
    let mensagem = (idade < 18) ? "Menor de idade" : "Maior de idade"

    res.innerHTML = mensagem

}

butao01.addEventListener('click', exercicio01)

function exercicio02() {
    limparDiv()
    /* Faça um programa que leia o nome e a idade de duas pessoas e exiba uma mensagem indicando quem é a pessoa mais velha. */

    let nome01 = prompt("Digite o primeiro nome: ")
    let idade01 = parseInt(prompt("Digte a primeira idade: "))
    let nome02 = prompt("Digite o segundo nome: ")
    let idade02 = parseInt(prompt("Digte a segunda idade: "))

    let mensagem = (idade01 > idade02) ? `nome ${nome01}, idade ${idade01} é a mais velha.` : ` nome ${nome02}, idade ${idade02} é a mais velha.`

    res.innerHTML = mensagem
}

butao02.addEventListener('click', exercicio02)

butao03.addEventListener('click', () => {

    limparDiv()

    /* Faça um programa que verifique se um número é positivo, negativo ou zero. */

    let numero = parseInt(prompt("Digite um número: "))

    if (numero > 0) {
        res.innerHTML = ("Número positivo")
    }

    else if (numero == 0) {
        res.innerHTML = ("Número 0")
    }

    else {
        res.innerHTML = ("Número negativo")
    }

})

butao04.addEventListener('click', () => {

    limparDiv()

    /*  Escreva um programa que leia a idade de uma pessoa e exiba uma mensagem indicando se ela é criança, adolescente, adulto ou idoso. (Pesquisar uma tabela) */

    let idade = parseInt(prompt("Digite sua idade: "))

    if (idade < 12) {
        res.innerHTML = ("Criança")
    }

    else if (idade < 18) {
        res.innerHTML = ("Adolescente")
    }

    else if (idade < 60) {
        res.innerHTML = ("Adulto")
    }

    else {
        res.innerHTML = ("Idoso")
    }


})

butao05.addEventListener('click', () => {

    limparDiv()

    /* Crie um programa que leia dois números inteiros e exiba o maior deles. */

    let numero01 = Number(prompt("Digite o primeiro número: "))
    let numero02 = Number(prompt("Digite o segundo número: "))

    if (numero01 > numero02) {
        res.innerHTML = (`${numero01}, ${numero02}`)
    }

    else {
        res.innerHTML = (`${numero02}, ${numero01}`)
    }
})

butao06.addEventListener('click', () => {

    limparDiv()

    /* Faça um programa que receba três notas de um aluno e exiba se ele foi aprovado ou reprovado. A média para aprovação é 7. */

    let nota01 = Number(prompt("Digite a primeira nota :"))
    let nota02 = Number(prompt("Digite a segunda nota :"))
    let nota03 = Number(prompt("Digite a terceira nota :"))

    let soma = nota01 + nota02 + nota03

    let media = soma / 3

    if (media >= 7) {
        res.innerHTML = (`Aprovado sua média é ${media}`)
    }

    else {
        res.innerHTML = (`Reprovado sua média é ${media}`)
    }



})

butao07.addEventListener('click', () => {

    limparDiv()

    /* Escreva um programa que leia um número inteiro e exiba se ele é par ou ímpar. */

    let numero = parseInt(prompt("Digite seu número: "))

    if (numero % 2 == 0) {
        res.innerHTML = ("Número par.")
    }

    else {
        res.innerHTML = ("Número ímpar")
    }
})

butao08.addEventListener('click', () => {
    /* Faça um programa que receba o salário de um funcionário e exiba o valor do seu bônus. Se o salário for maior que R$ 2000, o bônus é de 10%, caso contrário, é de 5%. */

    let salario = parseFloat(prompt("Digite o valor do seu salário: "))
    let bonus = 0
    let porcentagemBonus = 0

    if (salario < 2000) {
        porcentagemBonus = 5 / 100
    }

    else {
        porcentagemBonus = 10 / 100
    }

    bonus = salario * porcentagemBonus

    res.innerHTML = (`Seu salário é de ${salario} e seu bonus é de ${bonus}`)
})

butao09.addEventListener('click', () => {

    limparDiv()

    /* Escreva um programa que leia o nome de um mês e exiba a quantidade de dias que ele possui. Considere apenas meses válidos. */

    let nomeMes = prompt("Digite o nome do mês: ")
    let nomeMesGrande = nomeMes.toUpperCase()

    if (nomeMesGrande == "JANEIRO" || nomeMesGrande == "MARÇO" || nomeMesGrande == "MAIO" || nomeMesGrande == "JULHO" || nomeMesGrande == "AGOSTO" || nomeMesGrande == "OUTUBRO" || nomeMesGrande == "DEZEMBRO") {
        res.innerHTML = (`Mês ${nomeMes} e tem 31 Dias.`)
    }

    else if (nomeMesGrande == "ABRIL" || nomeMesGrande == "JUNHO" || nomeMesGrande == "SETEMBRO" || nomeMesGrande == "NOVEMBRO") {
        res.innerHTML = (`Mês ${nomeMes} e tem 30 Dias.`)
    }

    else if (nomeMesGrande == "FEVEREIRO") {
        res.innerHTML = (`Mês ${nomeMes} e tem 28 ou 29 Dias.`)
    }

    else {
        res.innerHTML = ("Mês digitado inválido.")
    }
})

butao10.addEventListener('click', () => {

    limparDiv()
    /*Crie um programa que leia três números inteiros e exiba-os em ordem crescente. */

    let numero01 = parseInt(prompt("Digite o primeiro número: "))
    let numero02 = parseInt(prompt("Digite o segundo número: "))
    let numero03 = parseInt(prompt("Digite o terceiro número: "))

    if (numero01 < numero02 && numero01 < numero03) {

        if (numero02 < numero03) {
            res.innerHTML = (`${numero01}, ${numero02}, ${numero03}`)
        }

        else {
            res.innerHTML = (`${numero01}, ${numero03}, ${numero02}`)
        }
    }

    else if (numero02 < numero01 && numero02 < numero03) {

        if (numero01 < numero03) {

            res.innerHTML = (`${numero02}, ${numero01}, ${numero03}`)
        }

        else {
            res.innerHTML = (`${numero02}, ${numero03}, ${numero01}`)
        }
    }

    else {

        if (numero01 < numero02) {
            res.innerHTML = (`${numero03}, ${numero01}, ${numero02}`)
        }

        else {
            res.innerHTML = (`${numero03}, ${numero02}, ${numero01}`)
        }
    }

})

butao11.addEventListener('click', () => {

    limparDiv()

    /* Faça um programa que leia o número de faltas de um aluno em uma disciplina e exiba sua situação. Se o número de faltas for maior que 15, ele é reprovado por falta. */

    let totalFaltas = parseInt(prompt("Digite a quantidade de falta de um aluno: "))

    if (totalFaltas > 15) {
        res.innerHTML = ("Reprovado")
    }

    else {
        res.innerHTML = ("Aprovado")
    }
})

butao12.addEventListener('click', () => {

    limparDiv()

    /* Escreva um programa que leia o código de um produto e a quantidade comprada, e exiba o valor total a ser pago. Considere que cada produto tem um preço diferente. */

    res.innerHTML = ("Codigo da maça é 123456 e o preço da unidade é R$2,00")
    res.innerHTML = ("Codigo da melancia é 1234567 e o preço da unidade é R$4,00")

    let codigoProduto = parseInt(prompt("Digite o código do produto: "))
    let quantidadeComprada = parseInt(prompt("Digite a quantidade que deseja: "))

    let preco = 0

    if (codigoProduto == 123456) {
        preco = 2
        res.innerHTML = (`Você comprou ${quantidadeComprada} maças é deu ${preco * quantidadeComprada}`)
    }

    else if (codigoProduto == 1234567) {
        preco = 4
        res.innerHTML = (`Você comprou ${quantidadeComprada} melancias é deu ${preco * quantidadeComprada}`)
    }

    else {
        res.innerHTML = ("Codigo inválido.")
    }

})

butao13.addEventListener('click', () => {

    limparDiv()

    /* Crie um programa que leia a idade de uma pessoa e seu sexo (M ou F) e exiba uma mensagem indicando se ela pode ou não se aposentar. Homens podem se aposentar com 65 anos ou mais, e mulheres com 60 anos ou mais.
 */

    let idade = parseInt(prompt("Digite sua idade: "))
    let sexo = prompt("Digite seu sexo (M/F): ")
    let sexoGrande = sexo.toUpperCase()

    if (idade >= 65 && sexoGrande == "M") {
        res.innerHTML = ("Pode se aposentar")
    }

    else if (idade >= 60 && sexoGrande == "F") {
        res.innerHTML = ("Pode se aposentar")
    }

    else {
        res.innerHTML = ("Não pode se aposentar")
    }

})

butao14.addEventListener('click', () => {

    limparDiv()

    /* Faça um programa que leia o peso e a altura de uma pessoa e exiba o seu Índice de Massa Corporal (IMC) e a sua classificação. Considere a tabela de classificação do IMC. */

    let peso = parseFloat(prompt("Digite seu peso: "))
    let altura = parseFloat(prompt("Digite sua altura: "))

    let imc = peso / (altura * altura)

    alert(`Seu IMC é de ${imc.toFixed(2)}`)

})

butao15.addEventListener('click', () => {
    /* Escreva um programa que leia o nome e a nota de um aluno e exiba sua situação na disciplina. Se a nota for maior ou igual a 7, o aluno está aprovado. Caso contrário, está em recuperação. */

    let nomeAluno = prompt("DIgite seu nome: ")
    let notaAluno = parseFloat(prompt("Digite sua nota: "))

    if (notaAluno >= 7) {
        alert(`Aluno ${nomeAluno} esta aprovado.`)
    }

    else {
        alert(`Aluno ${nomeAluno} esta reprovado.`)
    }

})

butao16.addEventListener('click', () => {
    /* Crie um programa que leia o número de maçãs compradas e exiba o valor total a ser pago. O preço das maçãs é de R$ 0,50 cada se a quantidade for menor que 12 e R$ 0,40 cada se a quantidade for igual ou maior que 12. */

    let quantidadeMacas = prompt("Digite a quantidade de maçãs que comprou: ")
    let precoMacas = 0

    if (quantidadeMacas < 12) {
        precoMacas = 0.50
    }

    else {
        precoMacas = 0.40
    }

    let precoTotal = quantidadeMacas * precoMacas

    alert(`O valor de ${quantidadeMacas} maçãs e de ${precoTotal.toFixed(2)}`)

})

butao17.addEventListener('click', () => {
    /*Faça um programa que leia o valor do salário mínimo e o salário de um funcionário, e exiba quantos salários mínimos ele recebe.*/

    let salarioMinimo = parseFloat(prompt("Digite o valor do salário minímo: "))
    let salarioAtual = parseFloat(prompt("Digite seu salário atual: "))

    let quantidadeSalarioMinimo = salarioAtual / salarioMinimo

    alert(`Salário mínimo é ${salarioMinimo}, seu salário atual é ${salarioAtual} e você recebe ${quantidadeSalarioMinimo} salários mínimos.`)
})

butao18.addEventListener('click', () => {
    /*Crie um programa que leia o nome e o turno (M ou V) de um aluno e exiba uma mensagem de saudação de acordo com o turno. Matutino: "Bom dia, aluno", Vespertino: "Boa tarde, aluno".*/

    let nomeAluno = prompt("Digite seu nome: ")
    let turno = prompt("Digite o seu turno: ")

    let turnoGrande = turno.toLocaleUpperCase()

    if (turnoGrande == "M" || turnoGrande == "MATUTINO") {
        alert(`Bom dia ${nomeAluno}`)
    }

    else if (turnoGrande == "V" || turnoGrande == "VESPERTINO") {
        alert(`Boa Tarde ${nomeAluno}`)
    }

    else {
        alert("Ocorreu um erro.")
    }

})

butao19.addEventListener('click', () => {
    /* Faça um programa que leia a idade de uma pessoa e exiba se ela pode ou não votar. O voto é obrigatório para pessoas entre 18 e 70 anos, e facultativo para pessoas entre 16 e 18 anos e com mais de 70 anos. */

    let idade = parseInt(prompt("Digite sua idade: "))

    if (idade < 16) {
        alert("Não pode votar.")
    }

    else if (idade < 18 || idade > 70) {
        alert("Opcional votar.")
    }

    else {
        alert("Obrigatório votar.")
    }

})

butao20.addEventListener('click', () => {
    /*Escreva um programa que leia três números inteiros e exiba a média aritmética. Se a média for maior ou igual a 7, exiba a mensagem "Aprovado", caso contrário, exiba a mensagem "Reprovado".*/

    let numero01 = parseInt(prompt("Digite o primeiro valor: "))
    let numero02 = parseInt(prompt("Digite o segundo valor: "))
    let numero03 = parseInt(prompt("Digite o terceiro valor: "))

    let media = (numero01 + numero02 + numero03) / 3

    if (media >= 7) {
        alert(`Aprovado`)
    }

    else{
        alert("Reprovado")
    }


})