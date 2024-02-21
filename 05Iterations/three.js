//for of
//for of is used to iterate over the elements of an array or the properties of an object. It is a new feature introduced in ES6. 
//It is a simpler way to loop through all the elements of an array or the properties of an object. It is more readable and less error-prone than other loop constructs like for, forEach, and for in.


//["", "", "", "", "", "", "", "", "", ""]
//[{},{},{},{},{},{},{},{},{}]//array of objects


let arr = [1, 2, 3, 4, 5];
for (let element of arr) {
    console.log(element);
}
console.log("Outside the loop");

const greetings ="Hello World";
for (let char of greetings) {
    console.log(char);
}
console.log("Outside the loop");

//maps
let myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");
myMap.set(2, "two");
myMap.set(2, "two");
console.log(myMap);
for (let key of myMap.keys()) {
    console.log(key);
}

for(const [key, value] of myMap){
    console.log(key, value);
}

const myobj={
    'name1': "John Doe",
    'name2': "Jane Doe",
}
for(const key in myobj){
    console.log(key, myobj[key]);
}
// for(const [key, value] of Object){
//     console.log(key, value);
// }
//the above code will give an error as Object is not iterable
//to make it iterable we can use Object.entries() method

for(const [key, value] of Object.entries(myobj)){
    console.log(key, value);
}
