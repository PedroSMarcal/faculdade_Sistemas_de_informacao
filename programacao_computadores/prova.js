// MAP
let vet = []

for (var i = Number(0); i <= 3; i++){
    vet.push(i * i + 1)
}

console.log(vet)

result = vet.map ((elementos) =>  {
    return (elementos + 1) 
})

console.log(`A função Map tem como pricipal caracteristica de percorrer o vetor e atribuir uma condição, no caso foi somar mais 1, podendo ser atribuida a uma nova lista/vetor ou a mesma`)
console.log(`os valores no vetor somados a + 1 tem como resultado: ${result}`)

//REDUCE
let vet = []

for (var i = Number(0); i <= 3; i++){
    vet.push(i * i + 1)
}   

console.log(vet)

result = vet.reduce ((total, elementos) => {
    let elemento = elementos + 1
    return (elemento + total) 
})
console.log('A função Reduce tem como Base somar os elementos dentro de uma lista ou vetor sem altera-lo, e atribuindo a uma nova var')
console.log(`os valores no vetor somados a + 1 tem como resultado na função reduce: ${result}`)


//FiLTER
let vet = []

for (var i = Number(0); i <= 3; i++){
    vet.push(i * i + 1)
}

console.log(vet)

result = vet.filter((elementos) => {
    return elementos % 2 == 0
})

console.log('A função filter percorre uma lista, e atribui o valor do teste (no caso foi se é par), para uma nova ou mesma variavel, porém ela seleciona todas')
console.log(`Os pares deste vetor são ${result}`)

//FIND
let vet = []

for (var i = Number(0); i <= 3; i++){
    vet.push(i * i + 1)
}

console.log(vet)

result = vet.find((elementos) => {
    return elementos % 2 == 0
})
console.log('A função find percorre uma lista, e atribui o valor do teste (no caso foi se é par), para uma nova ou mesma variavel, porém ela seleciona apenas o primeiro elemento encontrado')
console.log(`O primeiro elemento par deste vetor é: ${result}`)

//CLASSSSS

/*
 Esta classe deve ter as variáveis nomeDono, marca, modelo, ram e hd. Crie um método para fazer upgrade de memória ram em X unidades, e downgrade de memória ram em X unidades. Ainda, a classe deve ter um método para fazer upgrade de hd em X unidades e downgrade de hd em X unidades. Não é possível que memória ram e hd tenham valores negativos. Em seguida, crie 2 objetos da classe e chame os métodos criados. 

ATENÇÃO: o nome do dono dos objetos deve ter o seu nome.
*/

class computador {
    constructor(nomeDono, marca, modelo, ram, hd){
        this.nomeDono = nomeDono
        this.marca = marca
        this.modelo = modelo
        this.ram = ram
        this.hd = hd
    }
    // classe deve ter um método para fazer upgrade de hd em X unidades 
    upgradeMemoriaRam () {
        let x = Number(prompt('Informe-nos a quantidade de memoria ram extra a se colocar: '))
        if (x <= 0){
            console.log(`Você apenas pode inserir memoria`)
        }
        else {
            this.ram = this.ram + x 
            console.log(this.ram)
        }
    }
    //downgrade de hd em X unidades.
    downgradeMemoriaRam () {
        let x = Number(prompt('Informe-nos a quantidade de memoria ram extra a se retirar: '))
        if (this.ram - x < 0){
            console.log('Não podemos retirar esta quantidade de memoria pois ficaria negativo')
        } else{
            this.ram = this.ram - x 
            console.log(this.ram)

        }
    }
    //upgrade de hd em X unidades
    upgradeHd () {
        let x = Number(prompt('Informe-nos a quantidade de memoria hd extra a se colocar: '))
        if (x < 0){
            console.log(`Você apenas pode colocar hd`)
        }
        else {
            if(x + this.hd >= 0){
                this.hd = this.hd + x 
                console.log(this.hd)
            }
        } 
    }

    //downgrade de hd em X unidades
    downgradeHd () {
        let x = Number(prompt('Informe-nos a quantidade de memoria hd extra a se retirar: '))
        if (this.hd - x < 0){
            console.log('Não podemos retirar esta quantidade de memoria pois ficaria negativo')
        } else{
            this.hd = this.hd - x 
            console.log(this.hd)
        }
    }
    mostrar() {
        console.log(this)
    }
}

//USUARIO 1 
let dono = 'Pedro Henrique Silva Marçal'
let marca = prompt('Qual a marca do computador a ser usado')
let modelo = prompt('Qual o modelo a ser usado')
let ram = Number(prompt('Informe-nos a quantidade de ram'))
let hd = Number(prompt('Informe-nos a quantidade de hf '))
let pedro1 = new computador (dono, marca, modelo, ram, hd)

pedro1.upgradeMemoriaRam()
pedro1.downgradeMemoriaRam()
pedro1.upgradeHd()
pedro1.downgradeHd()
pedro1.mostrar()

//USUARIO 2
let marca = prompt('Qual a marca do computador a ser usado')
let modelo = prompt('Qual o modelo a ser usado')
let ram = Number(prompt('Informe-nos a quantidade de ram'))
let hd = Number(prompt('Informe-nos a quantidade de hf '))
let pedro2 = new computador (dono, marca, modelo, ram, hd)

pedro2.upgradeMemoriaRam()
pedro2.downgradeMemoriaRam()
pedro2.upgradeHd()
pedro2.downgradeHd()
pedro2.mostrar()
