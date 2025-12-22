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

// === strict check also checks data type
// Whenever comparing always make sure that the data types of both the variables are same

const num=7443939484775n // takes in big int as data type

const myFunction =function(){
    console.log("Hello World");
    
}

console.log(typeof myFunction);




