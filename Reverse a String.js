let string = "Kandukoori Mohan";

// Method 1
let reversed_string = "";
for (let char of string) {
  reversed_string = char + reversed_string;
}

console.log(reversed_string);
console.log("************");

// Method 2
const reverse = string.split("").reverse().join("");
console.log(reverse);
