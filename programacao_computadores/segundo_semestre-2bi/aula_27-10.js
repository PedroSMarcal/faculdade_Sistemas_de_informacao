/* Crie uma classe em JS chamada Aluno contendo as variáveis numeroAluno, nome , idade, p1 e p2 do aluno */
/* Crie os métodos notaFinal() - que calcula e retorna a média final do aluno - , e mostra() - que retorna os valores de numeroAluno, nome e idade. */
/* Adicionar o método passou() à classe Aluno a fim de verificar se o aluno passou. Chame o método passou() a fim de testa-lo */
class aluno {
    constructor(nome, idade, numAluno, p1, p2, media, aprov){
        this.nome = nome
        this.idade = idade
        this.numAluno = numAluno
        this.p1 = p1
        this.p2 = p2
        this.media = media
        this.aprov = aprov // True passou e false reprovou
    }
    notaFinal(){
        this.media = (this.p1 + this.p2) / 2
        //console.log(`o aluno ${this.nome}, de ${this.idade}, codigo ${this.numAluno}, obteve a media de ${(this.p1 + this.p2) / 2}`)
       // console(`A média é ${media}`)
    }

    passou(){
        if(this.media > 0){
            if(this.media >= nopPassa){
                this.aprov = true
                //console.log(`o aluno ${this.nome}, de ${this.idade}, codigo ${this.numAluno}, Aprovado!`)
            } else {
                this.aprov = false
                //console.log(`o aluno ${this.nome}, de ${this.idade}, codigo ${this.numAluno}, Aprovado!`)
            }
        }
    }

    mostra(){
        console.log(aluno1)
        //console.log(`o aluno ${this.nome}, de ${this.idade}, codigo ${this.numAluno}`)
    }
}

let aluno1 = new aluno("Pedro", 18, 1, 10, 10) // this representa o aluno1
aluno1.notaFinal()
let nopPassa = Number(prompt(`Insira o valor a ser atingido para passar de ano`))
aluno1.passou()

aluno1.mostra()
    //CORREÇÃO
    /*
    class aluno {
        constructor(nome, idade, numAluno, p1, p2, media, aprov){
            this.nome = nome
            this.idade = idade
            this.numAluno = numAluno
            this.p1 = p1
            this.p2 = p2
        }

        notaFinal = () => {
            return (this.p1 + this.p2) /2
        }

        mostra = () => {
            console.log(`Núemero ${this.numAluno}, Nome: ${this.nome} Idade: ${this.idade} Média ${this.notaFinal()} `)
        }  

        passou = () => {
            if(this.notaFinal() >= 6){
                console.log('Aluno aprovado')
            } else {
                console.log('Aluno foi reprovado')
            }
        }
    }
    let aluno1 = new aluno(25692, "Pedro", 19, 8, 6)
    aluno1.mostra

    let aluno2 = new aluno(98234, "Lucas", 18, 6, 4 )
    */


/*Implemente em JS uma classe chamada Produto contendo as variáveis id , descrição , qtde  e preco . Essa classe deve possuir o método construtor e ainda os métodos:
•	comprar(int x): que compra um produto aumentando em x a quantidade em estoque;
•	vender(int x): que vende um produto diminuindo em x a quantidade em estoque;
•	subir(float x): que aumenta o preço do produto em x unidades;
•	descer(float x): que diminui o preço do produto em x unidades;
•	mostra(): que mostra todas as informações do produto


Finalmente que cria dois Produtos  e teste os métodos criados.
*/

class produtos {
    constructor(id, descri, qtde, preco){
        // This representa o objeto sendo criado
        this.id = id
        this.descri = descri
        this.qtde = qtde
        this.preco = preco
    }
    compra(x){
        this.qtde = qtde + x
    }

    vender(x){
        if (x > this.qtde){
            console.log(`Não há produtos o suficiente para seu desejo`)
        } else {
            this.qtde = this.qtde - x
        }
    }

    subir(x){
        if (x > 0){
            this.preco = this.preco + x
        }
    }

