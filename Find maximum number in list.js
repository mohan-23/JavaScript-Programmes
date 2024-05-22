const array = [2, 4, 6, 3, 8, 9, 11];

// Method 1
function findMaxNumber(array) {
  return Math.max(...array);
}

const maximum = findMaxNumber(array);
console.log(maximum);
console.log('*********')

// Method 2 
let max = array[0]
for (let num of array) {
    if (num > max) {
        max = num
    }
}
console.log(max)
