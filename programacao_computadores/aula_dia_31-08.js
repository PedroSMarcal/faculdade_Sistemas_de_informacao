//lista 2 exe 1 
exe1()

function exe1(){
    let vendas = [] //alteramos a var por let por conta do escopo local e não global
    let vendedores = [] //alteramos a var por let por conta do escopo local e não global
    do {
        var op = Number(prompt(`[1] Cadastrar vendedor /n [2] Cadastrar venda /n [3] Consulta de Vendas no mês /n [4] Cosulta de Vendas de um Funcionarios /n [5] Vendedor com maior venda no mês /n [6] sair`))
        switch(op){
            case 1: cadastraVendedor (vendedores) //escopo global /n 
                break
            case 2: cadastrarVenda (vendas, vendedores) // é necessário o vetor de vendas e o vetor de
            //vendedores
                break
            case 3: consultaVendaMes(vendas)
                break
            case 4: consultaVendaVendedor(vendas)
                break
            case 5: MaiiorVendaMes(vendas)
                break            
        }
    } while (op != 6)
}

function cadastraVendedor (vendor){
    let objeto = new Object()
    objeto.Cod = Number(prompt(`Insira seu codigo`))
    objeto.nome = prompt(`Insira seu nome`)

    for (var i = Number(0); i < vendor.length; i++){
        if (vendor[i].cod == objeto.codigo){
            console.log(`Codigo já existente`)
            return 0 //sai da função
        }
    }
    vendor.push(objeto)
    console.log(`Vendedor Cadastrado com Sucesso`)
}

function cadastrarVenda (vend, vendor){
    let objeto = new object()
    objeto.codigo = Number(prompt(`Indique nos o codigo da venda`))
    objeto.vendedor = Number(prompt(`Insira o codigo do vendedor`))
    objeto.mes = Number(prompt(`Indique em número o mês`))
    objeto.valor =Number(prompt(`Informe o valor da venda`))

    for (var i= Number(0); i < vendor.length; i++){
        if (vendor[i].vendedor == objeto.vendedor){
            for (var j = Number(0); i < vend.length; j++){
                if ((vendor[j].vendedor == vendor.vendedor) && (vend[i].mes == objeto.mes)){
                    console.log(`Venda já cadastrada neste mês para o vendedor`)
                    return 0 //sai da função
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
function consultaVendaMes (vend){
    let vendedor = Number(prompt(`Informe o codigo do vendedor`))
    let mes = Number(prompt(`Informe o mes desejado`))
    
    for (let i = Number(0); i < vend.length; i++){
        if ((vend[i].vendedor == vendedor) && (vend[i].mes == mes)){
            console.log(`Valor de Venda ${vend[i].mes}`)
        }
    }
    console.log(`Vendedor e/ou  mês sem venda`)
}

function consultaVendaVendedor (vend){
    let Vendedor = Number(prompt(`Informe o código do funionario`))
    let Achou = 1

    for (let i = 0; i < vend.length; i++){
        if (vend[i].vendedor == vendedor){
            total = vend[i].valor + total
            
        }
    }
    if (total == 0){
        console.log(`Vendedor sem vendas`)
    } else {console.log(`O total das vendas é ${total}`)}
}

function MaiiorVendaMes (vend){
    let mes = Number(prompt(`Indique o mes`))
    let codigo 
    let maiorVenda = Number(0)

    for (let i = 0; i < vend.length; i++){
        if (vend[i].mes == mes){
            if (vend[i].valor > maiorVenda){
                maiorVenda = vend[i].valor
                codigo = vend[i].vendedor
            }
        }
    }
    console.log(`A maior venda é de ${maiorVenda} feita pelo vendedor ${codigo}`)
}