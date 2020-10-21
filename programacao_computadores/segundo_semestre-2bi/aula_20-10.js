/*ES 6*/
//EXEMPLOS 

//ES 5 
var soma5 = function(x, y){
    return x + y
}

console.log(`A soma de 2 núemros é de ${soma5(3, 8)}`)

//ES 6
var soma6 = (x, y) => (x + y)

console.log(`A soma de dois números é de ${soma6(3, 8)}`)

// ES5
var vet = [10, 20, 30, 40, 50]

var soma = 0
vetor.forEach(fsoma)
console.log(`A soma dos elementos do vetor é ${soma}`)

function fsoma(elemento){  
    soma = soma + elemento
}

//ES 6
var vet = [10, 20, 30, 40, 50]

var soma = 0

vetor.forEach(fsoma)

console.log(`A soma dos elementos do vetor é ${soma}`)

var fsoma = (elemento) => soma = soma + elemento

// ou 

var vet = [10, 20, 30, 40, 50]

var soma = 0
// chamando e definindo a função deixando-na anonima
//foreach sendo chamado passando outra função como parametro
vetor.forEach(
    (elemento) => soma = soma + elemento
    )

console.log(`A soma dos elementos do vetor é ${soma}`)

// filter x find

var numeros = [2, 4, 6, 8, 10]

var resultados = numeros.find(
    (elemento) => elemento == 2
)

console.log(resultado)

//find para na primeira que achar
/*
*/
// filter continua 
var numeros = [2, 4, 6, 8, 10]

var resultados = numeros.filter(
    (elemento) => elemento == 2
)

console.log(resultado)


//
var numeros = [2, 4, 6, 8, 10]

var resultado = numeros.filter((elemento, pos) => pos % 2 != 0)

console.log(resultado)
// ou 
var numeros = [2, 4, 6, 8, 10]

console.log(numeros.filter((elemento, pos) => pos % 2 != 0))

// diminuir os exe da aula passada
// 2
var cod 
let busca = function(vet){
    cod = Number(prompt(`Informe-nos o codigo`))
    console.log(vet.filter((elemento) => elemento.codigo == cod))
}

/*LIÇÃO DE CASA FAZER OS EX. do dia 19-10 COM ARROW FUNCTION*/