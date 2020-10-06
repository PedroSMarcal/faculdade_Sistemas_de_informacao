                                                            /*LISTA 3*/
function exe0 (){
    let matriz = [] // matriz é um vetor
    matriz[0] = [] //linha 0
    matriz[1] = [] //linha 1
    matriz[2] = [] //linha 2
    // for (let i=0; i < 30; i++){
    //    matriz[i] = []
    //}
    cadastra0(matriz)
    calculaMedia0(matriz)

}
function cadastra0 (mat){
    for(let i = Number(0); i < 3; i++){ //quando alteramos mat alteramos a matriz
        alert(`Informe quatro notas para o aluno ${i + 1}`)
        for (let j =Number(0); i < 4; i++){
            mat[i][j]= Number(prompt(`Nota ${j}`))
        }
    }
}
function calculaMedia0(mat){
    //vet auxiliar 
    let vetor = [0, 0, 0]
    for(let i = Number(0); i < 3; i++){ //quando alteramos mat alteramos a matriz
        for (let j =Number(0); i < 4; i++){
            vet[i] = vetor[i] + mat[i][j]
        }
        vetor[i] = vetor[i] / 4
    }
    console.log(`As Médias são ${vetor}`)
}

/*
    1- ANTES DOS CADASTROS DAS NOTAS SOLICITAR O NOME DO ALUNO
    2- CALCULAR A MAIOR NOTA EM CADA PROVA E QUEM TIROU ESSA NOTA
    3- A MENOR NOTA DE CADA ALUNO 
*/