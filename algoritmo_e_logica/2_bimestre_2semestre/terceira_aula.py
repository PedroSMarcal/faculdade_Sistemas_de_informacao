#Lista 
lista = [1, 2, 3]

print('{}'.format(lista))
#concatenar lista
lista = lista + [4]

print('{}'.format(lista))

lista = lista + [0, 0, 0]
print(lista)

lista[1] = lista[1] + lista[2]
print(lista)

# FOR = para(visualg)
#                   valor que comça, até quando, e passo; ou o default que você indica apenas o tamanho exe:
#for numero in range(10):
#for numero in range(3, 10):

for numero in range(1, 10, 1):
    print(numero)

# for

nomes = ['Ana', 'José', 'Paulo']

#quando não há o tamanho exato ou etc.
for n in nomes:
    print(n)

l = [3, 6, 8, 9]

for num in l:
    if num > 7:
        print(num)

#EXERCICIOS
# 1
#Faça um programa que efetue a soma de todos os números ímpares que são múltiplos de 3 e que se encontram no conjunto dos números de 1 até 500.

soma = 0
for num in range(1, 500, 1):
    if num % 3 == 0 and num % 2 != 0:
        soma = num + soma
print('A soma é de {}'.format(soma))

# ou

soma = 0
for num in range(0, 500, 3):
    if num % 2 != 0:
        soma = num + soma

print("A soma é de {}".format(soma))

# 2
#Construa um programa que calcule a média aritmética de um conjunto de números pares fornecidos pelo usuário. O usuário irá fornecer um total de 10 números. Observe que nada impede que o usuário forneça quantos números ímpares quiser, com a ressalva de que eles não poderão ser acumulados.
indice = 0
pares = 0
valor = 0
for num in range(10):
    valor = int(input('Informe-nos o valor \n'))
    if (valor % 2 == 0):
        indice = indice + 1
        pares = valor + pares
        # pares += valor

if indice == 0:
    print('Não Há pares')
else:
    print('A média aritimetica é {}'.format(pares/indice))

# 3
'''
Fazer um programa que simule uma
contagem regressiva de 10 minutos, ou
seja, mostre: 10:00, 9:59, 9:58, 9:57, ...,
8:59, 8:58, até 0:00.
'''

min = 10
#sec = 60

print('{:6}'.format('10 : 00'))
for n in range(1, 540, 60):
    min -= 1
    sec = 60
    for i in range (1, 61):
        print('{} :  {:2}'.format(min, sec - i))

# 4
'''
Construa um programa que calcule a
média aritmética de um conjunto de
números pares que forem fornecidos
pelo usuário.
O valor de finalização será a entrada do
número 0 (zero).
Observe que nada impede que o
usuário forneça quantos números
ímpares quiser, com a ressalva de que
eles não poderão ser acumulados.
'''
print('O programa só parara quando for inserido 0')
while (valor != 0):
    valor = int(input('Insira o valor'))
