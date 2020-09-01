// object destructuring
const person = {
  name: "test",
  age: 26,
  location: {
    city: "gago",
    temp: 92,
  },
};

// note: this is how to set default values with destructuring
const { name = "Anonymous", age } = person;
console.log(`${name} is ${age}`);

// note: this is how you rename the property name with destructuring
const { city, temp: temparature } = person.location;
if (city && temparature) {
  console.log(`It's ${temparature} in ${city}`);
}

// note: this is how to use default values and renaming
const { name: firstName = "Anonymous" } = person;

// array destructuring
const address = [
  "1299 s juniper street",
  "philadelphia",
  "pennsylvania",
  "19147",
];

const [street, city, state, zip] = address;

// if you only want the 2nd and 3rd index
const [, city, state] = address;

// if rename is needed
const [, city, yourState] = address;

// default state
const [, , state = "new york"] = address;

console.log(`You are in ${city} ${city}`);
