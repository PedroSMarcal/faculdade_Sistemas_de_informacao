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

}
/*=-=-=-=-=-=-=-=-=--=-=- exe4 -=-=-=-=--=-=-=-=--=-=-=-=-*/
function  exe4 (){

}
/*=-=-=-=-=-=-=-=-=--=-=- exe4 -=-=-=-=--=-=-=-=--=-=-=-=-*/
function  exe5 (){
    entrada5()
    verificacao5()
}
function entrada5 (){
    var numero = Number(prompt(`Insira seu valor e diremos se é negativo ou positivo`))

}
