#função 

# def 'Nome' (parametros):
#   comandos

def pedro ():
    print('pedro')

print (pedro())

#exemplo
def hello (meu_nome, idade):
    print('Olá {}! Sua idade é {}'.format(meu_nome, idade))

hello('ana', 25)

nome = input('Nome: \n')
idade = int(input('Idade:  \n'))

hello(nome, idade)

#segundo exemplo
def soma (a, b):    
    s = a + b 
    #print('A soma é {}'.format(s))
    return s

x = int(input('1° valor \n'))
y = int(input('2° valor \n'))
soma(x, y)

resp = soma(x, y)
print(soma(x, y))
print('A soma é {}'.format(resp))

media = resp / 2
print('A media é {:2f}'.format(media))
#
x = 2
y = 3

def somar (n1, n2):
  return n1 + n2

resp = somar(x, y) / 2
print(resp)

#-------------------------------------------
x = int(input('1° valor \n'))
y = int(input('2° valor \n'))

def menorMaior (n1, n2):
    if (n1 > n2):
        print('O menor valor é: {}'.format(n2))
    elif (n1 < n2):
        print('O menor valor é: {}'.format(n1))
    else:
        print('São Iguais')

menorMaior(x, y)

#soma vetor em função
def somado (vet):
    s = 0
    for i in range(5):
        s += vet[i]
    return s

vet= []
for i in range(5):
    vet.append(int(input('Informe-nos o valor')))

resp = somado(vet)
print('A soma é: {}'.format(resp))

#--------------------------------------------EXERCICIOS
#Fazer uma função que calcule a média dos elementos de um vetor.
vetor = []

print('Para parar de inserir valores no vetor insira 0')
valor = int(input('Informe-nos o valor \n'))
while (valor != 0 ):
    vetor.append(valor)
    valor = int(input('Informe-nos o valor \n'))

tam = len(vetor)
def somamedia (vet, ta):
    s = 0
    for i in range(tam):
        s += vet[i]
    return s

total = somamedia(vetor, tam)
if(tam != 0):
    print('A soma total dos valores no vetor é: {}, e a media é: {}'.format(total, total/tam))
else: 
    print('Não há valores no vetor')

#Fazer uma função que retorne o maior elemento de um vetor.
vetor = []
valor = int(input('Informe-nos o valor \n'))
while (valor != 0 ):
    vetor.append(valor)
    valor = int(input('Informe-nos o valor \n'))

tam = len(vetor)
def maiorlemento (vet, ta):
    s = vet[1]
    for i in range(ta):
        if (vet[i] > s):
            s = vet[i]
    return s

resp = maiorlemento(vetor, tam)
print('o maior elemento foi: {}'.format(resp))

#Fazer uma função que retorne o menor elemento de um vetor.
vetor = []
valor = int(input('Informe-nos o valor \n'))
while (valor != 0 ):
    vetor.append(valor)
    valor = int(input('Informe-nos o valor \n'))

tam = len(vetor)
def menorElemento (vet, ta):
    s = vet[1]
    for i in range(ta):
        if (vet[i] < s):
            s = vet[i]
    return s

resp = menorElemento(vetor, tam)
print('o menor elemento foi: {}'.format(resp))

#Calcular a média dos valores das posições ímpares de um vetor. Passar o vetor como parâmetro e retornar a média.  
vetor = []
valor = int(input('Informe-nos o valor \n'))
while (valor != 0 ):
    vetor.append(valor)
    valor = int(input('Informe-nos o valor \n'))

tam = len(vetor)

def mediaImpar (vet, ta):
    f = 0
    for i in range(ta):
        if (i % 2 != 0):
            f += vet[i]
    return f / ta

resp = mediaImpar(vetor, tam)
print('A média é de {}'.format(resp))