let arr = ["banana", "orange", "lemon", "grapes", "banana", "lemon"];

// Method 1 filter()
function removeDuplicates(array) {
  return array.filter((word, index) => array.indexOf(word) === index);
}

console.log(removeDuplicates(arr));

// Method 2 filter()
function getDuplicates(array) {
  return array.filter((word, index) => array.indexOf(word) !== index);
}

console.log(getDuplicates(arr));

// Method 3 Set()
function setWithDuplicates(array) {
  return [...new Set(array)];
}
console.log(setWithDuplicates(arr));

// Method 4 forEach()
function forEachDuplicates(array) {
  let unique = [];
  array.forEach((element) => {
    if (!unique.includes(element)) {
      unique.push(element);
    }
  });
  return unique;
}
console.log(forEachDuplicates(arr));

// Method 5 reduce()
function reduceDuplicates(array) {
  const unique = array.reduce(function (a, b) {
    if (a.indexOf(b) < 0) a.push(b);
    return a;
  }, []);
  return unique;
}
console.log(reduceDuplicates(arr));

// Method 6 reduce()
function reduceDuplicate(array) {
  return array.reduce(
    (acc, curr) => (acc.includes(curr) ? acc : [...acc, curr]),
    []
  );
}

console.log(reduceDuplicate(arr));
