const obj = { name: "Mohan", age: 26, goodName: "Mohan" };

function values(obj) {
  let result = {}
  let keys = Object.keys(obj)
  let duplicate
  for (let i=0; i<keys.length; i++) {
    for (let j=i+1; j<keys.length; j++) {
      duplicate = false
      if (obj[keys[i]] === obj[keys[j]]) {
        duplicate = true
      }
    }if (!duplicate) {
      result[keys[i]] = obj[keys[i]]
    }
  }
  return result
}

const data = values(obj)
console.log(data)