let score = "33"  // ye string hai qki isko double quotes me likha hua hai


// // let score = 33 ----------------> ye  number hai 

 console.log(typeof(score))
 console.log(typeof score)

// // ye dono tarah se likh sakte hai chahe bracket me ya bina bracket me dono right hai.

// // ***************** Abb hum isse number me convert karenge qki vo string me hai *******************

 let valueInNumber = Number(score)
 console.log(typeof valueInNumber)

// // Agar score ko double bracket me bhi likhe toh ye usse number me convert kar dega,jaise 33.


 console.log( valueInNumber)

// // Aur ye usse print karega 
// // eg: 33

// // Aur agar let score = "33abc" hai toh isme Nan(Not a Number) print hoga qki string me Alphabet add hua hai.

// // Agar let score = null hai toh isme zero print hoga.

// // Agar let score = undefined hai toh isme NaN print hoga.

// // Agar let score = true or false hai toh isme 1 and 0 print hoga 1 ki value true aur 0 ki value false print hai.

// // Agar let score = "Moin" hai toh isme Nan(Not a Number) print hoga qki string me Alphabet add hua hai.


let isLoggedIn = 1
let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn)

// // 1 ki value true aur 0 ki value false check karne k liye ye code likha hai 

// //  1 -> true
// // 0 -> false
// // "Moin" -> true
// // "" -> false


let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)



// // *************************************** Operations ************************************************
let value = 3
letnegValue = -value
console.log(negValue)

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**3) 
console.log(2/3)
console.log(2%3)

// ye sab operations hai qki hum number me operations kar sakte hai

let str1 = "Assalam alaikum"
let str2 = " Moin"      // space isliye diya qki vo joint na ho word me space rahe.
let str3 = (str1 + str2)
console.log(str3)


console.log("1"+ 2)   // iska value  hai 12 qki pahle number string hai ("")
console.log(1+ "2")   // iska value bhi 12 hai qki dusra value string hai 
console.log("1"+ 2 + 2) // iska value 122 hai qki pahle number string hai ("") ,pahle ya dusra value string nai hona chaiye tab he operation hoga.
console.log(1+2+"2") // iska value bhi 32 hai qki pahle number string nai hai (""),pahle ya dusra value string nai hona chaiye tab he operation hoga.
// isme 1+2 = 3 , "2" = 2, (1+2+"2") = 32
 
console.log(+true)
console.log(+"")

// Aise bhi likh sakte hai lekin jarurat nai hai.

let num1, num2, num3

num1 = num2 = num3 = 2+2
// Aisa bhi likh sakte hai lekin jarurat nai hai ,bahut he confusing lagta hai .

let gameCounter =100
gameCounter++ // iska value 101 hogi.
console.log(gameCounter)



 
















