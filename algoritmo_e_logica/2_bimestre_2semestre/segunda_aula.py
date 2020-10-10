#biblioteca matematica
import math

print(math.pi)

valor = math.pi
#:.2f restringe o decimal a 2 elemetos 
print('O valor é de {:.2f}'.format(valor))

#math.sqrt(variavel desejada) é a raiz quadrada desejada 
result = math.sqrt(9)
print(result)

#EXE
#1
import math

raio = float(input('Informe-nos o valor do raio \n'))
valor = math.pi

#codigo do ciano (\033[1;36m{})
print('A area do circulo é de \033[1;36m{:.2f}'.format(valor*(raio**2)))

#2
import math

raiz = int(input('Informe-ns o valor \n'))
#resultado = math.sqrt(raiz)

#print('A raiz do seu número é: {:.2f}'.format(resultado))
#ou 
print('A raiz do seu número é: {:.2f}'.format(math.sqrt(raiz)))

#len =
#tamanho da palavra dentro dos Caracteres

#CONDICIONAL
numero = int(input('Entre com um número: \n'))
if numero > 0:
    print('Maior que 0 logo {} é Positivo'.format(numero))
elif numero < 0:
    print('Menor que 0 logo {} é negativo'.format(numero))
else:
    print('igual {}'.format(numero))


#Exercicios Condicional
# = atribuição
# == coparação
# != Diferente
# and E
# or OU 

#1
parimpar = int(input('Insira o número desejado \n'))

if parimpar % 2 == 0:
    print('O número {} é par'.format(parimpar))
else: 
    print('O número {} é Impar'.format(parimpar))

#2
lado1 = int(input('Insira o primeiro lado do triangolo \n'))
lado2 = int(input('Insira o segundo lado do triangolo \n'))
lado3 = int(input('Insira o terceiro lado do triangolo \n'))

if ((lado1 - lado2) < lado3 < (lado1 + lado2)) and ((lado2 - lado3) < lado1 < (lado2 + lado3)) and ((lado1 - lado3) < lado2 < (lado1 + lado3)):
    if (lado1 == lado2) and (lado2 == lado3) and (lado1 == lado3):
        print('Triangulo Equilatero')
    elif(lado1 == lado2) or (lado2 == lado3) or (lado1 == lado3):
        print('Trianculo Isosceles')
    else:
        print('Triangulo Escaleno')
else:
    print('Não existe')