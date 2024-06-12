function findArmstrong(num) {
  let number = num.toString();
  let L = number.length;
  let armstrongNum = 0;
  for (let n of number) {
    armstrongNum += parseInt(n) ** L;
  }
  return armstrongNum;
}

let number = 153;

const armstrong = findArmstrong(number);

if (number === armstrong) {
  console.log("Armstrong");
} else {
  console.log("Not a Armstrong");
}
