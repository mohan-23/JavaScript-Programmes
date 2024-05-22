const arr = [
  [2, 4, 5, 2],
  [1, 2, 4, 9],
];

const findLargeNumber = (arr) => {
  let largestNum = arr[0][0];
  for (let list of arr) {
    for (let num of list) {
      if (num > largestNum) {
        largestNum = num;
      }
    }
  }
  return largestNum;
};

const largest = findLargeNumber(arr);
console.log(largest);
