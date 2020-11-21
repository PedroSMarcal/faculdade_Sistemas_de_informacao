'''

1 - Faça um programa que use a função valorPagamento para determinar o valor a ser pago por uma
prestação de uma conta. 
O programa deverá solicitar ao usuário o valor da prestação e o número
de dias em atraso e passar estes valores para a função valorPagamento, que calculará o valor a
ser pago e devolverá este valor ao programa que a chamou.
O programa deverá então exibir o valor a ser pago na tela.
Após a execução o programa deverá voltar a pedir outro valor de prestação e assim continuar até que seja informado um valor igual a zero para a prestação. 
Neste
momento o programa deverá ser encerrado, exibindo o relatório do dia, que conterá a
quantidade e o valor total de prestações pagas no dia. 
O cálculo do valor a ser pago é feito da seguinte forma: para pagamentos sem atraso, cobrar o valor da prestação, e quando houver
atraso, cobrar 3% de multa, mais 0,1% de juros por dia de atraso
'''
import os
def valorPagamento (val, dda, con, pag): #dda = dias de atraso / val = valor
  pagamento = float(0)
  aux = float(0)
  if dda == 0:
    pagamento = val
    pag.append(pagamento)
    print('O valor a se pagar é de: R$ {:.2f}'.format(pagamento))
  else: 
    aux = (dda * 0.1/100)
    pagamento = val + ((val * 3 / 100) + aux)
    pag.append(pagamento)
    print('O valor a se pagar é de: R$ {:.2f}'.format(pagamento))

#valores para relatório no final
cont = 0
pagamentosFinais = []
#Entrada de valores 
print('Insisa um valor acima ou igual a R$ 0.00 \n')
valor = float(input('Informe-nos o valor da presatação em R$: '))
print('')
print('Caso esteja pagando adiantado por favor insira 0') 
diasDeAtraso = int(input('Informe-nos os dias de atraso \n'))

#teste para entrada na repetição 
while (valor != 0.00): 
  if (valor < 0.00):
    #teste de valor caso seja menor que 1
    while (valor < 0.00):
      print('O valor inserido é menor que 0, insira o valor maior: ')
      valor = float(input('Informe-nos o valor da presatação em R$: '))
    
  #teste dos dias caso tal seja menor que 1
  if (diasDeAtraso < 0):
    while (diasDeAtraso >= 0):
      print('O valor inserido é menor que 0, insira o valor correto: ')
      diasDeAtraso = int(input('Informe-nos os dias de atraso'))
    
#retorno dos paramentros 
  os.system('cls' if os.name == 'nt' else 'clear')
  valorPagamento(valor, diasDeAtraso, cont, pagamentosFinais)

#inserir valores para não cair em cadeia
  print('Insisa um valor acima ou igual a R$ 0.00 \n')
  valor = float(input('Informe-nos o valor da presatação em R$: '))
  print('')
  print('Caso esteja pagando adiantado por favor insira 0') 
  diasDeAtraso = int(input('Informe-nos os dias de atraso \n'))
  
  #aumenta o contador de valores inseridos
  cont += 1

#fim do programa
else:
  if (cont > 0):
    for i in range(cont):
      print('{}° = R$ {:.2f}'.format(i + 1, pagamentosFinais[i]))
  else:
    print('Não houve valores inseridos')
'''
2. A MODA de um vetor de números é o número m no vetor que é repetido com maior frequência.
Se mais de um número for repetido com frequência máxima igual, não existirá uma moda.
Escreva uma função que aceite um vetor de números e retorne a moda ou uma indicação de que
a moda não existe.
'''
#iniciar var e fazer o tamanho do vetor
moda = []
m = int(input('Quantos valores você ira inserir \n'))

#função de entrada
def entrada (n, mod ):
  for i in range(n):
    mod.append(int(input('Informe o valor \n')))

#chamar função
entrada(m, moda)
moda.sort()

#função para testar a moda
def testeModa (mod):
  #contagem
  vet = []
  #vetor auxiliar
  aux = []

  aux2 = 0
  for i in range(len(mod)):
    aux2 = 0
    for n in range(len(mod)):
      if (mod[i] == mod[n]):
        aux2 += 1
    vet.append(aux2)

  maiorValorContagem = 0
  for i in range(len(vet)):
    if vet[i] > maiorValorContagem:
      maiorValorContagem = vet[i]

  vet2 = []
  for i in range(len(vet)):
    if vet[i] >= maiorValorContagem:
      aux.append(mod.count(mod[i]))
      vet2.append(mod[i])

  aux.sort()

  pri = 0
  for i in range(len(vet2)):
    for n in range(len(vet2)):
      if vet2[i] != vet2[n]:
        pri = 'Não existe moda por haver mais de 1 valor com contagem maxima'
        break
      else:
        pri = vet2[0]
      
  if pri == vet2[0]:
    print('O valor foi {}'.format(pri))
    print('com a contagem de {}'.format(aux[0]))
  else:
    print('Não Há moda')

  #chamar a função para testar a moda
testeModa(moda) 


# --------------------------------------------------------------------------------------------
#Jogo Da Forca

#entrada da palavra,
#iniciar o vetor para guardar as strings
#vetor que mostra a atualidade da função
#ainda uma var aux para recolher os index
#com as chances maximas e condição de parada caso o usuario ganhe

import os
palavra = str(input('Informe qual a palavra \n')).strip()
os.system('cls' if os.name == 'nt' else 'clear')
vetpalavra = []
mostrar = []
chances = 6
vitoria = False

