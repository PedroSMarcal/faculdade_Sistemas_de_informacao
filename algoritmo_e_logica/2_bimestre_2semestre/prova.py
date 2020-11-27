#EXERCICIO 1
'''
Nome: Pedro Henrique Silva Marçal
Codigo: 22646
Curso: Sistemas de Informação
'''
#acrescimo do salario caso o usuario tenha nenhum filho
def acrescimo1(s, nome):
    s = (s * 10 / 100) + s
    print('O novo salário do funcionario {}, é de: {:.2f}'.format(nome, s))

#acrescimo do salario caso o usuario tenha 1 ou 2 filhos
def acrescimo2(s, nome):
    s = (s * 15 / 100) + s
    print('O novo salário do funcionario {}, é de: {:.2f}'.format(nome, s))
        

#acrescimo do salario caso tenha mais de 3 filhos
def acrescimo3(s, nome):
    s = (s * 20 / 100) + s
    print('O novo salário do funcionario {}, é de: {:.2f}'.format(nome, s))


#testar os valores de entrada
def testeFilhos(n):
    if n < 0:
        print('É impossivel dever filhos insira a quantidade psitiva ou 0')
        while n < 0:
            n = int(input('Informe a quantidade de filhos: '))
        else:
            print('A quantidade de Filhos agora é aceitavel')
        return n 
    else:
        print('Quantidade de filhos Válida')
        return n 

#entrada de valores para o teste
nome = str(input('Informe o nome do funcionario: '))
salario = float(input('Informe o salário: '))
qntd = int(input('Informe a quantidade de filhos: '))

#chamar funções
qntd = testeFilhos(qntd)

#escolher a função a se usar
if qntd == 0:
    acrescimo1(salario, nome)
elif qntd > 0 and qntd <= 2:
    acrescimo2(salario, nome)
else:
    acrescimo3(salario, nome)

#EXERCICIO 2

'''
Fazer um programa em Python que crie um menu contendo as seguintes opções (cada opção deve ser um subprograma):

a) Calcule e retorne a área de um triângulo, sendo área = (base * altura)/2. A base e a altura devem ser passadas como parâmetro.

b) Calcule e retorne a soma dos elementos ímpares de um vetor de 80 elementos, passado como parâmetro.

c) Determine e retorne se um número, passado por parâmetro, é ou não primo. Um número primo é aquele que é divisível apenas por um e por ele mesmo
'''
######################################################################
'''
Nome: Pedro Henrique Silva Marçal
Codigo: 22646
Curso: Sistemas de Informação
'''
#função para calcular a área de um triangulo
def a (b, h):
    area = (b * h) / 2
    return area

#função para calcular a soma de elementos impares com um vetor de 80 elemetos passados como parâmetros
def b (vet):
    soma = 0
    for i in range(len(vet)):
        if vet[i] % 2 != 0:
            soma += vet[i]
    return soma

#função para retornar se o valor é primo 
def c (valor):
    if valor == 2 or valor == 3:
        return 'Primo'
    else:
        #pegar a soma dos algarismos
        tam = len(str(valor))
        val = []
        soma = 0
        converter = str(valor)
        for i in range(tam):
            val.append(converter[i])
        for i in range(tam):
            val[i] = int(val[i])
            soma += int(val[i])
            
        #testar sé é primo
        if soma % 3 == 0 or valor % 2 == 0 or valor % 5 == 0:
            return 'Não é Primo'
        else:
            return 'Primo'
         

#condição de inicio do loop
resp = str(input('Deseja iniciar o programa? S/N \n'))

#lapso de repetição do menu
while resp == 'Sim' or resp == 'S' or resp == 'SIM' or resp == 's':
    #apresentar menu
    print('Por favor Selecione uma das opções abaixo')
    print('A - calcular área de um triangulo')
    print('B - calcular a soma dos impares com 80 elementos') 
    print('C - informar se o valor é primo ou não')

    #opção do usuario
    opcao = str(input('Qual opção você deseja'))
    
    #teste da opção para selecionar a função especifica
    #opção a
    if opcao == 'A' or opcao == 'a':
        altura = float(input('Informe a altura \n'))
        base = float(input('Informe a base \n'))

        area = a(base, altura)
        print('A área é de: {}'.format(area))

    #opção b
    elif opcao == 'B' or opcao == 'b':
        vet = []
        for i in range(80):
            vet.append(int(input('Informe-nos o valor a ser inserido \n')))
        somaImpar = b(vet)
        print('a soma de todos os impares é {}'.format(somaImpar))

    #opção c
    elif opcao == 'C' or opcao == 'c':
        n1 = int(input('Informe o valor a ser testado \n'))
        result = c(n1)
        print('O valor é {}'.format(result))

    #opcao inváida
    else:
        print('OPÇÃO INVÁLIDA')
    
    #condição de parada
    resp = str(input('Deseja continuar o programa? S/N \n'))
else:
    print('Obrigado por usar o nosso programa')
    
#EXERCICIO 3
#####################################################################################################
'''
Fazer um programa em Python que leia a idade e o peso de 50 pessoas e armazene em dois vetores. Determine quantas pessoas com mais de 30 anos possuem peso superior à média de peso dessas pessoas. Fazer uma função para calcular a média. Imprimir uma mensagem com a média e a quantidade de pessoas encontrada.
'''
#calculo da media das pessoas com idade de 30 anos acima da media de peso do total
def testeMedia(idade, peso, pesoM):
    cont = 0
    for i in range(50):
        if idade[i] >= 30 and peso[i] > pesoM:
            cont += 1
    print('A quantidade de pessoas com mais de 30 anos acima da média é: {}'.format(cont))
    print('E sua média é de: {}'.format(cont / 50))

#função para calcular o peso medio das pessoas
def mediaPeso(peso):
    soma = 0
    for i in range(50):
        soma += peso[i]
    return soma / 50

#iniciar vetores
peso = []
idade = []

#entrada de dados
for i in range(50):
    idade.append(float(input('Informe-nos a idade da {}° pessoa: '.format(i+1))))
    peso.append(float(input('Informe-nos a peso da {}° pessoa: '.format(i+1))))

#calcular a media dos pesos
pesoM = mediaPeso(peso)
#pegar a emdia de pessoas com mais de 30 anos e acima da média do peso
testeMedia(idade, peso, pesoM)
