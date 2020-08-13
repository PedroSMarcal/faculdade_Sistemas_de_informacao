// aula dia 03-08-2020
function rev (){
    //criar vetor
var byke = []
do {
    //cria uma bike
    var bike = new Object()
    bike.modelo = prompt("indique o modelo")
    bike.marca = prompt("indique o marca")
    bike.aro = Number(prompt("indique o aro"))
    bike.roda = Number(prompt("indique o roda"))
    var data = prompt("indique a data de fabricacao").split('/')
    bike.fabricacao = new Date(data[2], data[1] -1, data[0])
    //insere no veotr
    byke.push(bike)
    
    //quer continuar 
    var resp = prompt(`Quer cadastrar uma nova bike? (S/N)`)
}
while (reposta != "N")
//calcula a soma de todos os aros 
var soma = Number(0)
for (var i = Number(0); i < byke.lenght; i++){
    soma = soma + byke[i].aro
}
// calcula a maior roda e qual a marca
var maioroda = byke[0].roda
var maiormarca = byke[0].marca
for (var i = Number(0); i < byke.lenght; i++){
    if (byke[i].roda > maioroda){
        maioroda = byke[i].roda
        maiormarca = byke[i].marca
    }
}
//calcular as bykes que tem intervalo de data
var dataIni = prompt("indique a data inicial da bike").split("/")
var dataFim = prompt("indique a data final da bike").split("/")
//datas já convertidas
var ini = new Date(dataIni[2], dataIni[1] -1, dataIni[0])
var fim = new Date(dataFim[2], dataFim[1] -1, dataFim[0]) 

for (var i = Number(0); i < byke.lenght; i++){
    if (byke[i].fabricacao >= ini && byke[i].fabricacao <= fim){
        console.log(byke[i].fabricacao)
    }
}

console.log(`a soma dos aros é ${soma}`)    
}
// aula dia 04-08-2020
function principal(){
    var n1 = Number(prompt(`Informe o primeiro número`))
    var n2 = Number(prompt(`Informe o segundo número`))
    var result = soma(n1 , n2)
    console.log(resp)
}
function soma(){
    return x + y
}
// aula dia 10-08-2020
function principal() {
    // entrada de dados 
    //solicita o primeiro número
    var n1 = (Number(prompt(`Informe o primeiro numero`)))
    var n2 = (Number(prompt(`Informe o primeiro numero`)))
    var operador = prompt(`+ mais, * vezes, - menos, / dividir`)

    if ((n1 != "") || (n2 != "")){
    var resultado = calculadora(n1, n2, operador)
    console.log(`O resultado da operação é ${resultado}`)}
    else {
        console.log("Insira algum valor")
    }
}
function calculadora(n1, n2, operador){
    switch(operador){
        case '+': return n1 + n2
        case '-': return n1 - n2
        case '*': return n1 * n2
        case '/': if (n2 == 0){
            return "não pode dividir por zero"
        }
        else {
            return n1 / n2
        }
        default: return "use um operador válido"
    }
}
//////////////////////////////////////////////////////////////////
function alteraVetor(vetor){
    vetor[0] = vetor[0] + 20
    vetor[1] = vetor[1] + 20
}

var exemploVet = [1,2]
var exemploVet2 = [7, 8]
alteraVetor(exemploVet)
console.log(exemploVet)
alteraVetor(exemploVet2)
console.log(exemploVet2)
////////////////////////////////////////////////////////////////////
function principal2 () {
    var vet = []
    entrada(vet)
    soma(vet)
    Mostrapares(vet)
}
function entrada(){
    for (var i= 0; i < 5; i++){
        vet.push(Number(prompt(`Informe o numero`)))
    }
}
function soma (){
    for (var i= 0; i < 5; i++){
       var soma = soma + vet[i]
    }   
    console.log(soma)
}
function Mostrapares (){
    for (var i= 0; i < 5; i++){
        if (vet[i] % 2 == 0){
            console.log(vet[i])
        }
    }
}
////////////////////////////////////////////////////////////////////////
/*aula dia 11/08*/
//------------------- aula de escopo ------------------\\
//se n for 3: soma 1 + 2 + 3 - > 6
//Faça um número inteiro e positivo N como parãmetro e retorne a soma dos números inteiros exiistentes entre os números 1 e esse número  
/*var de escopo local*/
function exe1(n){
    var soma = Number(0)
    for (var i = Number(0); i <= n; i++){
        soma = soma + 1
    }
    return soma
}

function principal (){
    var numero = Number(prompt(`Indique um número`))
    var restultado = exe1 (numero)
    console.log(`A soma dos números é ${restultado}`)
} 

principal()
/*var de escopo local*/
/////////////////////////////////////////////////////////////////////////////

/*variaveis com escopo global*/
//podem ter escopo global vetores de objetos
/* vetor tem escopo global*/
function chefe(){
    var vetor = []
    entrada(vetor)
    soma10(vetor)
    console.log(vetor)
}
function entrada(vet){
        vet.push(Number(8))
        vet.push(Number(6))
        vet.push(Number(6))
    } 
function soma10(vet){
    for (var i = Number(0); i < vet.length; i++){
        vet[i] = vet[i] + 10
    }
    return vet
}
chefe()

//////////////////////////////////////////////////////////////////////////////////
/* mostrar que objetos é de escopo global*/
function principal2 (){
    var carro = new Object()
    compra(carro)
}
function compra(obj){
    obj.modelo = "Renegade"
    obj.marca = "Jeep"
    obj.ano = "2019"
}
principal2()
/////////////////////////////////////////////////////////////////////////////////////////
/**/ 