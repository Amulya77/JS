
//js is dynamically typed language
//primitive types:
//7 types: undefined, null, boolean, number, string, symbol, bigint

const id= Symbol('123');
const anotherid= Symbol('123');
console.log(id===anotherid); //false

const bgN= BigInt(12345678901234567890); 
console.log(typeof bgN) //bigint

//reference types: object, array, function
const heros=['superman', 'batman', 'wonderwoman'];

let myobj={
    name: 'bruce',
    age: 30
}

const myfunction= function(){
    console.log("hello");
}

console.log(typeof heros); //object
console.log(typeof myobj); //object 
console.log(typeof myfunction); //function

