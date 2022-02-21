/*Utilizando 1 matriz e 1 vetor de objetos e um menu de opções (dentro da função chefe como feita em aula), faça um programa que crie funções para (não se esqueça dos parâmetros da função):

1) cadastrar em um vetor 4 carros contendo marca, modelo, ano e valor, e para cada carro, informar em uma matriz a nota do carro para cada uma das 5 avaliações que ele recebe da empresa Guia Quatro Rodas da Editora Abril.

2) calcular e mostrar a média de notas de cada carro, informe junto a marca e modelo do carro

3) calcular e mostrar o modelo do carro com menor nota em cada avaliação*/

function chefe (){
    let vetCarro = []
    let avaliacao = []
    let media = [] 
    let resp = Number(prompt(`Informe-nos qual opção você deseja executar: /n [1] Cadastrar carros /n [2] Média de notas dos carros /n [3] Carro com menor nota em cada avalilação /n [4]sair`))
    switch (resp) {
        case 1: 
            cadastro(vetCarro, avaliacao)
            break
        case 2: 
            mediaNota(vetCarro, avaliacao, media)
            break
        case 3:
            menorAva(vetCarro, avaliacao)
            break
        case 4: 
            console.log(`OBRIGADO POR USAR NOSSO SERVIÇOS`)
            break
        default: console.log(`opção Inválida`)
    }
}

function cadastro (vet, ava) {
    for (let i = Number(0); i < 4; i++){
        let carros = new Object ()
        carros.marca = Prompt(`Informe-nos a marca do carro`)
        carros.modelo = Prompt(`Informe-nos o modelo`)
        carros.ano = Prompt (`Informe-nos a data por favor utilizar /`)
        carros.valor =  Number(Prompt(`Informe-nos o valor do carro`))

        vet[i].push(carros)

        ava[i] = [] //Inicializa dnetro do vetor

        for (let j = Number(0); j < 5; j++){
            ava[i][j] = Number(`Informe-nos a nota da Avaliação ${j}`)
        }
    }
}
/* MODELO DE CORREÇÃO PROVA
function cadastra(vet, mat){
    for(let i=0;i<4;i++){
        let carro = new Object()
        carro.marca = prompt(`Marca`)
        carro.modelo = prompt(`Modelo`) 
        carro.ano = Number(prompt(`Ano`))
        carro.valor = Number(prompt(`Valor`)) 
        // insere no vetor
        vet.push(carro)
        mat[i] = [] // inicializa o vetor dentro do vetor
        for(let j=0;j<5;j++){
            mat[i][j] = Number(prompt(`Nota`))
        }
    }
}
*/


function mediaNota (vet, ava, med){
    if (vet.length != 0){
        for (let i =Number(0); i < 4; i++){
            for (let j = Number(0); i < 5; i++){
                med[i] = ava[i][j] + med[i]
            }
            med[i] = med[i] / 5
            console.log(`a média do ${vet[i].marca} , ${vet[i].modelo}, é de ${med[i]}`)
        }
    } else {`Não há registro de carros`}
}
/* MODELO DE CORREÇÃO DA PROVA
function calculaMedia(vet, mat) {
    for(let i=0;i<4;i++){
        for(let j=0;j<5;j++){
            vet[i].media = vet[i].media + mat[i][j]
        }
        vet[i].media = vet[i].media / 5
        console.log(vet[i])
    }
}
*/

function menorAva (vet, ava){
    if (vet.length != 0) {
        let menornota = ava[0][0]
        let men
        for (let j = Number(0); j < 5; j++){
            for (let i = Number(0); i < 4; i++){
                if (ava[i][j] < menornota) {
                    men = vet[i].modelo 
                }
            }
            console.log(`a menor nota da ${j}° avaliação é do ${vet[i].modelo}`) 
        }
    } else {`Não há registros de carros`}

}
/* MODELO APRESENTADO DE CORREÇÃO
function calculaModelo(vetor, matriz) {
    for(let j=0;j<5;j++){
        let menor = mat[0][j]
        let modelo = vet[0].modelo
        for(let i=0;i<4;i++){
            if (mat[i][j] < menor){
                menor = mat[i][j]
                modelo = vet[i].modelo
            }
        }
        console.log(`${modelo} - ${menor}`)
    }
}
*/

chefe()