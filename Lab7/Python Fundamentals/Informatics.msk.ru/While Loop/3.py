number = int(input())
n = 0
i = 2 ** n
while(i <= number):
    print(i, end=" ")
    n += 1
    i = 2 ** n