const number = 9;

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) return false;
  }
  return true;
}

const prime = isPrime(number);
if (prime) console.log(`${number} is a prime number`);
else console.log(`${number} is not a prime number`);

console.log("**********");

const array = [2, 3, 4, 5, 6, 7, 8, 9];

const finPrimeNumber = (array) => {
  let primeNums = "";
  for (let num of array) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        continue;
      }
    }
    primeNums += num + " ";
  }
  return primeNums;
};

const primes = finPrimeNumber(array);
console.log(primes);
