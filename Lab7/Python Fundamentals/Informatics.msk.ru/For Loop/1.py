a = int(input())
b = int(input())
for i in range(a, b + 1): # от a до b включительно
    if(i % 2 == 0):
        print(i, end=' ')
