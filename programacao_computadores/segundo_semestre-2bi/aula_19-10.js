/*function chefe () {
    bicicleta = []
    
    let resp = prompt(`Informe-nos qual a opção desejada \n [1] adicionar no vetor`)
    switch (resp) {
        case 1: cadastra(bicicleta)
    }
}*/

let vetor = []

//Nova forma de criar uma função
let cadastra = function(vet) {
    var objeto = new Object()
    objeto.codigo = Number(prompt(`Informe-nos o codigo`))
    objeto.aro = Number(prompt(`Informe-nos o Aro`))
    objeto.modelo = prompt(`Informe-nos o modelo`)
    objeto.marca = prompt(`Informe-nos a marca`)
    objeto.valor = Number(prompt(`Informe-nos o valor`))
    objeto.ano = Number(prompt(`Informe o ano`))

    objeto.push(vet)
    console.log(`Bicicleta Inserida com sucesso`)
}

cadastra(vetor)
cadastra(vetor)

// 2
var cod 
let busca = function(vet){
    cod = Number(prompt(`Informe-nos o codigo`))
    let novo = vet.filter(busca2)
    console.log(novo)
}

function busca2(elemento){
    return (elemento.codigo == cod)
}

busca(vetor)

// 3
let soma = function (vet){
    let result = vet.reduce(soma2, 0) // o 0 onde inicia o primeiro valor como 0 e não como um objeto
    console.log(`A soma é ${result}`)

}

function soma2(acumulador, objeto){
    return acumulador + objeto.valor
}

soma(vetor)

//4

let mostra = function (vet) {
    marca = prompt(`Informe-nos a marca`)
    let.novos = vet.filter(mostra2) //retorna os existentes
    console.log(novos)
}

function mostra2(objeto){
    return objeto.marca == marca
}
mostra(vetor)

//5

let mult = function (vet) {
    let res = vet.map(mult2)
    console.log(res)
}

function mult (objeto){
    return objeto.aro = objeto.aro + 3
}

mult(vetor)

//6
var maiorele = vetor[0].ano
let velha = function (vet) {
    vet.forEach(velha2);
    console.log(maior)
}

function velha2 (objeto) {
    if (objeto.ano < maiorele) {
        maiorele = objeto.ano
    }
}

velha(vetor)
/*

CORREÇÃO DANIEL


let vetor = []

// nova forma de criarmos uma função -> variável é uma função
// função para cadastro
let cadastra = function(vet){
    var objeto = new Object()
    objeto.codigo = Number(prompt(`Informe codigo`))
    objeto.aro = Number(prompt(`Informe aro`))
    objeto.modelo = prompt(`Informe modelo`)
    objeto.marca = prompt(`Informe marca`)
    objeto.valor = Number(prompt(`Informe valor`))
    objeto.ano = Number(prompt(`Informe ano `))
    // insere no vetor
    vet.push(objeto)
    console.log(`Bicicleta inserida com sucesso`)
}
cadastra(vetor)
cadastra(vetor)
var codigo
// Busca por uma bicicleta no vetor a partir de um código informado pelo usuário
let busca = function(vet){
    codigo = Number(prompt(`Informe codigo`))
    let novo = vet.filter(busca2) // faz o for
    console.log(novo)
}

function busca2(objeto){
    return (objeto.codigo == codigo)
}

busca(vetor)

// 3.	Calcula a soma dos valores das bicicletas em estoque
let soma = function (vet){
    // inicializa a soma com 0
    let result = vet.reduce(soma2, 0) // executando um for ou while
    console.log(`A soma é ${result}`)
}

// soma2(0, 10)
// soma2(10, 20) -> 30
function soma2(acumulador, objeto){
    return acumulador + objeto.valor
}

soma(vetor)

var marca
// 4.	Mostra todas as bicicletas de uma marca informada pelo usuário
let mostra = function (vet) {
    marca = prompt(`Informe a marca`)
    let novos = vet.filter(mostra2) // retorna os que dão certo
    console.log(novos)
}

function mostra2(objeto){
    	return objeto.marca == marca
}

mostra(vetor)

// 5.	Soma o valor 3 em todas os aros das bicicletas cadastradas

let soma3 = function (vet){
    let novos = vet.map(soma32) // faz o for ou o while
    console.log(novos)
}

function soma32(objeto){
     objeto.aro = objeto.aro + 3
     return objeto
}

soma3(vetor)

// 6.	Mostra a bicicleta mais velha
*/