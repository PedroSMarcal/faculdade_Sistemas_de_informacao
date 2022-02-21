/*
W3SCHOOLS
*/

function chefe(){
    var vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    let a = prompt(`Informe-nos qual exe você deseja`)
    switch (a){
         //exe1
        case 1:  vetor.forEach(exe1)
            break
        //exe 2    
        case 2: var novo = vetor.map(exe2)
                console.log(novo)
            break
        //exe 3
        case 3: var novo2 = vetor.filter(exe3)
                console.log(novo2)
            break
        //exe 4
        case 4: var novo3 = vetor.filter(exe4)
                console.log(novo3)
            break
        //exe 5
        case 5: var novo4 = vetor.filter(exe5)
                console.log(novo4)
            break
        //exe 6
        case 6: var novo5 = vetor.filter(exe6)
                console.log(novo5)
            break

        default: console.log(`exercicio inválido`)
    }
}

//forEach
function exe1 (vet, pos){
    if (pos % 2 == 1) {
        console.log(`${vet} está em posição impar`)
    }
}

//Map
function exe2 (vet){
    return vet + 10
}

//função filter (filtra o vetor para determinado valores)
function exe3 (vet){
    return vet >= 5
}

//aprendizado com filter
function exe4 (vet){
    return vet <= 2
}

//teste com filter com mais de um paramentro
function exe5 (vet, pos){
    return ((vet <= 2) && (pos <= 3))
}

// reduce (reduz todos os elementos a sua soma, passar como parametro var total)
function exe6 (total, vet){
    console.log(`valores parciais do total ${total}`)
    return total + vet
}
/*----------------------EXERCICO PROPOSTO----------------------------*/
chefe ()
function chefe (){
    //vetor teste 
    let vetor = [3,2,4]
    //let vetor = [3, 4, 6, 2, 3, 9]
    let novo = vetor.reduce(exe1)
    console.log(`valor final ${novo}`)

}
//reduce recebe total, elemento, e a posição
function exe1 (total, elem, indice){ // a posição é do elemento e não do total
    console.log(total)
    //Regra viniscius onde no primeiro elemento o valor deve ocorrer de forma diferente 
    //na qual fazemos o totlal - a operação no elemento
    if (indice === 1){
       return ((total + 1) * total) - ((elem + 1) * elem)
    }
    return total - ((elem + 1) * elem)
}

/*
W3SCHOOL estudar o site 
https://www.w3schools.com/js/js_es5.asp

aprender a utilizar some()
aprender a utilizar indexOf()
aprender a utilizar parse()
aprender a utillizar stringify()
arrow function
Classes
*/



