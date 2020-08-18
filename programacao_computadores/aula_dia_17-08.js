function cadastra(vet){
    var objeto = new Object ()
    objeto.codigo = Number(prompt(`Indique o codigo`))
    objeto.qtde = Number(prompt(`insira a quantidade`))
    objeto.preco = Number(prompt(`Indique o preço`))
    objeto.nome = String(prompt(`Indique o nome`))
    vet.push(objeto)
}
function mostra(vet){
    for (var i = 0; i < vet.length; I++){
        console.log(vet[i])
    }
}
function chefe (){
    var vetor = []
     do {
         var opcao = Number(prompt(`Digite uma opção \n [1]. Cadastra \n [2]. Consulta \n [3]. Sair`))
         switch(opcao){
            case 1: cadastra(vetor)
                break
            case 2: console.log(vetor) 
                break
            case 3: console.log(`Até logo`)
            default: console.log(`Opção Inválida`)
         }
     }
     while(opcao != 3)
    }
chefe()