    abaixar(x){
        if (this.preco - x < 0){
            console.log(`Impossivel de abaixar o preço pois ficaria negativo`)
        } else {
            this.preco = this.preco - x
        }
    }

    mostra(){
        console.log(prod)
    }
}

let prod = new produtos("22646", "O emet", 0, 5.50) //this representa o 1° produto

// comprar
let x = Number(prompt(`Quantos vai querer jhow`))
prod.compra(x)

// vender 
x = Number(prompt(`Quantos vai vender jhow`))
prod.vender(x)

// subir
x = Number(prompt(`Vai aumentar em quantos? jhow`))
prod.subir(x)

// descer
x = Number(prompt(`Vai diminuir em quantos? jhow`))
prod.abaixar(x)

//mostra
prod.mostra()

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// FEITO COM ARROW FUNCTION
class produtos {
    constructor(id, descri, qtde, preco){
        // This representa o objeto sendo criado
        this.id = id
        this.descri = descri
        this.qtde = qtde
        this.preco = preco
    }
    compra = () => {
        let x = Number(prompt(`Quantos vai querer jhow`))
        this.qtde = qtde + x
    }

    vender = () => {
        let x = Number(prompt(`Quantos vai vender jhow`))
        if (x > this.qtde){
            console.log(`Não há produtos o suficiente para seu desejo`)
        } else {
            this.qtde = this.qtde - x
        }
    }

    subir = () => {
        let x = Number(prompt(`Vai aumentar em quantos? jhow`)) 
        if (x > 0){
            this.preco = this.preco + x
        }
    }

    abaixar = () => {
        let x = Number(prompt(`Vai diminuir em quantos? jhow`))
        if (this.preco - x < 0){
            console.log(`Impossivel de abaixar o preço pois ficaria negativo`)
        } else {
            this.preco = this.preco - x
        }
    }

    mostra = () => {
        console.log(`ID: ${this.id}, Descrição: ${this.descri}, Quantidade: ${this.qtde}, Preco: ${this.preco}`)
    }
}

let prod = new produtos(10, "Alcool_em_gel", 2, 30.00) //this representa o 1° produto
//compra
prod.compra()

// vender 
prod.vender()

// subir
prod.subir()

// descer
prod.abaixar()

//mostra
prod.mostra()

let prod2 = new produtos(20, "Mascara", 50, 3) //this representa o 1° produto
//compra
prod2.compra()

// vender 
prod2.vender()

// subir
prod2.subir()

// descer
prod2.abaixar()

//mostra
prod2.mostra()

/*CORREÇÃO */
class produtos {
    constructor(id, descri, qtde, preco){
        // This representa o objeto sendo criado
        this.id = id
        this.descri = descri
        this.qtde = qtde
        this.preco = preco
    }

    mostra = () => {
        console.log(`ID: ${this.id}, Descrição: ${this.descri}, Quantidade: ${this.qtde}, Preco: ${this.preco}`)
    }

    comprar = (x) => {
        this.qtde = this.qtde + x
    }

    vender = (x) => {
        if ((this.qtde - x) >= 0){
            this.qtde = this.qtde + x
        } else {
            console.log(`Não foi possivel vender pois não há estoque`)
        }
    
    subir = (x) => {
        this.preco = this.preco + x
    }

    descer = (x) => {
        if ((this.preco - x) >= 0){
            this.preco = this.preco - x
        }
        else {
            console.log(`Não foi possivel diminuir o preço`)
        }
    }
    }
}

let produto1 = new produtos(10, "Alcool_em_gel", 2, 30.00) //this representa o 1° produto
produto1.comprar(10)
produto1.subir(10)
produto1.mostra()

let produto2 = new produtos(20, "Mascara", 50, 3) //this representa o 1° produto
produto2.vender(2)
produto2.descer(45)
produto2.mostra()




