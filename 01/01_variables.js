const accountId = 465123      //varialbles declared and assigned by const keyword cannot be changed after assignment of value once in the code .  Node.js will throw error on second assignment of value on the same variable..
     // accountId = "Jaipur" // Not Allowed


let accountEmail = "amit@g.com"
var accountPassword = "12345"
accountCity =" jaipur"
let accountState;   //if value  is not assigned to a variable then it will print undefined.

accountEmail = "hc@hc.com"
accountPassword ="21122111"
accountCity = "Bengaluru"

console.table([accountEmail,accountId,accountPassword,accountCity,accountState])

/*
prefer not to use var
because of issue in block scope and functional scope

*/
