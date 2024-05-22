let arr = [3, 4, 5, 6];

function secondLargest(arr) {
  let largest = arr[0];
  let secondLarge = arr[0];
  for (let num of arr) {
    if (num > largest) {
      secondLarge = largest;
      largest = num;
    } else if (num > secondLarge && num != largest) {
      secondLarge = num;
    }
  }
  return secondLarge;
}

const result = secondLargest(arr);
console.log(result);
