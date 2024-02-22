const coding= ["js", "php", "css", "rb"];


const values=coding.forEach((item)=>{
    console.log(item);
    return item;
})

console.log(values);//undefined

//the forEach method is used to iterate over an array and it takes a callback function as an argument 
//In the above code, we are using arrow functions which returns the value of each element
//The forEach method returns undefined so when we log 'values' it will print 'undefined'. To get the actual elements in the array, we can use the map method

const myNums=[1,2,3,4,5,6,7,8,9,10];

const newvalues=myNums.filter((num)=> num>4)//filter method is used to create a new array with all elements that pass the test implemented by the provided function
console.log(newvalues);//[ 5, 6, 7, 8, 9, 10 ]

const newvalues2=myNums.filter((num)=> {//when we use {} we need to use return keyword
    return num>4;
})
console.log(newvalues2)//[ 5, 6, 7, 8, 9, 10 ]

const nwNums=[]

myNums.forEach((num)=>{
    if(num>4){
        nwNums.push(num);
    }
})
console.log(nwNums);//[ 5, 6, 7, 8, 9, 10 ]


