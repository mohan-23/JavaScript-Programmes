const num = 6;

function findFibonacci(num) {
  if (num <= 0) return [];
  if (num <= 1) return [0];
  let sequence = [0, 1];
  while (sequence.length < num) {
    let nextNumber =
      sequence[sequence.length - 1] + sequence[sequence.length - 2];
    sequence.push(nextNumber);
  }
  return sequence;
}

const fibonaccies = findFibonacci(num);
console.log(fibonaccies);
