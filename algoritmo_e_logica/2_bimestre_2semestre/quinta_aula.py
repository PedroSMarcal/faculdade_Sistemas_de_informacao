
'''
Fazer um programa que leia um vetor de 20 números inteiros e determine qual o maior e o menor número do vetor e imprima os dois valores.
'''

vet = []
 
for i in range(20):
    vet.append(input('informe os valores'))

for i in range (20):
    print(vet[i])



##EXERCICIOS

'''
Fazer um programa que imprima o valor da expressão: 2/3 + 3/5 + 4/7 + 5/9 + … + n/m, para um valor de n definido pelo usuário. Verifique se o valor de n definido pelo usuário é positivo e, caso não seja, solicite outro valor até ser fornecido um valor positivo.
'''

n = int(input('Informe o valor desejado positivo \n'))
n1 = 2
n2 = 3
resp = 0
if (n >= 0):
    while((n1 <= n)):
        for i in range(n):
            resp = (n1 / n2) + resp
            n1 += 1
            n2 += 2
    else:
        print('{:2}'.format(resp))
else: 
    n = int(input('Informe o valor desejado positivo \n'))


print('A resposta final é: {}'.format(resp))


n = int(input('Informe o valor desejado positivo \n'))
n1 = 2
n2 = 3
resp = 0
while (n <= 0):
    n = int(input('Informe o valor desejado positivo \n'))
else:
    while((n1 <= n)):
        for i in range(n):
            resp = (n1 / n2) + resp
            n1 += 1
            n2 += 2

print('A resposta é {}'.format(resp))

'''
Fazer um programa que armazene números em um vetor até que o usuário digite 0 (zero). Depois, substitua todas as ocorrências de valores positivos por 0 e de valores negativos por -1.
'''

vet = []
valor = 1
valor = int(input('Insira o valor a ser inserido \n'))
while (valor != 0):
    vet.append(valor)
    valor = int(input('Insira o valor a ser inserido \n'))

tam = len(vet)

for i in range(tam):
    if (vet[i] > 0):
        vet[i] = 0
    else:
        vet[i] = -1

for i in range(tam):
    print('o valor na posilçao {} é: {}'.format(i, vet[i]))

'''
Fazer um programa que insira 15 elementos em um vetor e encontre o menor valor e o segundo menor valor do vetor.
'''

vet = []
for i in range (5):
    vet.append(int(input('Informe-nos o valor \n')))

primMenValor = vet[0]
segMenValor = vet[0]

for i in range (5):
    if(vet[i] < primMenValor):
        primMenValor = vet[i]

for i in range (5):
    if(vet[i] < segMenValor) and (vet[i] > primMenValor):
        segMenValor = vet[i]

print('O menor valor é {} e o segundo menor é {}'.format(primMenValor, segMenValor))

'''
Fazer um programa que imprima os valores até a N-ésima linha (no formato apresentado na imagem abaixo) para um N fornecido pelo usuário.
'''

n = int(input('Informe até que linha  você deseja'))
n1 = 0
while (n != n1):
    n1 += 1    

