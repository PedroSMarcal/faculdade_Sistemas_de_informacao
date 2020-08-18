//////////////////////
/*   exe1 */
function exe1(n){
    var soma = Number(0)
    for (var i = Number(0); i <= n; i++){
        soma = soma + 1
    }
    return soma
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
    console.log(`Em segundos seu valor fica ${resultado}`)
}

function entrada2 (){
    console.log(`Por favor entre com 3 números Inteiros`)
    h = Number(prompt(`Insira o primeiro valor Inteiro`))
    m = Number(prompt(`Insira o segundo número`))
    s = Number(prompt(`Insira o terceiro valor`))
     
    return h, m, s
}

function calculo2 (){
    mh = (h * 60) + m /* horas para minutos + minutos */
    resultado = (mh * 60) + s /* minutos para segundos */ 

    return resultado
}
exe2()
/*=-=-=-=-=-=-=-=-=--=-=- exe3 -=-=-=-=--=-=-=-=--=-=-=-=-*/
function  exe3 (){
    entrada3()
    verificacao3(carac1, carac2)
    console.log(verificacao3())
}
function entrada3(){
    carac1 = prompt(`Insira a primeira cadeia de caracter`)
    carac2 = prompt(`insira sua segunda cadeia de caracter`)

    return carac1, carac2
}

function verificacao3(carac1, carac2){
    if (carac1 != carac2) {
        return  (carac1 != caract2).lenght
    } else {
        return 0   
    }
}
exe3 ()
/*=-=-=-=-=-=-=-=-=--=-=- exe4 -=-=-=-=--=-=-=-=--=-=-=-=-*/
function  exe4 (){
    entrada4()
    calculo4(raio)

    console.log(resultado)
}
function entrada4(){
    raio = prompt(`Informe-nos o raio da cicunferencia`)

    return raio
}

function calculo4(){
    resultado = (3/4) * raio

    return resultado
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

    return sexo, alt
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
    console.log(media)
}
function entrada7 (vet){
    var i = Number(0)
    do {
        vet[i].push(Number(prompt(`Insira o valor desejado`)))
        i++
    }
    while (vet < 0)
}
    media = 0

function calculo7 (vet){
    media = 0
    for (var i = Number(0); i <= vet.length; i++){
        media = vet[i] + media
    }
    media = media / vet.length
}
exe7()

/*=-=-=-=-=-=-=-=-=--=-=- exe8 -=-=-=-=--=-=-=-=--=-=-=-=-*/
function exe7 (){
    entrada8()
    calculo8(num)
}
function entrada8 (){
    num = Number(prompt(`Insira seu valor`))

    return num
}
function calculo8(num){
    
}