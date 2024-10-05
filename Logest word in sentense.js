function findLogestWord(sentence) {
    const wordsList = sentence.split(' ')
    const numbers = wordList.map(word => word.length)
    const max = Math.max(...numbers)
    let longWord = ''
    for (let word of wordsList) {
        if (word.length === max) {
            longWord = word
        }
    }
    return longWord
}


const sentence = 'Hello I am Mohan from Peddapalli'
const longestWord = findLogestWord(sentence)
console.log(longestWord)
