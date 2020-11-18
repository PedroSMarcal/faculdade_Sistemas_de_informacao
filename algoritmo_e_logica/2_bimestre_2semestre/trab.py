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
# iniciar vetor
numeros = []

#tamanho do vetor 
valUsuario = int(input('Informe-nos a quantidade de números para moda: '))

#inserir valores
for i in range(valUsuario):
  numeros.append(int(input('Informe o número a ser inserido \n')))

valores = []
vetordecontagem = []
#teste para ver quais os números sem repetições
for i in range(len(numeros)):
  vetordecontagem.append(numeros.count(numeros[i]))
  valores.append(numeros[i])

print(vetordecontagem) 
print(valores)  
  
  #for n in range(len(numeros)):

  #teste para entrada no vetor
'''
for n in range(valUsuario):
  print(n)
  numeros[i] != valores[n] 
  valores.append(numeros[i])
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
  for i in range(len(mod)):
    vet.append(mod.count(mod[i]))

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
  
  
  print('O vetor é :\n{}\ne a contagem é \n{}:'.format(vet2, aux))

#chamar a função para testar a moda
testeModa(moda)  



'''
#Jogo Da Forca

#entrada da palavra,
#iniciar o vetor para guardar as strings
#vetor que mostra a atualidade da função
#ainda uma var aux para recolher os index
#com as chances maximas e condição de parada caso o usuario ganhe
import os 
'''
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
while (chances != 0) or (vitoria != True) :
  letra = str(input('Informe a letra \n'))
  for i in range(len(vetpalavra)):
    if palavra.find(letra) != -1:  
      if letra == vetpalavra[i]:
        mostrar[i] = vetpalavra[i]
    else: 
      chances -= 1
  os.system('cls' if os.name == 'nt' else 'clear')  
  print(mostrar)
  aux = ('').join(mostrar)
  if aux.find(palavra) != -1:
    vitoria == True



   
    
