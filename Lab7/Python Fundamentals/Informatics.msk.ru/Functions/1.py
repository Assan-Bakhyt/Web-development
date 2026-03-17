def Min(a,b,c,d):
    return min(min(a,b), min(c,d))

number = list(map(int, input().split()))
print(Min(number[0], number[1], number[2], number[3]))