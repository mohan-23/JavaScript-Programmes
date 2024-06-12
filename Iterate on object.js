// Objecte has Static Methods: key(), values(), entries()

let person = {
  name: "Mohan",
  age: 26,
  city: "Hyd",
};

// Method 1
for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(`${key}: ${person[key]}`);
  }
}

console.log("************");
// Method 2

let names = Object.keys(person);
console.log(names);
console.log("***********");

names.forEach((name) => console.log(name));
console.log("*********");

names.forEach((name) => console.log(`${name}: ${person.name}`));
console.log("********");

let values = Object.values(person);
console.log(values);
console.log("*************");

values.forEach((value) => console.log(value));
console.log("*********");

let entries = Object.entries(person);
console.log(entries);
console.log("**********");

for (item of entries) {
  console.log(item[0] + ": " + item[1]);
}
console.log('************')

for ([key, value] of entries) {
    console.log(`${key}: ${value}`)
}

// First char to Upper
let str = 'mohan'
console.log(str[0].toUpperCase() + str.slice(1))
console.log('**********')


const car = {
  make: "Tayota",
  model: "Carmy",
  engineStart: function () {
    console.log("Engine Started");
  },
};

let details = Object.entries(car);
details.pop();
for (list of details) {
  let item = list[0];
  let name = item[0].toUpperCase() + item.slice(1);
  console.log(name + ": " + list[1]);
}
car.engineStart()