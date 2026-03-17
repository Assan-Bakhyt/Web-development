def maxNumber(a,b):
    if a > b:
        return 1
    elif a < b:
        return 2
    else:
        return 0
    
a = int(input())
b = int(input())
print(maxNumber(a,b))