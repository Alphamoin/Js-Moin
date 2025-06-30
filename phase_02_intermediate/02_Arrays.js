const marvel_heros =["thor", "ironman", "spiderman"]
const dc_heros = ["superman","flash","batman"]

//marvel_heros.push(dc_heros)         |
//console.log(marvel_heros)           | ----------> Aisa bhi likh sakte hai lekin better way nai hai 
//console.log(marvel_heros[3][1]);    |

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);
// Merge karne ka better way hai, upar wale se behter :)

const all_new_heros = [...marvel_heros, ...dc_heros]

console.log(all_new_heros);

// Aisa bhi merge kar sakte hai ,sabse accha tarika hai ye.

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

// isme ye hua ki array bahut complex tarah se likha hua hai ,array k andar another array diya hua hai jo bahut confusing hai.

// so, another_array.flat(infinity) matlab ye isko acche tarah se likhta hai,simple form me aur infinity k jagah number bhi likh sakte hai.

// agar apne ko depth pata hai iski nai toh normaly infinty likhna accha hai vo khud-b-khud check kar leta hai .baad me ye kuch aisa
// print hoga [1,2,3,4,5,6,7,6,7,4,5].

console.log(Array.isArray("Moin")) //isme ye false return karega
console.log(Array.from("Moin"))  // isme ye string ko array me convert karega ['M','O','I','N']

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
// ye score ko array me convert karega for eg:[100,200,300] aisa :)