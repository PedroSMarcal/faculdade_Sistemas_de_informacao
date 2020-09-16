//cadastrar matriz de 4 times, nome, e quantos pontos no jogo 0 a 3 e cidade time
function principal(){
    matriz = [] //times
    matrizpontos = [] //pts do time
    cadastro(matriz, matrizpontos) 
    Media(matriz, matrizpontos)
    maisPontosRodada(matriz, matrizpontos)
}
function cadastro(mat, matp){
    for (let i = Number(0); i < 4; i++){ // para cada time
        let times = new Object()
        times.nome = prompt(`Insira o nome do time`)
        times.cidade = prompt(`Insira a cidade do time apresentado`)
        /*for (let j = Number(0); j < 3; j++){
            ponto = Number(prompt(`Insira o valor do ${j}° jogo`)) + ponto
        }*/
        //times.pontos = ponto/j
        times.pontos = Number(0)
        matp[i] = []
        for (let j = 0; j < 3; i++){
            mat[i][j] = Number(prompt(`Quantos pontos no jogo ${j + 1}`))
        }
    }

}
function media(mat, matp){
    for (let i = 0; i < 4; i++){
       /* let ponto = Number(0)
        for (let j = 0; j < 3; j++){
            ponto = mat[i][j] + ponto
        }
        matp[i].pontos = ponto/3
    }
    console.log(`a média do time ${matp}`)*/
    vet[i].media
    }
}
function maisPontosRodada (mat, matp){ 
    for (let i = 0; i < 4; i++){
        let pontorodada = matp[0][j]
        let nomemais = mat[0].nome
        for (let j = 0; j < 4; i++){
            if (pontorodada < matp[i][j]){
                pontorodada = matp[i][j]
                nomemais = mat[i].nome
            }
        }   
    console.log(`O time com mais pontos na rodada ${i}° foi o ${nomemais} com ${pontorodada}`)     
    }
}