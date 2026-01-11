const accountId = 144553 //Values cannot be changed
let accountEmail ="abc123@email.com" 
var accountPassword ="12345" // var - has global scope
accountCity= "Jaipur" // Variable can be declared like this but one should not do this.
let accountState

console.log(accountId);
accountEmail="sbi@email.com"
accountPassword="232323"
accountCity="Bengaluru"
vishal="vsi"
/*
This is also a comment.
Prefer not to use var. Because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
