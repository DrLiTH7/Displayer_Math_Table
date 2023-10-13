# Programa que mostra a tabuada desejada (as três principais operações) para o número desejado.


# Função para exibir o menu
def show_menu():
    print("Olá, usuário!")
    print("Qual operação você deseja?")
    print()
    print("1. Adição")
    print("2. Subtração")
    print("3. Multiplicação")
    print("4. Sair")
    option = input("Digite a opção desejada: ")
    num = int(input("Digite o número (de 0 a 10) que deseja ver a tabuada: "))

    return option, num


# Função para criar a tabuada
def math_table(option, num):
    if option == "1" or option.lower() == "adição":
        for i in range(1, 11):
            op = num + i
            print(f"{num} + {i} = {op}")
    elif option == "2" or option.lower() == "subtração":
        for i in range(1, 11):
            op = num - i
            print(f"{num} - {i} = {op}")
    elif option == "3" or option.lower() == "multiplicação":
        for i in range(1, 11):
            op = num * i
            print(f"{num} * {i} = {op}")
    elif option == "4" or option.lower() == "sair":
        return
    else:
        print("Por favor, selecione uma opção válida.")
        start()


# Função principal
def start():
    option, num = show_menu()
    math_table(option, num)


start()
