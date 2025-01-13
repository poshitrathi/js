const accountId = 14453
let accountEmail = "poshitrathi03@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
// accountId = 2 //not allowed

accountEmail = "poshit950@gmail.com"
accountPassword = "4567"
accountCity = "Kota"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity])
