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
        this.fila.shift()
    }

    show(){
        console.log(this.fila)
    }

    size(){
        console.log(length(this.fila))
    }

}

let obj = new Fila()

let choice = String(prompt('Menu \n [A]- adicionar elementos \n [B]- Apresentar \n [C]- Deletar o primeiro elemento \n [D]- Mostrar quantos elementos o objeto existe \n [E]- Sair'))
switch (choice) {
    case 'A': 
    qntd = Number(prompt('Quantos elementos a ser inserido'))
    if (qntd == 0) {
        console.log('Obrigado por nada') 
    }
    else {
        for (let i = Number(0); i <= qntd; i++){
            obj.append(prompt('Informe o valor'))
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
            obj.append(prompt('Informe o valor'))
        }
    };
        break;
    case 'B': obj.show()
        break;
    case 'b': obj.show()
        break;
    case 'C': obj.delete()
        break;
    case 'c': obj.delete()
        break;
    case 'D': obj.size()
        break;
    case 'd': obj.size()
        break;
}

