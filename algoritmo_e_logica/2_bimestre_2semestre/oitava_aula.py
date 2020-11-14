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

#
cpf = str(input('Informe seu cpf, não utilize nenhum caracter especial \n'))
multiplica = 10
soma = 0
for i in range(9):
    soma += multiplica + int(cpf[i])
    multiplica -= 1

resto = soma % 11
codigo1 = 11 - resto
if resto == 0 or resto == 1:
    resto = 0

if codigo1 == int(cpf[10]):
    multiplica = 11
    soma = 0
    for i in range(10):
        soma += multiplica + int(cpf[i])
        multiplica -= 1

    resto = soma % 11
    codigo2 = 11 - resto

    if codigo2 == int(cpf[11]):
        print('CPF VÁLIDO')
    else:
        print('CPF INVÁLIDO')
 

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

#
#azer uma função que verifica se uma palavra, frase ou número é um palíndromo. Um palíndromo é qualquer sequência de caracteres que seja a mesma se lida da esquerda para a direita ou da direita para a esquerda. Por exemplo, a palavra “osso” é um palíndromo, pois é idêntica não importa o sentido da leitura.

def palindromo (palavra, palavra2, ta):
  if palavra == palavra2:
    print('A palavra é palíndromo')
  else:
    print('A palavra não é palíndromo') 

palavra = str(input('Informe a plavra e veremos se é um palíndromo: \n'))
tam = len(palavra)
for i in range(tam, 0, -1):
  palavra2 = palavra[i]
print(palavra2)

palindromo(palavra, palavra2, tam)
#palidromo(osso)

#F#aça um programa que preencha um vetor de N elementos inteiros com a sequência de Fibonacci (primeiro elemento é 1, segundo é 1 e em seguida, cada termo subsequente é a soma dos dois anteriores).

tam = int(input('Informe- o tamanho do vetor \n'))
vet = [1, 1]
x = 0

for i in range(2, tam, 1):
   x = vet[i-1] + vet[i-2]
   vet.append(x)

print(x)