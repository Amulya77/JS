const userEmail= "a@b.com";

if(userEmail){
    console.log("You are logged in");
}else{  
    console.log("Please log in");
}

//falsy values
//false, 0, "", null, undefined, NaN,-0, BigInt(0), Symbol(0),0n 

//truthy values
//true, 1, " ", "0", [], {}, function(){},'false'

if(BigInt(0)){
    console.log("This is true");
}else{
    console.log("This is false");
}

const userEmail1=[]

if(userEmail1.length==0){
    console.log("array is empty");
}

const empobj={}

if(Object.keys(empobj).length===0){
    console.log("object is empty");
}

// false==0
// false==''
// 0==''
//All the above are true


//Nullish coalescing operator (??)  //ES2020 focus on keywords null and undefined
//It is used to check the null and undefined values

let val1;
val1=5??10
val2=null??10
var1= undefined ??15
val3=null??10??18//it will take the first value which is not null or undefined
console.log(val1);
console.log(val2);
console.log(var1);
//if the value is null or undefined, it will take the right side value
console.log(val3);

//Ternary operator
//It is used to write the if else in a single line

//condition?true:false

const iceteaprice=100
iceteaprice<100?console.log("I will buy it"):console.log("I will not buy it")