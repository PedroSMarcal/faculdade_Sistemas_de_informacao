#escreva em python
print('Hello World!!!')

#input o que vai ler e após você apresenta a mensagem
#\n faz a quebra de linha semelhante ao JS
nome = input('Qual o seu nome \n')

#simbolo de percentual para trocar a variavel
print('Olá %s!' %nome)

#forma normal de se escrever
print('Olá', nome, '!')

#se coloca chaves onde será colocado a var, e .format(var) para colocar a var desejada
print('Olá {}'.format(nome))

#receber idade
#int numero inteiro
idade = int(input('Indique sua idade \n'))

#receber nota
#float número real 
nota = float(input('Indique a nota \n'))

#mais de uma var no print usando percenntual se usa %(var1, var2, var3) na ordem indicada 
# %s = string
# %d = decimal
# %f = float (.quantas casas a ser exibidas) 
print('%s possui a idade %d anos e nota %.2f' %(nome, idade, nota))

print(nome, 'possui', idade, 'anos e sua nota é', nota)

#colocar indice quando for mais de uma vez
print('{0} possui {1} anos e nota {2:.2f}'.format(nome, idade, nota))

#exemplo com cor
print('\033[1;34m''O aluno {}, com idade de {} anos, possui a nota {:.2f}'.format(nome, idade, nota))


#------------------------------------------------------------------------------------------------
#adição = +
#subtração = -
#multiplicação = *
#divisão = /
#resto da divisão = //
#mod = %

#Para string o + contatena, enquanto o * é a repetição

#------------------------------------------------------------------------------------------------
#primeiro teste
primeior = '100'
segundo = '200'
print(primeior + segundo)
print(primeior * 3)
print(segundo * 2)

#segundo teste
a = int(input('Digite um numero \n'))
b = int(input('Digite um numero \n'))

c = a + b

print(c)
#------------------------------------------------------------------------------------------------
#exercicios
#1
n1 = int(input('Informe-nos o número desejado \n'))
n2 = int(input('Informe-nos o número desejado \n'))

media = (n1 + n2) / 2

print('A média dos valores são {}'.format(media))

#2
n1 = int(input('Informe-nos o número \n'))
ant = n1 - 1
suc = n1 + 1
print('O valor sucessor é {}, enquanto o antecessor é {}'.format(suc, ant))

#ou 

n1 = int(input('Informe-nos o número \n'))

print('O valor sucessor é {0}, enquanto o antecessor é {1}'.format(n1 + 1, n1 - 1))