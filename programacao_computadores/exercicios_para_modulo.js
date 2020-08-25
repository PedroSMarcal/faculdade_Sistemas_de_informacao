//////////////////////
/*   exe1 */
function exe1(n){
    var soma = Number(0)
    for (var i = Number(0); i <= n; i++){
        soma = soma + 1
    }
}

function principal (){
    var numero 
    var restultado = exe1 (numero)
    console.log(`A soma dos números é ${restultado}`)
} 

principal()
/*=-=-=-=-=-=-=-=-=--=-=- exe2 -=-=-=-=--=-=-=-=--=-=-=-=-*/
function exe2 (){
    entrada2()
    calculo2(s, m, h) 
}

function entrada2 (){
    console.log(`Por favor entre com 3 números Inteiros`)
    h = Number(prompt(`Insira o primeiro valor Inteiro`))
    m = Number(prompt(`Insira o segundo número`))
    s = Number(prompt(`Insira o terceiro valor`))
     
    h, m, s
}

function calculo2 (){
    mh = (h * 60) + m /* horas para minutos + minutos */
    resultado = (mh * 60) + s /* minutos para segundos */ 

    return console.log(resultado)
}
exe2()
/*=-=-=-=-=-=-=-=-=--=-=- exe3 -=-=-=-=--=-=-=-=--=-=-=-=-*/
function  exe3 (cadeia1, cadeia2){
    if (cadeia1 == cadeia2){
        return 0
    } else {
        if (cadeia2.length > cadeia1.length){
            return cadeia1.length
        } else {
        for (var i = Number(0); i < cadeia1.length; i++){
            if (cadeia1[i] != cadeia2[i]){
                return i + 1
            }
        }
        }
    }
}
function chefe3() {
    var cad1 = prompt(`Informe a cadeia 1`)
    var cad2 = prompt(`Informe a cadeia 2`)
    exe3()
    var resultado = exe3(cad1, cad2)
    console.log(`O resultado é ${resultado}`)
}
/*=-=-=-=-=-=-=-=-=--=-=- exe4 -=-=-=-=--=-=-=-=--=-=-=-=-*/
function  exe4 (){
    entrada4()
    calculo4(raio)

    console.log(resultado)
}
function entrada4(){
    raio = prompt(`Informe-nos o raio da cicunferencia`)

    
}

function calculo4(){
    resultado = (3/4) * raio

    return console.log(resultado)
}

exe4 ()
/*=-=-=-=-=-=-=-=-=--=-=- exe4 -=-=-=-=--=-=-=-=--=-=-=-=-*/
function  exe5 (){
    entrada5()
    console.log(verificacao5(numero))

}
function entrada5 (){
    numero = Number(prompt(`Insira seu valor e diremos se é negativo ou positivo`))

    return numero
}

function verificacao5 (numero){
    if (numero > 0) {
        return "positivo"
    } if (numero < 0) {
        return "negativo"
    } else {
        return "zero"
    }
}
exe5 ()
/*=-=-=-=-=-=-=-=-=--=-=- exe6 -=-=-=-=--=-=-=-=--=-=-=-=-*/
function exe6 (){
    entrada6()
    console.log(calculo6(sexo, alt))
}
function entrada6 (){
    sexo = prompt(`Indique seu sexo M(masculino) - F(Feminino) `)
    alt = Number(prompt(`Indique nos sua altura`))

    sexo, alt
}
function calculo6 (sexo, alt){
    switch (sexo) {
        case "M": return (alt * 72.2) - 58
        case "F": return (alt * 62.1) - 44.7

        default: return "insira um sexo válido" 
    }
}
exe6()
/*=-=-=-=-=-=-=-=-=--=-=- exe7 -=-=-=-=--=-=-=-=--=-=-=-=-*/
/*------------------------Repassar-------------------*/
function exe7 (){
    var vetor = []
    entrada7(vetor)
    calculo7(vetor)
}
function entrada7 (vet){
    i = Number(0)
    do {
        vet.push(Number(prompt(`Insira o valor desejado`)))
        i++
    }
    while (vet > 0)
}

function calculo7 (vet){
    media = 0
    for (var j = Number(0); j <= vet.length; j++){
        media = vet[j] + media
    }
    media = media / vet.length
    return (console.log(`A média de todos os valores é de ${media}`))
}
exe7()
/*---------------------------------------------------------------*/
function exe7 (){
    var soma = 0 
    var conta = 0
    var numero = Number(prompt(`Insira um numero`))
}
    do {
        conta++
        soma = soma + numero
        numero = prompt(`Insira um valor negativo se desjar parar`)
    }while (numero < 0)

function chefe7 (){
    exe7()
}


/*=-=-=-=-=-=-=-=-=--=-=- exe8 -=-=-=-=--=-=-=-=--=-=-=-=-*/
function exe8 (){
    entrada8()
    calculo8(num)
    console.log(`${fatorial}`)
}
function entrada8 (){
    num = Number(prompt(`Insira seu valor`))

}
function calculo8(num){
    fatorial = Number(0)
    cont1 = num - 1
    for (var i = Number(1); i <= num; i++){
        fatorial = (i * (i - cont1)) + fatorial
        cont1 = cont1 -1
    }
    
}
exe8 ()
/*=-=-=-=-=-=-=-=-=--=-=- exe9 -=-=-=-=--=-=-=-=--=-=-=-=-*/
function exe9(){
    entrada9()
    calculo9(param)
}
function entrada9(){
    param = prompt(`indique o valor parametro`)
}
function calculo9(param){
    resultado9 = Number(0)
    for (var i = Number(0); i <= param; i++){
            if (param % i == 0){
                resultado9 = i + resultado9
            }
    }
    return console.log(`${resultado}`)
}
-
/*--------------------------------------------------------------*/
function exe9 (numero){
    for (var i = Number(0); i >= 1; i--){
        if (numero % i == 0){
            soma = soma + i
        }
    }
    console.log(`Soma dos divisores é ${soma}`)
} 

/*=-=-=-=-=-=-=-=-=--=-=- exe13 -=-=-=-=--=-=-=-=--=-=-=-=-*/
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

function Idades(vet){
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
    mulheres = Number(0)
    for (var i = Number(0); i <= vet.length; i++){
        if ((vet[i].sexo == "F") && (vet[i].sexo == "f")){
            if ((vet[i].filhos == 3) && (vet[i].salario <= 500,00)){
                mulheres = mulheres + 1
            }
        }
    }
    return console.log(`A quantidade de mulheres que recebe até 500,00 R$ e tem 3 filhos são ${mulheres}`)  
}
exe13()
