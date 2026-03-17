def xor(x, y):
    if(x == 0 and y == 0) or (x == 1 and y == 1):
        return False
    else:
        return True 

numbers = list(map(int, input().split()))
if(xor(numbers[0], numbers[1])):
    print(1)
else:
    print(0)