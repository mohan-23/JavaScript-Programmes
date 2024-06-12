arr1 = [1,2,3,4]
arr2 = [3,4,5,6]

arr3 = []
for num in arr1:
    if num not in arr2:
        arr3.append(num)

for num in arr2:
    if num not in arr1:
        arr3.append(num)

print(arr3)
