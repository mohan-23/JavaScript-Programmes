let arr = [1, 2, 4, 1, 3, 2, 5, 6, 6];

// Method 1
const removeDuplicates = (array) => {
  const list = array.filter((item, index) => array.indexOf(item) === index);
  return list;
};

const newArr = removeDuplicates(arr);
console.log(newArr.sort());
console.log("*************");

// Method 2
let unique_arr = [];
for (let item of arr) {
  if (unique_arr.includes(item)) {
    continue;
  } else {
    unique_arr.push(item);
  }
}
console.log(unique_arr.sort());


