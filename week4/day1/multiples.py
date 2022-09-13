import numbers
from re import X
15

number = int(input("Entrez un nombre compris entre 1 et 100: "));
if (number >= 1 and number <= 100):
    if (number % 3 == 0 and number % 5 == 0):
        print('FrizzBuzz')
    elif (number % 5 == 0):
        print('Buzz')
    elif (number % 3 == 0):
        print('Fizz')
    else:
        print('Essayez encore !!')
else:
    print("Votre numbre n'est pas compris dans l'intervalle demande")

#elif (number % 3 == 0):
    #print("Fizz")
#elif (number % 5 == 0):
    #print("Buzz")
#elif (number % 3 == 0 and number % 5 == 0):
    #print("FizzBuzz")
#else:
    #print("Essayer encore")