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
        console.log(length(this.pilha));
    }

    show(){
        console.log(this.fila);
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

