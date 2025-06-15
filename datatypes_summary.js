// Primitive datatypes
const score = 100;
const scoreValue = 10.9;
const isLoggedIn = true;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId); // false

// Reference Datatypes
const bigNumber = 43434543432599324n;
const heros = ["shaktiman", "naagraj", "doga"];
let obj = {
    name: "Moin",
    age: 22,
};

const myfunction = function () {
    console.log("Hello world");
};
console.log(typeof myfunction); // "function"




