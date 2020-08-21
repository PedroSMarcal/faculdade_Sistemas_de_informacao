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
            break
        default:  console.log(`Opção Inválida`)
    }
    entrada13(vetor)
    mediaSalario(vetor)
    Idades(vetor)
    qtndMulheres(vetor)
    } while (opcao != 5)
}
function entrada13(vet){
    console.log(`Entrada de dados`)
        var obj = new Object
        obj.idade = Number(prompt(`Insira sua idade`))
        obj.sexo = prompt(`Insira o Sexo M/F`).toUpperCase
        obj.salario = Number(prompt(`Insira o sálario`))
        obj.filhos = Number(prompt(`Insira o número de filhos`))
        
        vet.push(obj)
}   

function mediaSalario(vet){
    var somasalario
    console.log(`Media salarial`)
    if (vet.length != 0){
        for (var i = Number(0); i < vetor.length; i++){
            somasalario = vetor[i].salario + somasalario 
        }
    } else {console.log(`Cadastre um valor`)}

    console.log(`A media salarial ${somasalario / vet.length}`)

function Idades (vet){
    var maiorIdade = vet[0].idade
    var menorIdade = vet[0].idade
    console.log(`Entrou na função menor maior idade`)
    if (vet == []){
        console.log(`Cadastre um habitante`)
        } else {
            for (var i = Number(0); i < vet.length; i++){
                if (vet[i].idade > maiorIdade){
                    maiorIdade = vet[i].idade
                }
                if (vet[i].idade < menorIdade){
                    menorIdade = vet[i].idade
                }
            }  
            console.log(`Maior: ${maiorIdade}, Menor: ${menorIdade}`)
        }
    }
}

function qtndMulheres (vet) {
    console.log(`Quantidade de mulheres`)
}