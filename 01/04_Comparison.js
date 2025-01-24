console.log(2 > 1); // True
console.log(2 >= 1); //True
console.log(2 < 1);  //false
console.log(2 == 1); //false
console.log(2 != 1); //True


console.log("2" > 1);// True /Because javascript converts the string into number when compared
console.log("02" > 1);//true
console.log("01" == 1);//true



console.log(null > 0);//false
console.log(null == 0);//false
console.log(null >= 0);//true

console.log(undefined == 0);//false
console.log(undefined > 0);//false
console.log(undefined < 0);//false

// === 

console.log("2" === 2);//false/it  checks for same datatype as well as the values.