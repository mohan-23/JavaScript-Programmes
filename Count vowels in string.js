function findVowelsCount(string) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0
    let newString = string.toLowerCase()
    for (char of newString) {
        if (vowels.includes(char)) {
            count += 1
        }
    }
    return count
}

let string = 'Hello world In'

const vowelCount = findVowelsCount(string)
console.log(vowelCount)