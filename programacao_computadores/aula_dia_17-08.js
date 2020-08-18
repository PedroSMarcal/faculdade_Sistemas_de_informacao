function cadastra(vet){
    var objeto = new Object ()
    objeto.codigo = Number(prompt(`Indique o codigo`))
    objeto.qtde = Number(prompt(`insira a quantidade`))
    objeto.preco = Number(prompt(`Indique o preço`))
    objeto.nome = String(prompt(`Indique o nome`))
    vet.push(objeto)
}
function chefe (){
    var vetor = []
    cadastra(vetor)
    cadastra(vetor)
    console.log(vetor)    
}
chefe()