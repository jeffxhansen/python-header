# header-python README

This is a VS-Code Extension that allows you to quickly and easily add python code headers inside your code.

# Example

Let's say you have this simple python code file, and you want to break it up into three secionts: math functions, input/output
```Python
import math
import numpy as np

def add(x, y):
    return x + y

def subtract(x, y):
    return x - y

def multiply(x, y):
    return x * y

def divide(x, y):
    if y == 0:
        raise ValueError('Cannot divide by zero!')
    return x / y

def sqrt(x):
    return math.sqrt(x)

def mean(vals):
    return np.mean(vals)

def get_input():
    response = input("Enter a command (add, subtract, multiply, divide, sqrt, mean): ")
    if response not in ['add', 'subtract', 'multiply', 'divide', 'sqrt', 'mean']:
        raise ValueError('Invalid command')
    
    if response == 'sqrt':
        x = float(input("Enter a number: "))
        return response, x
    elif response == 'mean':
        vals = [float(x) for x in input("Enter a list of numbers separated by spaces: ").split()]
        return response, vals
    else:
        x = float(input("Enter the first number: "))
        y = float(input("Enter the second number: "))
        return response, x, y
    
def main():
    while True:
        try:
            command, *args = get_input()
            if command == 'add':
                print(add(*args))
            elif command == 'subtract':
                print(subtract(*args))
            elif command == 'multiply':
                print(multiply(*args))
            elif command == 'divide':
                print(divide(*args))
            elif command == 'sqrt':
                print(sqrt(*args))
            elif command == 'mean':
                print(mean(*args))
        except Exception as e:
            print(e)
            break
```
this extension allows you to type the headers as normal text, highlight the text, and then run the VSCode extension command to format them into python headers.

The final result will look like:
```Python
import math
import numpy as np


############################################################
#                      MATH FUNCTIONS                     #
############################################################


def add(x, y):
    return x + y

def subtract(x, y):
    return x - y

def multiply(x, y):
    return x * y

def divide(x, y):
    if y == 0:
        raise ValueError('Cannot divide by zero!')
    return x / y

def sqrt(x):
    return math.sqrt(x)

def mean(vals):
    return np.mean(vals)


###################################################
#                   INPUT/OUTPUT                  #
###################################################


def get_input():
    response = input("Enter a command (add, subtract, multiply, divide, sqrt, mean): ")
    if response not in ['add', 'subtract', 'multiply', 'divide', 'sqrt', 'mean']:
        raise ValueError('Invalid command')
    
    if response == 'sqrt':
        x = float(input("Enter a number: "))
        return response, x
    elif response == 'mean':
        vals = [float(x) for x in input("Enter a list of numbers separated by spaces: ").split()]
        return response, vals
    else:
        x = float(input("Enter the first number: "))
        y = float(input("Enter the second number: "))
        return response, x, y
    
def main():
    while True:
        try:
            command, *args = get_input()
            if command == 'add':
                print(add(*args))
            elif command == 'subtract':
                print(subtract(*args))
            elif command == 'multiply':
                print(multiply(*args))
            elif command == 'divide':
                print(divide(*args))
            elif command == 'sqrt':
                print(sqrt(*args))
            elif command == 'mean':
                print(mean(*args))
        except Exception as e:
            print(e)
            break
```