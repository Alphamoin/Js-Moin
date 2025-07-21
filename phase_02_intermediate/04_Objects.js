// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "1234acj"
tinderUser.name = "Sahil"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "Rohit@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Moin",
            lastname: "Shaikh"
        }
    }
}

console.log(regularUser.fullname);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj4 = { 5: "a", 6: "b" }

// Merge using spread operator (best way)
const obj3 = { ...obj1, ...obj2, ...obj4 }
console.log(obj3);

const users = [
    {},
    {},
    {
        id: 1,
        email: "M@gmail.com"
    },
]

// Safe access to prevent undefined error
console.log(users[2].email); // This is the only one with data

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Moin"
}

const { courseInstructor: instructor } = course; // courseinstructor k jagah instructor bhi likh sakte hai

console.log(courseInstructor);
