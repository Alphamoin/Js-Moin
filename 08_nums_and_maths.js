const score =400
console.log(score);

const balance = new Number (100)
console.log(balance);

console.log(balance.toString())

console.log(balance.toString().length); // ye number ka length batata hai jaise 100 ka 3.
console.log(balance.toFixed(2));  // ye number ko fixed value me rakhta hai jaise 100.00 qki fixed value 2 hai na.

const otherNumber = 123.8966

 console.log(otherNumber.toPrecision(3)); //Number ko precise karke likhega.


 const hundreds = 1000000
 console.log(hundreds.toLocaleString(en-IN)) // isko comma lagega jaise 10,00,000. lekin jab (en-IN) nai likha hoga toh kuch aisa print hoga 1,000,000 
// //ye foreign system k hisaab se hai aur 0vo pahla Indian system k hisaab se tha.


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++Maths+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


console.log(Math);

console.log(Math.abs (-4)); // isme -4 ka 4 aayega lekin 4 ka 4 he aayega matlab - ka + hoga aur + ka + he hoga isko absolute value bolte hai 

console.log(Maths.round(4.6));// round of ye toh pata hoga round off karna 0.5 k aage hoga toh aage ki value hogi jaise example 4.3 ka 4.3 he hoga 
// // lekin 4.6 ka 5 hoga 

console.log(Math.ceil(4.2)); //celing matlab ek bhi value bhi upar hui toh aage ki value aayegi jaise 4.2 ka 5 hoga .

console.log(Math.floor(4.4)); //floor matlab piche ki value he aayegi jaise 4.4 me 4 aayega .

console.log(Math.max(3,4,5,2,6));// isme max value aayegi

console.log(Math.min(3,4,36,64,4,));//isme min value he aayegi.

console.log(Math.random()) // ye random number pick karta hai 0 se leke 1 k beech 

console.log((Math.random()*10)+1); // ye phir usse 10 se multiply karta hai phir hota  0 se lekar 10.
//Aur phir +1 hote he  uska range ho jata hai 1 se 11 lekin 1 se 11 ho nai sakta toh 10.999 tak le sakte hai .

console.log(Math.floor(Math.random()*10)+1) // Math floor toh pata hai vo roundup karega agar value 8.8 hai toh 8 print hoga agar 0.24 
// toh 0 print hoga