/* Crie uma classe em JS chamada Aluno contendo as variáveis numeroAluno, nome , idade, p1 e p2 do aluno */
/* Crie os métodos notaFinal() - que calcula e retorna a média final do aluno - , e mostra() - que retorna os valores de numeroAluno, nome e idade. */
/* Adicionar o método passou() à classe Aluno a fim de verificar se o aluno passou. Chame o método passou() a fim de testa-lo */
class aluno {
    constructor(nome, idade, numAluno, p1, p2, media, aprov){
        this.nome = nome
        this.idade = idade
        this.numAluno = numAluno
        this.p1 = p1
        this.p2 = p2
        this.media = media
        this.aprov = aprov // True passou e false reprovou
    }
    notaFinal(){
        this.media = (this.p1 + this.p2) / 2
        //console.log(`o aluno ${this.nome}, de ${this.idade}, codigo ${this.numAluno}, obteve a media de ${(this.p1 + this.p2) / 2}`)
       // console(`A média é ${media}`)
    }

    passou(){
        if(this.media > 0){
            if(this.media >= nopPassa){
                this.aprov = true
                //console.log(`o aluno ${this.nome}, de ${this.idade}, codigo ${this.numAluno}, Aprovado!`)
            } else {
                this.aprov = false
                //console.log(`o aluno ${this.nome}, de ${this.idade}, codigo ${this.numAluno}, Aprovado!`)
            }
        }
    }

    mostra(){
        console.log(aluno1)
        //console.log(`o aluno ${this.nome}, de ${this.idade}, codigo ${this.numAluno}`)
    }
}

let aluno1 = new aluno("Pedro", 18, 1, 10, 10) // this representa o aluno1
aluno1.notaFinal()
let nopPassa = Number(prompt(`Insira o valor a ser atingido para passar de ano`))
aluno1.passou()

aluno1.mostra()
    //CORREÇÃO
    /*
    class aluno {
        constructor(nome, idade, numAluno, p1, p2, media, aprov){
            this.nome = nome
            this.idade = idade
            this.numAluno = numAluno
            this.p1 = p1
            this.p2 = p2
        }

        notaFinal = () => {
            return (this.p1 + this.p2) /2
        }

        mostra = () => {
            console.log(`Núemero ${this.numAluno}, Nome: ${this.nome} Idade: ${this.idade} Média ${this.notaFinal()} `)
        }  

        passou = () => {
            if(this.notaFinal() >= 6){
                console.log('Aluno aprovado')
            } else {
                console.log('Aluno foi reprovado')
            }
        }
    }
    let aluno1 = new aluno(25692, "Pedro", 19, 8, 6)
    aluno1.mostra

    let aluno2 = new aluno(98234, "Lucas", 18, 6, 4 )
    */


/*Implemente em JS uma classe chamada Produto contendo as variáveis id , descrição , qtde  e preco . Essa classe deve possuir o método construtor e ainda os métodos:
•	comprar(int x): que compra um produto aumentando em x a quantidade em estoque;
•	vender(int x): que vende um produto diminuindo em x a quantidade em estoque;
•	subir(float x): que aumenta o preço do produto em x unidades;
•	descer(float x): que diminui o preço do produto em x unidades;
•	mostra(): que mostra todas as informações do produto


Finalmente que cria dois Produtos  e teste os métodos criados.
*/

class produtos {
    constructor(id, descri, qtde, preco){
        // This representa o objeto sendo criado
        this.id = id
        this.descri = descri
        this.qtde = qtde
        this.preco = preco
    }
    compra(x){
        this.qtde = qtde + x
    }

    vender(x){
        if (x > this.qtde){
            console.log(`Não há produtos o suficiente para seu desejo`)
        } else {
            this.qtde = this.qtde - x
        }
    }

    subir(x){
        if (x > 0){
            this.preco = this.preco + x
        }
    }

    abaixar(x){
        if (this.preco - x < 0){
            console.log(`Impossivel de abaixar o preço pois ficaria negativo`)
        } else {
            this.preco = this.preco - x
        }
    }

    mostra(){
        console.log(prod)
    }
}

let prod = new produtos("22646", "O emet", 0, 5.50) //this representa o 1° produto

