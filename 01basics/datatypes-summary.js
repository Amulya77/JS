
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




///////////////////////////////+++++


// stack(primitive), heap(non-primitive)
// heap: reference types are stored in heap
// stack: primitive types are stored in stack

//primitive types are immutable
//reference types are mutable
//primitive types are stored in stack
//reference types are stored in heap

let myname="bruce";
let anothername=myname;
console.log(anothername); //bruce
myname="clark";
console.log(anothername); //bruce

anothername="clark";
console.log(myname); //clark
console.log(anothername); //clark


let userone={
    name: 'bruce',
    age: 30
}

let usertwo=userone;
usertwo.age=45;
console.log(userone.age); //45
console.log(usertwo.age); //45


