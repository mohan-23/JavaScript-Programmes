const obj = { name: "Mohan", age: 26, goodName: "Mohan" };

const noDuplicateValues = (obj) => {
  const result = {};
  const keys = Object.keys(obj);
  let duplicate;
  for (let i = 0; i < keys.length; i++) {
    for (let j = i + 1; j < keys.length; j++) {
      duplicate = false;
      if (obj[keys[i]] === obj[keys[j]]) {
        duplicate = true;
      }
    }
    if (!duplicate) {
      result[keys[i]] = obj[keys[i]];
    }
  }
  return result;
};

const result = noDuplicateValues(obj);
console.log(result);
