/*
Primitive Data types --> give a copy of value --> Stack Memory
Non primitive data types --> give a reference of address --> Heap Memory
*/
let a=12
let b=a
b=15
console.log(a) //12
console.log(b) //15




let user1 ={
        email: "user@gmail.com",
        upi: "user@ybl"
        }

let user2 = user1

user2.upi = "user2@ybl"

console.log(user1.upi);
console.log(user2.upi);




