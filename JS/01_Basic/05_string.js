// for strig concatenation we use back ticks (`)
// String interpollation - you create placeholders.
//String is primitive data type

const gameName=new String('bumblebee')
// String is an object
//it is key value pair 
//refer doc
console.log(gameName[0]);
console.log(gameName.__proto__);
Object.getPrototypeOf(gameName)
console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('e')) //always take the first occueing instance

const newString=gameName.substring(0,4)

let str1= "HareKrishna"
const str3 = gameName.slice(-8,4) //umb
const str2 = str1.slice(-8,4) //e
console.log(str2);
/*
The negative value will start from -1 and from behind, 
the 


Substring - if you give negative value in the start, it will start from 0
*/
