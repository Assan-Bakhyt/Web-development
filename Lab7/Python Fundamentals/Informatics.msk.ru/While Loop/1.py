import math

a = int(input())
number = 1
while( number <= a):
    if(number % math.sqrt(number) == 0):
        print(number)
    number += 1
        