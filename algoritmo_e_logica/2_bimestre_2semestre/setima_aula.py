#Fazer um programa que possui um menu com as seguintes opções para executar diferentes funções, até que o usuário digite -1 e termine o programa:
#1 - Escrever a tabuada de um número ou uma mensagem de erro caso o número não esteja entre 1 e 9. O número deve ser passado como parâmetro e a validação feita na função.
#2 - Calcular o Índice de Massa Corporal (IMC): a fórmula é IMC = peso / altura2. Passar o peso e altura como parâmetros e retornar o IMC.
#3 - Calcular o fatorial de um número. O número deve ser passado como parâmetro e retornar o resultado.


def tabuada (val):
    if ((val < 10) and (val > 0)):
        for i in range(1, 11):
            print('{} x {} = {}'.format(val, i, val*i))
    else:
        print('Seu número não está entre o 1 e 9 \n')

def imc (pes, alt):
    im = pes * (alt**(1/2))
    print('seu imc é {:.2f}'.format(im))
    return im


def fat (x):
    fato = 1 
    for i in range(1, x+1):
        fato *= i 
    print(fato)
    return fato

print('1 - tabuada de 1 a 9 \n2- Imc \n3- Fatorial ')
resp = int(input('Informe-nos o valor do menu a se utilizar \n para sair coloque -1 no menu \n'))
while (resp != -1):
    if (resp == 1):
        x = int(input('Informe-nos o valor da tabuada \n'))
        tabuada(x)
        resp = int(input('Informe-nos o valor do menu a se utilizar \n para sair coloque -1 no menu \n'))
    elif (resp == 2):
        peso = float(input('Inoforme-nos o peso \n'))
        alt = float(input('Informe-nos a altura \n'))
        imc(peso, alt)
        resp = int(input('Informe-nos o valor do menu a se utilizar \n para sair coloque -1 no menu \n'))
    elif (resp == 3):
        y = int(input('Informe-nos o valor para o fatorial \n'))
        fat(y)
        resp = int(input('Informe-nos o valor do menu a se utilizar \n para sair coloque -1 no menu \n'))
    else:
        print('1 - tabuada de 1 a 9 \n2- Imc \n3- Fatorial ')
        resp = int(input('Informe-nos o valor do menu a se utilizar \n para sair coloque -1 no menu \n'))
else: 
    print('brigado por usar o programa')



#Fazer uma função que verifique se o número de um CPF é válido.
#def valida_cpf (cpf):


#Fazer uma função que calcule o quociente inteiro da divisão entre dois números, sem utilizar funções prontas.
def quociente (n1, n2):
    res = 0
    while (n1 >= 0):
        n1 -= n2 
        res += 1
    print(res)
    
x = int(input('Informe-nos o valor \n'))
y = int(input('Informe-nos o valor \n'))
quociente(x, y)

print(x // y)