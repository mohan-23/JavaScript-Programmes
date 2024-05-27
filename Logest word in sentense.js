function findLogestWord(sentence) {
    const wordsList = sentence.split(' ')
    const long = wordsList[0].length
    let longWord = ''
    for (let word of wordsList) {
        if (word.length > long) {
            longWord = word
        }
    }
    return longWord
}


const sentence = 'Hello I am Mohan from Peddapalli'
const longestWord = findLogestWord(sentence)
console.log(longestWord)