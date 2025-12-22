"use strict"; // treat all js as newer version

//alert(3+3) //we are using node js not browser
console.log(3+3) // code readability should be high
console.log("Sneha")

console.log(typeof undefined); //
console.log(typeof null);

console.log("1"+2+2);//122
console.log(1+2+"2");//32
console.log("1"+(2+2)); //14
console.log(+true) //1 basically converts to true to number
console.log(typeof (+true)); //number
console.log(+""); //0

var1=var2=var4 =44

console.log(null >0); // false
console.log(null==0); // false
console.log(null>=0); //true

/*
The reason is that an equality check == and comparisons >. <, >=, <= work differently.
Comparisons convert null to a number , treating it as 0.
That’s why
null >= 0  → true
null > 0  —> false 
*/

// === strict check
// Whenever comparing always make sure that the data types of both the variables are same





