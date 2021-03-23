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

    this.insert = function(position, element){
        if(position >= 0 && position <= length){
            var node = new Node(element),
            current = head,
            previous,
            index = 0

            if (position === 0){
                node.next = current
                head = node
            } else {
                while(index++ < position){
                    previous = current
                    current = current.next
                }
                node.next = current
                previous.next = node
            }
            length++
            return true
        } else {
            return false
        }
    }

    this.removeAt = function(position){
        if(position > - 1 && position < length){
            var current = head,
            previous,
            index = 0

            if (position === 0){
                head = current.next
            } else {
                while(index++ < position){
                    previous = current
                    current = current.next
                }
                previous.next = current.next
            }
            length--
            return current.element
        } else {
            return null
        }
    }

    this.remove = function(element){ // Retira apenas 1
        var index = this.indexOf(element)
        console.log(index)
        return this.removeAt(index)
    }

    this.indexOf = function(element){
        current = head
        index = 0

        while(current){
            if (element === current.element){
                return index
            }
            index++
            current = current.next
        }
        return -1
    }

    this.isEmpty = function(){
        return length === 0
    }

    this.size = function(){
        return length
    }

    this.getHead = function(){
        return head 
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