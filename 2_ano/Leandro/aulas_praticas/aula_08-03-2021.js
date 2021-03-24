function Hastable (){
    var table = []

    var ValuePair = function(key, value){
        this.key = key
        this.value = value //Só pode receber receber 1 cara por vez -> [astolfo, Livia]
        this.toString = function(){
            return '[' + this.key + ' - ' + this.value + ']'
        }
    }

    this.put = function(key, value){
        var position = loseloseHashCode(key)
        console.log(position + ' ' + key)
        table[position] = value
    }

    this.remove = function(key){
        table[loseloseHashCode(key)] = undefined
    }

    this.get = function(key){
        return table[loseloseHashCode(key)]
    }

    var loseloseHashCode = function(key){
        var hash = 0
        for(var i = 0; i < key.length; i++){
            hash += KeyboardEvent.charCodeAt(i)
        }

        return hash % 37
    }

    this.print = function(){
        for(var i = 0; i < key.length; i++){
            if(table[i] !== undefined){
                console.log(i + ' : ' + table[i])
            }
        } 
    }

    this.size = function(){
        return table.length()
    }
}

var Hastable = new Hastable()

hashtable.put("Leandro")
hashtable.put("astolfo")
hashtable.put("Livia")

/*
x = "3"
x = x.charCodeAt()
console.log(x)
*/