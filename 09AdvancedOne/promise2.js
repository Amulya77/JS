//TO SOLVE THE CALLBACK HELL PROBLEM WE USE PROMISES

//A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred). 
//A promise may be in one of 3 possible states: fulfilled, rejected, or pending.
//A promise is a proxy for a value not necessarily known when the promise is created.
//It allows you to associate handlers with an asynchronous action's eventual success value or failure reason.


let promise1=new Promise((resolve,reject)=>{
    console.log("inside the promise1");
    
});


let promise2=new Promise((resolve,reject)=>{
    console.log("inside the promise2");
    resolve("Success hogya");
});


let promise3=new Promise((resolve,reject)=>{
    console.log("inside the promise3");
     reject("Failure hoggya");
});

function getdata(dataId,getNextData){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("data- ",dataId);
            resolve("success");
            if(getNextData)
            getNextData();  
        }, 8000);
    });
}