let score = "33"  // ye string hai qki isko double quotes me likha hua hai


// let score = 33 ----------------> ye  number hai 

 console.log(typeof(score))
 console.log(typeof score)

// ye dono tarah se likh sakte hai chahe bracket me ya bina bracket me dono right hai.

// ***************** Abb hum isse number me convert karenge qki vo string me hai *******************

 let valueInNumber = Number(score)
 console.log(typeof valueInNumber)

// Agar score ko double bracket me bhi likhe toh ye usse number me convert kar dega,jaise 33.


 console.log( valueInNumber)

// Aur ye usse print karega 
// eg: 33

// Aur agar let score = "33abc" hai toh isme Nan(Not a Number) print hoga qki string me Alphabet add hua hai.

// Agar let score = null hai toh isme zero print hoga.

// Agar let score = undefined hai toh isme NaN print hoga.

// Agar let score = true or false hai toh isme 1 and 0 print hoga 1 ki value true aur 0 ki value false print hai.

// Agar let score = "Moin" hai toh isme Nan(Not a Number) print hoga qki string me Alphabet add hua hai.


let isLoggedIn = 1
let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn)

// 1 ki value true aur 0 ki value false check karne k liye ye code likha hai 

//  1 -> true
// 0 -> false
// "Moin" -> true
// "" -> false


let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)













