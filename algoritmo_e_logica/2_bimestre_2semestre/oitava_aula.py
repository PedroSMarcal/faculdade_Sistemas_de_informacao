'''
Construa um algoritmo que verifique se o número de um CPF é válido. O número do CPF é composto de 11 dígitos, sendo os dois últimos os dígitos de verificação, que têm por objetivo verificar se o CPF é válido. A fórmula para verificar a validade do CPF é explicada a seguir:
- 1º Dígito Verificador
Primeiro calcula-se a soma da multiplicação dos 9 primeiros dígitos por 10, 9, 8, ... , 3, 2, respectivamente. 
Em seguida obtém-se o resto da divisão deste número por 11 (Resto = Soma  mod  11).
Agora se analisa o Resto:
Se Resto for igual a 1 ou a 0, então o 1º dígito verificador é 0.
Caso contrário, o 1º dígito verificador é o resultado da subtração de Resto de 11, ou seja,  11-Resto.
148-337-898-50
'''
cpf = str(input('Informe seu cpf, não utilize nenhum caracter especial \n'))
tam = len(cpf) 
cpfvet = []
for i in range(tam):
    cpfvet.append(cpf[i]) 

for i in range(tam):
    cpfvet[i] = int(cpfvet[i])
print(cpfvet)
soma = 0

lista = [10, 9, 8, 7, 6, 5, 4, 3, 2]
for i in range(9):
    soma = soma + (cpfvet[i] * lista[i])

resto = (soma % 10)

if resto == 1 or resto == 0:
    resto = 0

print(resto)
if (resto == cpfvet[9]):
    print('Ta certo o Cpf')
else:
    print('Ta errado o cpf')

#//////////////////////////////////////////////
#Fazer uma função que receba o valor de N como parâmetro, calcular e retorne o valor do somatório S: S = 1 + 2/4 + 3/9 + 4/16 + … + N/(N*N)

def somatório (n):
    cont = 1
    s = 0
    while (cont <= n):
        s = s + (cont / (cont * cont))
        cont += 1
    else:
        print('Programa Finalizado')
    return s

n = int(input('Informe o número desejado \n '))

if n > 0:
  print('O valor do somatorio é {:.2f}'.format(somatório(n)))
else:
  print('Não há valor a ser dividido por 0 ou número menor que 0')

#////////////////////////////
#Fazer um programa que leia 30 notas e calcule quantas são 20% acima da média e quantas são 20% abaixo da média.
notas = []
soma = 0
for i in range(3):
    notas.append(int(input('Inoforme-nos a nota \n')))
    soma = soma + notas[i]

media = soma / 3
vinteporcento = (media * 20) / 100

somamenor = 0
for i in range(3):
    if notas[i] < media - vinteporcento:
        somamenor += 1
    
somamaior = 0
for i in range(3):
    if notas[i] > media + vinteporcento:
        somamaior += 1
    
print('As quantidade de notas acima de 20 porcento são {} e a quantidade de notas abaixo é {}'.format(somamaior, somamenor))
print('A diferença são as notas que ão foram nem acima nem abaixo da media')