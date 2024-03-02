

//synchronous code
console.log("one");
console.log("two");
console.log("three");


//asynchronous code

// function hii(){
//     console.log("hii");
// }
// setTimeout(hii, 3000);

setTimeout(() => {
    console.log("Asynchronous - hello");
}
,3000);

console.log("four");


//callbacks
//A callback is a function passed as an argument to another function


function sum(a,b){
    console.log (`inside the sum function- the sum is:${a+b}`);

}


function calculator( a,b, callback){
    console.log("inside the calculator function");
    callback(a,b);
   // console.log('after sum');//this line will not be executed

}

let answer=calculator(1,2,sum);//this is a callback function
//let answer=calculator(1,2,sum());//cannot pass like this with parenthesis

console.log(answer);

//callback hell's problem
//callback hell is a situation when you have a lot of nested callbacks which makes the code hard to read and debug


function getdata(data){
    console.log("inside getdata function ",data);
    setTimeout(() => {
        console.log("data is ready after 2 secs- ", data);
    }, 2000);
}


getdata(10);
getdata(20);
getdata(30);




///callback hell

function getdataagain(data,getNextData){
    console.log("inside getdataAgain function ",data);
    setTimeout(() => {
        console.log("data- ", data);
        if(getNextData)
        getNextData();
    }, 2500);
}
//getdataagain(11,getdataagain(34));//this is a callback hell  34 prints first and then 11 because it takes time to print 34 so 11 is printed first
getdataagain(3,()=>{
    getdataagain(222,()=>{
        getdataagain(333);
    });
});



