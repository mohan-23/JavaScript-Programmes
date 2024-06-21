let object = {
  name: "Mohan",
  age: 26,
  city: "Hyd",
};

// Method 1, using reduce(), filter()
/*console.log(object);
object = Object.keys(object)
  .filter((objKey) => objKey !== "age")
  .reduce((newObj, key) => {
    newObj[key] = object[key];
    return newObj;
  }, {});
console.log(object);*/

// Method 2, Using delete operator
/*console.log('Original', object)
delete object.age
console.log(object)*/

// Method 3, Destructuring with Rest operator
/*console.log("Original", object);
const { age, ...obj } = object;
console.log(obj);*/

// Method 4, Using Object.assign()
/*const obj = Object.assign({}, object);
console.log(obj);
const {age, ...rest} = obj
console.log(rest)*/

// Method 5, Using Object.fromEntries(), Object.entries()
/*const obj = Object.fromEntries(
  Object.entries(object).filter(([key]) => key !== "age")
);
console.log(obj);*/

const obj = Object.fromEntries(
  Object.entries(object).filter(([key]) => key !== "age")
);
console.log(obj);