#transforma a palavra em um vetor
for i in range(len(palavra)):
  vetpalavra.append(palavra[i])
  mostrar.append('')

#iniciar o game
while (chances != 0) and (vitoria != True):

  letra = str(input('Informe a letra \n'))
  for i in range(len(vetpalavra)):
    if palavra.find(letra) != -1:  
      if letra == vetpalavra[i]:
        mostrar[i] = vetpalavra[i] 
      
  if palavra.find(letra) == -1:  
    chances = chances - 1 
      

  os.system('cls' if os.name == 'nt' else 'clear')  
  print(mostrar)
  aux = ('').join(mostrar)
  if aux.find(palavra) != -1:
    vitoria = True

  print('Você ainda possue {} chances'.format(chances))
else:
  if vitoria == True:
    print('Você venceu Parabens!!!')
  else:
    print('Mais sorte na proxima vez, a palavra era: {}'.format(palavra))


  #1
  #função 
def valorPagamento2 (pag, atraso):
  #pagamento no dia
  if  atraso == 0:
    print('O valor de pagamento será de {:.2f}'.format(pag))
    return pag
  #pagamento sem atraso
  elif atraso < 0:
    print('O valor de pagamento será de {:.2f}'.format(pag))
    return pag
  #pagamento com atraso
  else:
    multa = pag * 3 / 100
    multaAcumulativa = atraso * 0.1 / 100
    totalDePag = float((multa + pag) + multaAcumulativa)
    print('O valor de pagamento será de {:.2f}'.format(totalDePag))
    return totalDePag

#informar ao usuario sobre a posição de parada
print('O programa se repetira enquanto o o valor de prestação for diferente de 0: ')

#iniciar vetorValoresFinais
vetorValoresFinais = []
#entrada
prestacao = float(input('Informe o valor da prestação: R$ '))

#repetição
while prestacao != 0:
  #entrada de dias 
  numeroDiasAtraso = int(input('Informe a quantidade de dias atrasado, caso seja adiantado indique 0: '))

  #chamada da função que faz os calculos
  vetorValoresFinais.append(valorPagamento2(prestacao, numeroDiasAtraso))

  #pedir novamente o valor pro usuario
  prestacao = float(input('Informe o valor da prestação: R$ '))

else:

  print('---------------')
  print('RELATORIO')
  print('---------------')
  #calcular o total
  total = 0 
  for i in range(len(vetorValoresFinais)):
    total = total + vetorValoresFinais[i]

  #apresentação de resultados  
  #quando há valores
  if len(vetorValoresFinais) > 0:
    print('Valores Finais')
    print('A quantidade de transições que ocorreu foi de {} \ncom os valores finais de: '.format(len(vetorValoresFinais)))
    for i in range(len(vetorValoresFinais)):
      print('O {}° foi de R$ {:.2f}'.format(i+1, vetorValoresFinais[i]))
    print('E a soma total das transações foram de R${:.2f}'.format(total))
  else:
    print('Nenhum valor inserido')
    
#------------------------------------------------------------------------------ 

#2. 
'''
A MODA de um vetor de números é o número m no vetor que é repetido com maior frequência.
Se mais de um número for repetido com frequência máxima igual, não existirá uma moda.
Escreva uma função que aceite um vetor de números e retorne a moda ou uma indicação de que
a moda não existe.
'''
def moda (mo):
  frequencia = []
  for i in range(len(mo)):
    contador = 0
    for n in range(len(mo)):
      if mo[i] == mo[n]:
        contador += 1
    # o menos 1 retia o valor repetido da mesma posição
    frequencia.append(contador - 1)

  #pegar a maior frequencias
  maiorFrequencia = 0 
  for i in range(len(frequencia)):
    if maiorFrequencia <= frequencia[i]:
      maiorFrequencia = frequencia[i]
  
  aux = []

  for i in range(len(frequencia)):
    if frequencia[i] == maiorFrequencia:
      aux.append(mo[i])


  aux2 = aux[0]
  aux3 = 1
  for i in range(len(aux)):
    if aux[i] != aux2:
      aux3 = 0
    else:
      aux3 = 1

  if aux3 == 1:
    print('Há moda é: {} com frequencia de {}'.format(aux2,len(aux)))
  else: 
    print('não há moda')


#entrada do tamanho do vetor
x = int(input('quantos valores será inserido ? '))
mod = []

#entrada dos elementos do vetor
for i in range(x):
  mod.append(int(input('Informe-nos o valor ')))

mod.sort()
moda(mod)


#####################################################################

#3. Fazer um programa que desenvolva um Jogo da Forca.

palavra = str(input('Informe a palavra: '))
chance = 6
aux = []
palavra1 = []
contador = 0
for i in range(len(palavra)):
  palavra1.append(palavra[i])
  aux.append('')

while chance != 0 and palavra1 != aux:
  letra = str(input('Informe a letra: ')) 

  for i in range(len(palavra)):
    if letra == palavra1[i]:
      contador += 1
  
  if contador != 0:
    for i in range(len(palavra)):
      if palavra1[i] == letra: 
        aux[i] = letra
  else: 
    chance -= 1  

  contador = 0
  print(chance)
  print(aux)
else:
  if (palavra1 == aux):
    print('-' * 20)
    print('PARABENS VOCÊ GANHOU')
    print('-' * 20)    
  else:
    print('-' * 40)
    print('Mais sorte na proxima a palavra era: {}'.format(palavra))
    print('-' * 40)


   
    
