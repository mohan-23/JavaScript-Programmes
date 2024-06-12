let string = "this is a smple string";

let newString = string
  .split(" ")
  .map((word) => word[0].toUpperCase() + word.substring(1).toLowerCase())
  .join(" ");
console.log(newString);
console.log("***********");

// Method 2
function titleCase(string) {
  let words = string.split(" ");
  let newStr = "";
  for (let word of words) {
    newStr += word[0].toUpperCase() + word.substring(1).toLowerCase() + ' ';
  }
  return newStr;
}

console.log(titleCase(string));
