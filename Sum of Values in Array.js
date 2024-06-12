let array = [5, 4, 5, 4]

// Method 1
let sum = 0
for (num of array) {
    sum += num
}
console.log(sum)
console.log('**********')

// Method 2 
let add = array.reduce((accu, value) => accu + value)
console.log(add)
console.log('************')

// Method 3
let sums = 0
array.forEach(num => {
    sums += num
})
console.log(sums)