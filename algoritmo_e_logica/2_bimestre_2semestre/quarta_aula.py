# while

i = 0

while(i < 10):
    print(i)
    i = i + 1

# exemplo
conta = 0
x = 2
while(conta < 5):
    print(x)
    conta += 1
else:
    print('Valor da var conta é {}'.format(conta))

#Vetor
vet = []

N = int(input('Informe o valor de parada'))
#append atribui para o vetor
for i in range(N):
    vet.append(int(input('Informe o valor')))

print(vet)

for i in range(N):
    print(vet[i])

# EXERCICIOS

'''
Construa um programa que calcule a média aritmética de um conjunto de números pares que forem fornecidos pelo usuário. O valor de finalização será a entrada do número 0 (zero). Observe que nada impede que o usuário forneça quantos números ímpares quiser, com a ressalva de que eles não poderão ser acumulados.
'''

indice = soma = 0
resp = int(input('Insira o valor Inteiro desejado \n'))
while(resp != 0):
    if (resp % 2 == 0):
        soma += resp
    indice += 1
    resp = int(input('Insira o valor Inteiro desejado \n'))    

if(indice == 0):
    print('Não há valores')
else:
    print('A média é {}'.format(soma/indice))

'''
Fazer um programa para que ele imprima a tabuada de quaisquer números, sendo que esses são fornecidos pelo usuário, até encontrar como finalizador o número -1.
'''
print('Você pode parar o progrma com -1 \n')

resp = int(input('Insira o valor da tabuada \n'))

while(resp != -1):
    for n in range(1, 11):
        print('{} : {} = {}'.format(resp, n, resp * n))
    resp = int(input('Insira o valor da tabuada desejada \n'))

'''
Considere um programa que calcule a média aritmética geral de uma classe de alunos e imprima a quantidade de notas que estão acima da média calculada. O usuário deve entrar com a quantidade de alunos.
'''

qntAlunos = int(input('Insira a quantidade de alunos \n'))
mediaAlun = []
i = soma = 0
n1 = 0    
while(i < qntAlunos):
    n1 = int(input('Informe-nos a media aritmetica do {}° aluno \n'.format(i + 1)))
    mediaAlun.append = n1
    soma += n1  
    i += 1

media_esc = soma / qntAlunos

print('A media escolar é de {}'.format(media_esc))



'''
Fazer um programa que leia um vetor de 20 números inteiros e determine qual o maior e o menor número do vetor e imprima os dois valores.
'''

'''
Crie um programa que leia um vetor de 20 números inteiros e em seguida divida estes números em outros 2 novos vetores, separando os números pares dos números ímpares.
'''