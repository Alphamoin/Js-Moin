// Arrays



const myArr = [0,1,2,3,4,5]
const myHeros = ["Marvel","DC"]

const myArr2 =[1,2,3,4,5]
console.log(myHeros[0])  // 0th position pe jo hai vo print hoga agar 0 k jagagh dusra hoga jaise 1,2,3, toh vo position ka element print hoga.

// Array methods

myArr.push(6)  //Array me ek naya number add hoga 6 
myArr.push(7)  // Array me ek naya number add hoga 7
myArr.pop()    // Array se ek element pop hoga jo recently add hua hai matlab last in first out (lifo)
console.log(myArr)

myArr.unshift(9)  // iska matlab starting me element daalna eg: [9,0,1,2,3,4,5] aisa print hoga.
myArr.shift()    // iska matlab hai starting ka element hatana ,kuch aisa print hoga  eg:[0,1,2,3,4,5].

console.log(myArr)

console.log(myArr.includes(9))  
console.log(myArr.includes(4))

// ye batata hai kya apne array me ye value hai kya ,jaise 9 pucha toh 9 nai hai toh false dega. aur 4 bhi pucha hai toh 4 hai toh true dega.

const newArr = myArr.join()

console.log(myArr);
console.log(typeof newArr)


//slice,splice

console.log("A",myArr)  // isme Array print hoga jo apna hai lekin kuch aisa print hoga A [0,1,2,3,4,5]


const myn1 = myArr.slice(1,3)
console.log(myn1);   // isme 3rd element print nai hoga for eg:[0,1,2,3,4,5] toh print hoga [1,2] bass. 
// 0 isliye nai likha qki 1 se start karne bola hai 

console.log("B",myArr)  // isme B[0,1,2,3,4,5] aisa print hoga.

const myn2 =myArr.splice(1,3)

console.log("c",myArr);  // isme kuch alag print hoga jaise C[0,4,5], isme splice me jo value hai vo print nai hua [1,2,3] 

console.log(myn2)       // isme splice ki value puri print hogi [1,2,3].

// splice operation original array ko manipulate karta hai aur slice nai karta hai:)





