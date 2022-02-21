function LinkedList(){
    var Node = function(element){
        this.element = element
        this.next = null
    }

    var length = 0
    var head = null

    this.append = function(element){
        var node = new Node(element), 
        current

        if (head === null){
            head = node
        } else {
            current = head

            while (current.next){
                current = current.next
            }

            current.next = node
        }
        length++
    }

    this.insert = function(position, element){ //passo a posição eo elemetno
        if(position >= 0 && position <= length){ //checa se a posicao é valida
            var node = new Node(element),
            current = head,
            previous,
            index = 0

            if (position === 0){ //checa se a posição é 0
                node.next = current //inclui na cabeça
                head = node // Deslocou a lista para direita e inseri um elemento na cabeça
            } else {
                while(index++ < position){ //anda dentro do elemento da lista até encontrar o elemento
                    previous = current
                    current = current.next
                }
                node.next = current //Inserção do elemento na lista
                previous.next = node
            }
            length++ //Como ele inseriu ele incrementa o tamanho da lista encadeada
            return true
        } else {
            return false
        }
    }

    this.removeAt = function(position){
        if(position > - 1 && position < length){ //Checa se a posição é valida
            var current = head, //Declara uma variavel e dala que o no atual é cabeça
            previous,
            index = 0

            if (position === 0){
                head = current.next // Cabeça recebe o elemento atual.next
            } else {
                while(index++ < position){ // Anda dentro do vetor até encontrar o elemento
                    previous = current //Nó anterior recebe o nó corrente
                    current = current.next
                }
                previous.next = current.next
            }
            length-- //removeu um nó ele tem que decrescer tamanho do "vetor"
            return current.element
        } else {
            return null
        }
    }

    this.remove = function(element){ // Retira apenas 1
        var index = this.indexOf(element) //Precisa achar a posição do elemento a ser removido
        console.log(index) //Declara o elemento inicial da busca como sendo a cabeça
        return this.removeAt(index) //Declara o index como 0
    }

    this.indexOf = function(element){ //Busca onde o elemento está
        current = head //Declara o elemento inicial da busca como sendo a cabeça
        index = 0 // declara o index como 0

        while(current){ //enquanto nó atual...
            if (element === current.element){ //elemento que é o cara que passei como parametro é igual ao elemetno atual
                return index // Se for eu retorno o Index
            }
            index++
            current = current.next //Anda para o proximo nó
        }
        return -1
    }

    this.isEmpty = function(){
        return length === 0 //Verifica se o length ===0
    }

    this.size = function(){
        return length
    }

    this.getHead = function(){
        return head //retorna cabeça
    }

    this.toString = function(){
        var current = head
        string = ''

        while(current){
            string += current.element + ''
            current = current.next
        }

        return string
    }

    this.print = function(){
        console.log(this.toString())
    }
}

var lista = new LinkedList()

//Objeto é um pedaço na memoria ->
// Nó é um objeto com duas variaveis um elemento que armazena uma informação e um endereço
// Quando o objeto não está ligado a nada, o gabage collector remove da memoria;

lista.append("1") // [1 | endereço de um objeto que é o objeto 2] -> nó
lista.append("2") // [2 | endereço de um objeto que é o objeto 2] -> nó .. linkado com o debaixo
lista.append("2") // [2 | endereço de um objeto que é o objeto 2] -> nó .. linkado com o debaixo
lista.append("2") // [2 | endereço de um objeto que é o objeto 3] -> nó .. linkado com o debaixo
lista.append("3") // [3 | endereço de um objeto que é o objeto 4] -> nó .. linkado com o debaixo
lista.append("4") // [4 | endereço de um objeto que é o objeto null] -> nó .. linkado com o debaixo 

lista.print()

lista.remove("3")

lista.print()

lista.insert("3", "5")

lista.print()

lista.remove("5")

lista.print()

/**
 * CASO EXISTIR DOIS ELEMENTOS CRIAR UMA LISTA ENCADEADA ONDE HOUVER COLISÕES
 * CHECAR SE HOUVE COLISÃO, SE HOUVER COLISÃO DAR APPEND
 * 
 * Livia
 * astolfo
 * 
 * Daniel
 * Carlão
 * Carlos
 */