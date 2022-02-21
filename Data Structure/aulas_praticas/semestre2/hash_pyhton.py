def Hash():
    x = str(input("Informe o valor "))
    y = []
    som = 0
    if len(x) != 0 and len(x) > 0:
        for i in range(len(x)):
            y.append(i)
            som += ord(x[i])

    print(som)
    return som % 37

