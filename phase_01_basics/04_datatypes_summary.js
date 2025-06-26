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

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack and heap do type ki memory hoti hai stack(primitive) ,heap(Non primitive) hoti hai

let myYoutubename = "Moin"

let anotherName = myYoutubename
anotherName = "steemen"

console.log(anotherName);
console.log(myYoutubename);

let userone ={
    email: "moinshaikh@okaxis.com",
    upi: "moinshaikh@ybl"
}
 let userTwo = userone
 userTwo.email = "moin@gmail.com"

 console.log (userone.email);
 console.log(userTwo.email);





