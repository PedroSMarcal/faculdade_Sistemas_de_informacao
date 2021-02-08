/*LISTA 3*/
function exe0 (){
let matriz = [] // matriz é um vetor
let vetor = [] //vetor de alunos
// for (let i=0; i < 30; i++){
//    matriz[i] = []
//}
cadastra0(matriz, vetor)
calculaMedia0(matriz, vetor)
maiornota(matriz, vetor)
menornota(matriz, vetor)

}
function cadastra0 (mat, vet){
    for(let i = Number(0); i < 3; i++){ //quando alteramos mat alteramos a matriz
        let obj = new Object()
        obj.nome = prompt(`Informe o nome do aluno`)
        obj.codigo = Number(prompt(`Informe o codigo do aluno`))
        obj.media = Number(0)
        vet.push(obj)
        alert(`Informe quatro notas para o aluno ${i + 1}`)
        //criamos um vetor dentro da matriz
        mat[i] = []
        for (let j =Number(0); i < 4; i++){
            mat[i][j]= Number(prompt(`Nota ${j}`))
        }
    }
}
function calculaMedia0(mat, vet){
//vet auxiliar 
    for(let i = Number(0); i < 3; i++){ //quando alteramos mat alteramos a matriz
        for (let j =Number(0); i < 4; i++){
            vet[i] = vet[i] + mat[i][j]
        }
    vet[i] = vet[i] / 4
    }
console.log(`As Médias são ${vet}`)
}

function maiornota(mat, vet){ 
    for (let j = 0; j < 4; j++){
        let notagrande = [0][j]
        let notamaior = vet[0].nome
        for(let i = 0; j < 3; i++){
            if (notagrande < mat[i][j]  ){
                notagrande = mat[i][j]
                notamaior = vet[i].nome
            }
        }
    }
    console.log(`Aluno com maior nota ${j} e o nome de tal aluno foi ${maiornota}`)
}

function menornota(mat, vet){
    for (let i = 0; i < 3; i++){ // para cada aluno
        let notaAluno = mat[i][j]
        for (let j = 0; i < 4; j++){ //para cada nota
            if (mat[i][j] < notaAluno){
                notaAluno = mat[i][j]
            }
        }
        console.log(`O aluno ${vet[i].nome} tem menor nota ${notaAluno}`)
    }
}
/*
1- ANTES DOS CADASTROS DAS NOTAS SOLICITAR O NOME DO ALUNO
2- CALCULAR A MAIOR NOTA EM CADA PROVA E QUEM TIROU ESSA NOTA
3- A MENOR NOTA DE CADA ALUNO 
*/