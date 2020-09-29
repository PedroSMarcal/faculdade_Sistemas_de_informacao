/*Utilizando dois vetores de objetos e menu de opções (dentro da função chefe como os feitos em aula), faça um programa que crie funções para

1) cadastrar 1 pessoa contendo rg, cpf e nome

2) cadastrar 1 imóvel contendo código, endereço, tamanho, tipo, valor e rg do dono. Não pode criar imóvel de pessoa que não esteja cadastrada

3) A partir de um RG informado, calcula e mostra o valor total em imóvel desta pessoa, mostrando também o nome 

4) Calcula e mostra o cpf da pessoa que tem o imóvel mais caro
*/
function chefe (){
    let pessoa = []
    let imovel = []
    let resp = Number(prompt(`Informe-nos qual opção você deseja executar: /n [1] Cadastrar uma pessoa /n [2] cadastrar um imovel /n [3] calcula o valor total de valor de determinda pessoa /n [4] mostra a pessoa com o imovel mais caro`))
    switch (resp) {
        case 1: cadasPess(pessoa)
            break
        case 2: cadasImovel(pessoa, imovel)
            break
        case 3: totalVal (pessoa, imovel)
            break
        case 4: imovelCaro (pessoa, imovel)
            break
        case 5: console.log(`OBRIGADO POR USAR NOSSO SERVIÇOS`)
            break
        default: console.log(`Opção Inválida`)
    }
}

function cadasPess(pe){
    let pesso = new Object()
    pesso.rg = prompt(`Informe-nos seu RG`)
    pesso.cpf = prompt(`Informe seu cpf`)
    pesso.nome = prompt(`informe seu nome`)

    pe.push(pesso)
}
function cadasImovel (pe, im){
    if (pe.length != 0) {
        let teste = (`Informe-nos seu CPF`)
        for (let i = Number(0); i < pe.length; i++){
            if (teste == pe[i].cpf) {
                var imov = new Object()
                imov.cod = prompt(`Informe-nos o codigo`)
                imov.endere = prompt(`Informe-nos o endereço`)
                imov.tamanho = Number(prompt(`Informe-nos o endereço em metros quadrados`))
                imov.tipo = prompt(`Informe-nos o tipo`)
                imov.valor = Number(prompt(`Informe-nos o valor do imovel`))
                imov.rgDono = prompt(`Informe-nos o RG do dono do imovel`)

                im.push(imov)
            }
        }
    } else {console.log(`Não há registro de pessoas`)}
}

function totalVal (pe, im){
    let somaTotal = Number(0)
    let nome 
    if (pe.length != 0){
        let teste = (`Informe-nos seu RG`)
        for (let i = Number(0); i < pe.length; i++){
            if (teste == pe[i].rg){
                nome = pe[i].rg
               for (let j = Number(0); j < im.length; j++){
                   if (im[j].rgDono == teste){
                        somaTotal = somaTotal + im[j].valor
                   }
               } 
            }
        }
        console.log(` ${nome}: O valor total é de: ${somaTotal}`)
    }
}

function imovelCaro(pe, im){
    let imoveMaisCaro = 0
    let rgpe 
    if (pe.length != 0) {
        for (let i = Number(0); i < im.length; i++){
            if (im[i].valor > imoveMaisCaro){
                rgpe = im[i].rgDono   
            }
        }
        for (let i = Number(0); i < pe.length; i++){
            if (rgpe == pe[i].rg){
                console.log(`O cpf da pessoa é ${pe[i].cpf}`)
            }
        }

    }

}

chefe()