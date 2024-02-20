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

//the iife function is called immediately after the declaration and can take arguments also
// (function(x,y){console.log(x+y);}(5,6));//11

//another way of passing argument in iife
var add=function(x,y){return x+y;};//this is a function expression
add(3,4);//7

//closure
//when a function has access to variables that are declared outside of it
//these functions are said to have access to outer scopes or they maintain access to those variables even when they go out of their scope 