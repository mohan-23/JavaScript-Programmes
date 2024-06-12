function fibonaccis(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

let n = 6;

console.log(fibonaccis(n));
console.log("**********");

// Method 2
function fibonacci(n) {
  let a = 0;
  let b = 1;
  if (n === 0) {
    return a;
  }
  for (let i = 2; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

console.log(fibonacci(6));
