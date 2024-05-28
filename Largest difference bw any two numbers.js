let array = [3, 6, 4, 8, 7];

const findLargest = (array) => {
  let min = array[0];
  let maxDiff = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    } else {
      let diff = array[i] - min;
      if (diff > maxDiff) {
        maxDiff = diff;
      }
    }
  }
  return maxDiff;
};
const largest = findLargest(array);
console.log(largest);
