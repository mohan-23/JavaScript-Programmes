const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Even list
const findEvens = (array) => {
  const list = array.filter((num) => num % 2 === 0);
  return list;
};
const evenList = findEvens(array);
console.log(evenList);
console.log("*********");

// Odd list
const findOdds = (array) => {
  const list = array.filter((num) => num % 2 !== 0);
  return list;
};
const oddList = findOdds(array);
console.log(oddList);
