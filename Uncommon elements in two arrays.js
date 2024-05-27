function findUncommon(arr1, arr2) {
  const unique1 = arr1.filter((num) => arr2.indexOf(num) === -1);
  const unique2 = arr2.filter((num) => arr1.indexOf(num) === -1);

  const unCommon = unique1.concat(unique2);
  return unCommon;
}

const arr1 = [2, 3, 4, 5];
const arr2 = [4, 5, 6, 7];

const unCommon = findUncommon(arr1, arr2);
console.log(unCommon);
console.log("************");
