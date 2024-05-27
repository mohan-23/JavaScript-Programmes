function findLogest(string) {
  let words = string.split(' ');
  console.log(words);
  const wordLength = words[0].length;
  let logestWord = "";
  for (let word of words) {
    if (word.length > wordLength) {
      logestWord = word;
    }
  }
  return logestWord;
}

const string = "Hello i am Mohan from Peddaplli";
const logest = findLogest(string);

console.log(logest);
