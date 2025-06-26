const name = "Moin"
const repocount = 18
// console.log(name + repocount + "value");

// Aisa bhi likh sakte hai lekin isse bhi accha tarika hai 

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

// ye jyada readable hai pahle wale se ye prefer kiya toh accha hai 

const gameName = new String('steemen')      // string ko hamesha quotes me likho double ho ya single ho
// ek naya sting add kiya 

console.log(gameName[0]);
console.log(gameName[1]);

// // ye string ka length nikalne ke liye use hota hai. isme 1st index [0] pe s likha hua aayega aur 2nd index pe [1] pe t likha hua aayega

console.log(gameName.length);
// // ye string ka length nikalne ke

console.log(gameName.toUpperCase())
// ye daala toh word capitalize hota hai 

console.log(gameName.charAt(2))  // ye konse position pe konsa character hoga usko print kar dega
console.log(gameName.indexOf('e')) // ye batayega ki e konse position pe hai.jaise 'e' 2nd position pe hai.

const newstring = gameName.substring(0,4) 
console.log(newstring)

// isme string 0 se lekar 3 tak he print hoti hai , 4 character print nai hota hai ,jaise 'stee'.

const anotherstring = gameName.slice(-6,4)
console.log(anotherstring)

// isme value piche se print hoga , jaise 
// s  t  e  e  m  e  n
// 0  1  2  3  4  5  6
//-7 -6 -5 -4 -3 -2 -1

// toh iska ans tee hoga.

const newstringone = "     steemen     "

console.log(newstringone) // isme  me space  print hoga ,jaise likha hai waise he aayega "     steemen     ".

console.log(newstring.trim()) // isme me word trim hoke print hota hai jaise 'steemen'.


const url = "https://steemen.com/steemen%20game"
 console.log(url.replace('%20', '-'))

//  isme space replace karna he hai ,jaise %20 ke space ko '-' se replace karne,matlab space rahega na toh %20 replace hoga.

// toh iska ans "https://steemen.com/steemen-game" aayega.

console.log(url.includes('game'))

// isme 'game' word hai kya check karta hai agar hai toh true dega ,agar nahi toh false dega.

console.log(gameName.split('.'))  // isme '.' space k jagah use hota hai ,jaise agar stemeen  game com string hai toh vo steemen.game.com.








