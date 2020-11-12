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
    
 
2. A MODA de um vetor de números é o número m no vetor que é repetido com maior frequência.
Se mais de um número for repetido com frequência máxima igual, não existirá uma moda.
Escreva uma função que aceite um vetor de números e retorne a moda ou uma indicação de que
a moda não existe.

#iniciar vetor
moda = []

#requisição ao usuario quantos valores serão inseridoss
pontoDeParada = int(input('Informe quantos números você irá inserir: '))

#entrada do usuario
for i in range(pontoDeParada):
  moda.append(int(input('Informe o número desejado \n')))

#

   
    