// comprar
let x = Number(prompt(`Quantos vai querer jhow`))
prod.compra(x)

// vender 
x = Number(prompt(`Quantos vai vender jhow`))
prod.vender(x)

// subir
x = Number(prompt(`Vai aumentar em quantos? jhow`))
prod.subir(x)

// descer
x = Number(prompt(`Vai diminuir em quantos? jhow`))
prod.abaixar(x)

//mostra
prod.mostra()

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// FEITO COM ARROW FUNCTION
class produtos {
    constructor(id, descri, qtde, preco){
        // This representa o objeto sendo criado
        this.id = id
        this.descri = descri
        this.qtde = qtde
        this.preco = preco
    }
    compra = () => {
        let x = Number(prompt(`Quantos vai querer jhow`))
        this.qtde = qtde + x
    }

    vender = () => {
        let x = Number(prompt(`Quantos vai vender jhow`))
        if (x > this.qtde){
            console.log(`Não há produtos o suficiente para seu desejo`)
        } else {
            this.qtde = this.qtde - x
        }
    }

    subir = () => {
        let x = Number(prompt(`Vai aumentar em quantos? jhow`)) 
        if (x > 0){
            this.preco = this.preco + x
        }
    }

    abaixar = () => {
        let x = Number(prompt(`Vai diminuir em quantos? jhow`))
        if (this.preco - x < 0){
            console.log(`Impossivel de abaixar o preço pois ficaria negativo`)
        } else {
            this.preco = this.preco - x
        }
    }

    mostra = () => {
        console.log(`ID: ${this.id}, Descrição: ${this.descri}, Quantidade: ${this.qtde}, Preco: ${this.preco}`)
    }
}

let prod = new produtos(10, "Alcool_em_gel", 2, 30.00) //this representa o 1° produto
//compra
prod.compra()

// vender 
prod.vender()

// subir
prod.subir()

// descer
prod.abaixar()

//mostra
prod.mostra()

let prod2 = new produtos(20, "Mascara", 50, 3) //this representa o 1° produto
//compra
prod2.compra()

// vender 
prod2.vender()

// subir
prod2.subir()

// descer
prod2.abaixar()

//mostra
prod2.mostra()

/*CORREÇÃO */
class produtos {
    constructor(id, descri, qtde, preco){
        // This representa o objeto sendo criado
        this.id = id
        this.descri = descri
        this.qtde = qtde
        this.preco = preco
    }

    mostra = () => {
        console.log(`ID: ${this.id}, Descrição: ${this.descri}, Quantidade: ${this.qtde}, Preco: ${this.preco}`)
    }

    comprar = (x) => {
        this.qtde = this.qtde + x
    }

    vender = (x) => {
        if ((this.qtde - x) >= 0){
            this.qtde = this.qtde + x
        } else {
            console.log(`Não foi possivel vender pois não há estoque`)
        }
    
    subir = (x) => {
        this.preco = this.preco + x
    }

    descer = (x) => {
        if ((this.preco - x) >= 0){
            this.preco = this.preco - x
        }
        else {
            console.log(`Não foi possivel diminuir o preço`)
        }
    }
    }
}

let produto1 = new produtos(10, "Alcool_em_gel", 2, 30.00) //this representa o 1° produto
produto1.comprar(10)
produto1.subir(10)
produto1.mostra()

let produto2 = new produtos(20, "Mascara", 50, 3) //this representa o 1° produto
produto2.vender(2)
produto2.descer(45)
produto2.mostra()


/*
Implemente em JS uma classe chamada Rio contendo as variáveis nome, nível e poluído (sim/não). Essa classe deve possuir o  método construtor, e ainda os métodos:
•	chover(float): que aumenta o nível atual do rio;
•	ensolarar(float): que diminui o nível atual do rio;
•	limpar(): que limpa o rio;
•	sujar(): que polui o rio;
•	mostra(): que mostra todas as informações do rio.

Finalmente, cria dois rios e teste os métodos criados.
*/
