let array = [{ name: "Mohan" }, { age: 25 }, { name: "Mohan" }];

console.log(array);
const list = array.filter(
  (obj1, index, arr) =>
    arr.findIndex((obj2) => obj2.name === obj1.name) === index
);
console.log(list);

