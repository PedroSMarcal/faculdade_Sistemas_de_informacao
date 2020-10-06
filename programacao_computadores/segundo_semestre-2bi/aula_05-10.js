/*ECMASCRIPT 5*/
/*
EcmaScript = especificação do JS
ES = EcmaScript
JS surgiu so ecmascript
ES 5 = surgiu em 2009
ES 6 = surgiu em 2015

Explorar o JS no ES5 e 6

*/
var vetor = [1, 2, 3, 4, 5]
for (let i = Number(0); i < 5; i++){
    console.log(vetor[i])
}

chefe()

function chefe(){
    let vetor= [2, 4, 6, 8, 10]
    vetor.forEach(opera) //forEach() é executado por cada elemento do vetor
}

//opera tambem passa a posição e elemento
//Primeira Informação passada no forEach é o elmento
function opera(elemento, posicao){
    console.log(`Vlaor parametro ${elemento} na posição ${posicao}`)
}

/*-------------------------------------------------------------------------------------------------*/
/*Ex proposto*/
function valor (){
    let val = []
    for (let i = 0; i < 10; i++){   
        val = Number(prompt(`Insira o valor`))
    }
    val.forEach(impar)
}
function impar (valIm, pos){
    if (valIm / 2 != 0){
        console.log(`O valor impar é ${valIm} na posição ${pos}`)
    }
}
valor()
/*Correção*/
var conteudo = ""

chefe()

function chefe(){
    let vetor = [2, 4, 6, 8, 20, 134, 12, 34, 23 , 3]
    vetor.forEach(opera)

}

function opera (elemento){
    conteudo = conteudo + " - " + elemento
}

//--------------------
//map tem return 
//map modifica o vetor original 
//map transforma todos os elementos 
chefe()

function chefe(){
    let vetor = [2, 4, 6, 8, 20, 134, 12, 34, 23 , 3]
    let noVet = vetor.map(multiplicacao)
}

function multiplicacao(elemento){
    return elemento * 2
}
/*---------------------------------------------------------------------------------------------------*/
chefe()

function chefe(){
    let vetor = [2, 4, 6, 8, 20, 134, 12, 34, 23 , 3]
    let noVeto = vetor.map(eleva)

    console.log(noVeto)

}
function eleva(valorP, posi){
    if (posi / 2 == 0){
        return Math.pow(valorP)
    }
}