//Dates

let myDate =new Date()

console.log(myDate.toString())  // Apna time batata hai day,time,year aur gmt bhi batata hai.

console.log(myDate.toDateString()) // isme me day aur Year he batata hai.

console.log(myDate.toLocaleString()) // isme me bhi day batata hai lekin [24/6/2025] aise format me hai + time

console.log(typeof myDate) // date ek object hai

let myCreatedDate = new Date(2023,0,23,5,3)  // isme 0 jan hai, qki javascript me month 0 se start karte hai ,aur 5 and 3 time hai 5:03:00 AM jab LocaleString ho.
// kuch aise print hoga Mon Jan 23 2023, Agar Datestring  ki jagah LocaleString hota toh kuch aisa print hota 23/1/2023, 5:03:00 AM.

console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()

console.log(myTimeStamp); 
console.log(myCreatedDate.getTime())
console.log(Date.now());


let newDate = new Date()
console.log(newDate); // ye aaj ka date batayega samjo 25 june 2025 

console.log(newDate.getMonth()) // ye number of month batayega ,toh 05 print hoga.

console.log(newDate.getDay()) // ye day batayega,samjo aaj thursday hai toh 04 print hoga

newDate.toLocaleString('default',{
 weekday:"long"   
})