function findPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= num; i++) {
    console.log(i)
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}