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
    
