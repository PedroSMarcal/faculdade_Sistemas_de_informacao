//typescript é tipado

let motor: boolean;
motor = true;

let idade: number;
idade = 20;

let nome: string;
nome = "Pedro Henrique silva marçal"

let coisa: any; //recebe qualquer atributo
coisa = 10;
coisa = "dez";
coisa = true;

console.log(`Motor: ${motor}, idade: ${idade}, nome: ${nome}`)

// vetores ou arrays
const jogadores = ["lucas dias", "lucão", "georginho", "david jackson", "jonatan"]
const times: Array<String> = ["Sesi Franca", "São Paulo", "Bauru", "Pinheiros"]

console.log(`Jogadores ${jogadores}`)
console.log(`Times ${times}`)

// exemplo de interface 
interface Aluno{
    nome: string;
    nota: number;
    aprovado: boolean;
    situacao(): string; // funcao
}

let zeca: Aluno = {
    nome: 'Jose da Silva Xavier',
    nota: 9,
    aprovado: false,
    situacao: function () {
        if (this.aprovado){
            return ('Aprovado')
        }
        else{
            return ('Reprovado')
        }
    }
}

console.log(`${zeca.nome} ${zeca.nota} ${zeca.situacao()}`)

// inteface com classe
interface Saudacao{
    bomDia(): string;
    boaTarde(): string;
}

class Docente implements Saudacao{
    private nome: string

    constructor(nome: string){
        this.nome = nome;
    }

    bomDia(): string {
        return "Bom dia com alegria " + this.nome;
    }
    boaTarde(): string {
        return "Boa tarde a todos " + this.nome;
    }
}
let obj = new Docente("Pedro");
console.log(obj.bomDia())
console.log(obj.boaTarde())