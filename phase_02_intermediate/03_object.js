// object literals

const JsUser ={
name : "Moin",
"full name":"Moin Shaikh",
[mySym]:"mykey1",
age: 18,
location: "Jaipur",
email:"Moin@google.com",
isLoggedIn: false,
LastLoggedIn: ["Monday","Saturday"]
}

//  ye Jsuser ki puri informatation hai  naam,email,age etc.


console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

// isme dot notation ya bracket notation se key access kar sakte hai, agar space ya symbol hai toh bracket notation he prefer karna 
// full name me bracket notation use hota hai qki space aata hai na.
// symbol me bhi bracket notation he use hoga.

JsUser.email = "Moin@chatgpt.com"
Object.freeze(JsUser)
JsUser.email = "Moin@microsoft.com"
console.log(Jsuser)

//  isme email ki value change kardi gayi hai "Moin@google.com" se "Moin@chatgpt.com"
// freeze karne k baad koi bhi property change,update ya delete nai ho sakti .

JsUser.greeting = function(){
    console.log("Hello Js user");

}

JsUser.greetingTwo = function(){
    console.log("Hello Js User")
}

// isme sirf hello js user he print hoga

Jsuser.greetingTwo = function(){
    console.log(`Hello Js User,${this,name}`)
}

// isme hello js user k saath uska naam bhi print hoga jaise, Hello Js User , Moin 


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



