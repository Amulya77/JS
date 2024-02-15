//array


const myArr=[0,1,2,3,4,5,6,7,8,9,10];
console.log(myArr);
//js arrays are dynamic and can hold multiple data types

//arrays-copy operation is by reference
//JS array-copy operation creates shallow copy
//shallow copy means that the new array will contain references to the same objects as the original array
//deep copy means that the new array will contain copies of the objects in the original array

const myheros=['superman','batman','wonderwoman','flash','greenlantern'];

const myArr2=new Array(1,2,3,4,5,6,7,8,9,10);
console.log(myArr2[0]);

//array methods

myArr.push(11);
console.log(myArr);
myArr.pop();
console.log(myArr);

myArr.unshift(9);//adds the element at the beginning of the array
console.log(myArr);
myArr.shift();//removes the first element
console.log(myArr);

console.log(myArr.indexOf(5));//returns the index of the element if found otherwise returns -1
console.log(myArr.includes(9));//returns true if the element is present in the array otherwise returns false


const newArr=myArr.join()

console.log(newArr);//returns a string of the array elements separated by commas 
                   //useful when you want to convert an array into a single string
console.log(myArr);//original array is not changed


//slice, splice

console.log("A",myArr);
const slicedArr=myArr.slice(2,5);//returns a new array containing the elements from the start index to the end index
console.log(slicedArr);

console.log("B",myArr);
const splicedArr=myArr.splice(2,5);//removes the elements from the start index to the end index and returns the removed elements
console.log("C",myArr);
console.log(splicedArr);

//the difference between slice and splice is that slice does not change the original array while splice changes it;

