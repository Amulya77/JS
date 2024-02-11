const score=400
console.log(score);//400

const balance= new Number(400);
console.log(balance);//[Number: 400]

console.log(balance.toString().length);//3
console.log(balance.toFixed(2));//400.00

const othernum=23.895655;
console.log(othernum.toPrecision(3));//23.9

const hundreds=1000000
console.log(hundreds.toLocaleString('en-IN'));//10,00,000


//==================Maths=====================////


console.log(Math);//Math object
console.log(Math.PI);//3.141592653589793
console.log(Math.E);//2.718281828459045
console.log(Math.abs(-4));//4
console.log(Math.ceil(4.3));//5
console.log(Math.floor(4.8));//4
console.log(Math.round(4.3));//4
console.log(Math.sqrt(16));//4
console.log(Math.pow(2,3));//8
console.log(Math.min(2,3,4,5,6,7,8,9));//2
console.log(Math.max(2,3,4,5,6,7,8,9));//9

console.log(Math.random());//random number between 0 and 1
console.log(Math.floor(Math.random()*10)+1);//random number between 0 and 10


const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min);//random number between 10 and 20