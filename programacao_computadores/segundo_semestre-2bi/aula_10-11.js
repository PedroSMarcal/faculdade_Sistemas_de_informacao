/*
ecmascript 5
*/

let vetor = [1, 2, 4]

//devemos utilizar o return para alterar o vetor
vetor = vetor.map( (elemento) => {
    return elemento + 10
})

console.log(vetor)

// exemplo de forEach percorre o vetor apenas
let vetor = [1, 2, 4]

vetor.forEach( (elemento) => {
    if (elemento % 2 == 0){
        console.log(`elemento é par ${elemento}`)
    } 
})

console.log(vetor) 
//exempo de filter (retorna todos os valores retornados) 
let vetor = [1, 3, 4, 9]
let impares = vetor.filter( (elemento) => {
    return elemento % 2 == 1
})

console.log(impares)

//exemplo de find (retorna o primeiro valor encontrado)

let vetor = [1, 3, 4, 9]
let impares = vetor.find( (elemento) => {
    return elemento % 2 == 1
})

console.log(impares)

//exemplo de reduce (reduz para um unico valor)
let vetor = [1, 4, 2, 6, 9]
let soma = vetor.reduce( (total, elemento) => {
    return elemento + total
})

//tem como pegar objetos com o forEach a partir de indicaçoes 
let objeto = new objeto()
objeto.nome = 'sesi franca'
objeto.esport = 'basquete'

let vetor = []
vetor.push(objeto)

objeto = new Object ()
objeto.nome = 'Timão melhor do mundo'
objeto.esport = 'futebol'

vetor.push(objeto)

vetor.forEach(objeto => {
    if (objeto.esport == 'basquete' ){
        console.log('Esporte da paixão do francano')
    }
})