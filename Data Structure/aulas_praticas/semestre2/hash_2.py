#https://medium.com/edureka/arrays-in-python-14aecabec16e
table = []
class HashTable ():

    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.toString = self.function()

    def function(self):
        return ('[' +  self.key + ' - ' + self.value + ']')
    
    def loseloseHashCode(self):
        hashi = 0
        for i in range(len(self.key)):
            hashi += ord(self.key[i])
        return hashi

    def put (self):
        position = self.loseloseHashCode()
        print(position + ': ' + self.key)
        table.insert(position, self.key) 

    def remove (self):
        position = loseloseHashCode()
        table.pop(position)
    

    def get(self):
        return table.loseloseHashCode(self.key)

    def show (self):
        for i in range(len(table)):
            if table[i] != '' :
                print(i +  ' : ' + table[i])

teste1 = HashTable("Livia", "Livia")
teste1.show()
teste1.put()

