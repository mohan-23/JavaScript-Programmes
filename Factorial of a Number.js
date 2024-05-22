let number = 4;

// Method 1
const findFactorial = (number) => {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * findFactorial(number - 1);
  }
};

const factorial = findFactorial(number);
console.log(factorial);

// Method 2
function findFact(number) {
  let factorial = 1;
  for (let i = number; i >= 1; i--) {
    factorial *= i;
  }
  return factorial;
}

const factNum = findFact(number);
console.log(factNum);
