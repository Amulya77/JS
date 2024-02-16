//iife 
//Immediately Invoked Function Expression(IIFE)

//we use this to avoid the global scope

// function chai(){
//     console.log("hello");
// }
// chai();//hello

(function chai(){
    console.log("hello");
})();//hello the function is called immediately after the declaration 
//this is called iife it is immediately invoked function expression


//()(); //this semicolon is necessary to end the iife function