const pallindrome = (string) => {
  let newString = string.split('').reverse().join('');
  console.log(newString);
  return newString;
};

let string = "madae";
let reversed_string = pallindrome(string);

if (string === reversed_string) {
  console.log("String is Pallindrome");
} else {
  console.log("String not a Pallindrome");
}


