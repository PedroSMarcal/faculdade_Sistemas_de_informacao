//lista 2 exe 1 
exe1()

function exe1(){
    var vendas = []
    var vendedores = []
    do {
        var op = Number(prompt(`[1] Cadastrar vendedor /n [2] Cadastrar venda /n [3] Sair`))
        switch(op){
            case 1: cadastraVendedor (vendedores) //escopo global
                break
            case 2: cadastrarVenda (vendas, vendedores) // é necessário o vetor de vendas e o vetor de
            //vendedores
                break
            case 3:
                break
        }
    } while (op != 3)
}

function cadastraVendedor (vend){
    var objeto = new Object()
    objeto.Cod = Number(prompt(`Insira seu codigo`))
    objeto.nome = prompt(`Insira seu nome`)

    for (var i = Number(0); i < vend.length; i++){
        if (vend[i].cod == objeto.codigo){
            console.log(`Codigo já existente`)
            return 0 //sai da função
        }
    }
    vend.push(objeto)
    console.log(`Vendedor Cadastrado com Sucesso`)
}

function cadastrarVenda (ven, vendor){
    var objeto = new object()
    objeto.codigo = Number(prompt(`Indique nos o codigo da venda`))
    objeto.vendedor = Number(prompt(`Insira o codigo do vendedor`))
    objeto.mes = Number(prompt(`Indique em número o mês`))
    objeto.valor =Number(prompt(`Informe o valor da venda`))

    for (var i= Number(0); i < vendor.length; i++){
        if (vendor[i].vendedor == objeto.vendedor){
            for (var j = Number(0); i < vend.length; j++){
                if ((vendor[j].vendedor == vendor.vendedor) && (vend[i].mes == objeto.mes)){
                    console.log(`Venda já cadastrada neste mês para o vendedor`)
                    return 0
                }
            }
            vend.push(objeto)
            console.log(`Venda Inserida com sucesso`)
            console.log(objeto)
            return 0
        }
    }
    console.log(`O vendedor não existe`)
}