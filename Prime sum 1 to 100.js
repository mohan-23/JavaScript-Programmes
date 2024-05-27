function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function sumOfPrimes(number) {
  let sum = 0;
  for (let num = 2; num <= number; num++) {
    if (isPrime(num)) {
      sum += num;
    }
  }
  return sum;
}

const number = 100;
const primes = sumOfPrimes(number);
console.log(primes)