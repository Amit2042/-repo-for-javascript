let score ="33"
 
console.log(typeof score); // string
console.log(typeof(score));// string

let valueInNumber = Number(score)  
console.log(typeof valueInNumber); // number
console.log(valueInNumber); //33

let red ="33aa"
let blue = Number(red) 
console.log(blue); // NaN

let x = null
let y = Number(x)
console.log(y); //0

let z = undefined
let u = Number(z)
console.log(u); //NaN

let s = true
let k = Number(s)
console.log(k); // 1

let m = false
let j = Number(m)
console.log(j); //0

let nam = "Amit"
let newname = Number(nam)
console.log(newname); // Nan


  //Boolean


let IsLoggedIn = 1
let booleanIsloggedIn = Boolean(IsLoggedIn)
console.log(booleanIsloggedIn);//true

let IsfoggedIn = 0
let booleanIsfoggedIn = Boolean(IsfoggedIn)
console.log(booleanIsfoggedIn); //false

let IstoggedIn = ""
let booleanIstoggedIn = Boolean(IstoggedIn)
console.log(booleanIstoggedIn); // false

let IsaoggedIn = "amit"
let booleanIsaoggedIn = Boolean(IsaoggedIn)
console.log(booleanIsaoggedIn); //true

// Strings

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber); //33
console.log(typeof stringNumber); //string
let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion







