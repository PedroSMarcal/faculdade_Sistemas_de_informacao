exe13()
// \n quebra a linha no template string

function exe13(){
    //vetor com escopo global
    var vetor = []
    do {
    var opcao = Number(prompt(`Escolha \n [1].cadastrar \n [2] média \n [3] menor e maior idade \n [4] quantidade de mulheres \n [5] Sair do problema`))
    switch (opcao){
        case 1: entrada13(vetor)
            break
        case 2: mediaSalario(vetor)
            break
        case 3: Idades(vetor)
            break
        case 4: qtndMulheres(vetor)
            break
        case 5: console.log(`Obrigado por utilizar nosso programa`)
        default:  console.log(`Opção Inválida`)
    }
    entrada13(vetor)
    mediaSalario(vetor)
    Idades(vetor)
    qtndMulheres(vetor)
    } while (opcao != 5)
}
function entrada13(vet){
    for (var i = Number(0); i <= 15; i++){
        var vet = new Object
        vet.idade = Number(prompt(`Insira sua idade`))
        vet.sexo = String(prompt(`Insira o Sexo`))
        vet.salario = Number(prompt(`Insira o sálario`))
        vet.filhos = Number(prompt(`Insira o número de filhos`))
        vetor.push(vet)
    }
}   