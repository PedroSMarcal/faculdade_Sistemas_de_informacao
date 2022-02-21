// EXERCICIO DE FILA 1

class Fila {
    fila; 

    constructor (fila) {
        this.fila = [];
    }

    append(item){
        this.fila.push(item);
    }

    delete(){
        this.fila.shift();
    }

    show(){
        for (let i = 0; i < this.fila.length; i++){
            console.log(this.fila[i]);
        }
    }

    size(){
        console.log(this.fila.length);
    }

    isEmpty(){
        if (this.pilha === 0){
            console.log("true")
        }
        else {
            console.log("false")
        }
    }

}

let obj1 = new Fila()
run = true
while (run == true) {
    let choice = String(prompt('Menu \n [A]- adicionar elementos \n [B]- Apresentar \n [C]- Deletar o primeiro elemento \n [D]- Mostrar quantos elementos o objeto existe \n [E]- Sair'))
switch (choice) {
    case 'A': 
    qntd = Number(prompt('Quantos elementos a ser inserido'))
    if (qntd == 0) {
        console.log('Obrigado por nada') 
    }
    else {
        for (let i = Number(0); i < qntd; i++){
            obj1.append(prompt('Informe o valor'))
        }
    };
        break;
    case 'a':
    qntd = Number(prompt('Quantos elementos a ser inserido'))
    if (qntd == 0) {
        console.log('Obrigado por nada') 
    }
    else {
        for (let i = Number(0); i <= qntd; i++){
            obj1.append(prompt('Informe o valor'))
        }
    };
        break;
    case 'B': obj1.show()
        break;
    case 'b': obj1.show()
        break;
    case 'C': obj1.delete()
        break;
    case 'c': obj1.delete()
        break;
    case 'D': obj1.size()
        break;
    case 'd': obj1.size()
        break;
    case 'e':
        run = false;
        break;
    case 'E':
        run = false;
        break;
    }
}


// ---------------------------------
// PILHA 

class Pilha{
    constructor(pilha){
        this.pilha = []
    }

    append(item){
        this.pilha.push(item);
    }

    delete(){
        this.pilha.pop();
    }

    len(){
        console.log(this.pilha.length);
    }

    show(){
        for (let i = 0; i < this.pilha.length; i++){
            console.log(this.pilha[i]);
        }
    }

    isEmpty(){
        if (this.fila === 0){
            console.log("true")
        }
        else {
            console.log("false")
        }
    }
}

let obj2 = new Pilha()
run = true
while (run == true) {
    let choice = String(prompt('Menu \n [A]- adicionar elementos \n [B]- Apresentar \n [C]- Deletar o ultimo elemento \n [D]- Mostrar quantos elementos o objeto existe \n [E]- Sair'))
switch (choice) {
    case 'A': 
    qntd = Number(prompt('Quantos elementos a ser inserido'))
    if (qntd == 0) {
        console.log('Obrigado por nada') 
    }
    else {
        for (let i = Number(0); i < qntd; i++){
            obj2.append(prompt('Informe o valor'))
        }
    };
        break;
    case 'a':
    qntd = Number(prompt('Quantos elementos a ser inserido'))
    if (qntd == 0) {
        console.log('Obrigado por nada') 
    }
    else {
        for (let i = Number(0); i < qntd; i++){
            obj2.append(prompt('Informe o valor'))
        }
    };
        break;
    case 'B': obj2.show()
        break;
    case 'b': obj2.show()
        break;
    case 'C': obj2.delete()
        break;
    case 'c': obj2.delete()
        break;
    case 'D': obj2.len()
        break;
    case 'd': obj2.len()
        break;
    case 'e':
        run = false;
        break;
    case 'E':
        run = false;
        break;
    }
}

