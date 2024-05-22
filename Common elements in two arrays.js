let arr1 = [2, 3, 4, 5];
let arr2 = [4, 5, 6, 7];

function findCommon(arr1, arr2) {
  commons = [];
  for (let num of arr1) {
    if (arr2.includes(num)) {
      commons.push(num);
    }
  }
  return commons;
}

const common = findCommon(arr1, arr2);
console.log(common);
