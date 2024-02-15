// let a=10
// const b=20
// var c=30
// console.log(a);//10
// console.log(b);//20  
// console.log(c);//30



// if(true){
//     let a=10
//     const b=20
//     //var c=30
// }
// console.log(a);//Error: a is not defined
// console.log(b);//Error: b is not defined
// console.log(c);//30


let a=300
const b=400
if (true){
    let a=100
    const b=200
    console.log("Inner a:",a);//100
    console.log("Inner b:",b);//200
}
console.log("Outer a:",a)//300 because let a=100 is block scoped and let a=300 is global scoped
console.log("Outer b:",b)//400 because const b=200 is block scoped and const b=400 is global scoped

//the difference between let and const is that let can be reassigned but const cannot be reassigned

// a=400//no error, as 'let' allows variable to be redeclared
// b=500//error, as 'const' does not allow variable to be redeclared

console.log("-------------------------");

//----------nested scopes-------------

function outerFunction(){
   const outerusername="amulya"
    function innerFunction(){
         const Innerusername="tanisha"
         //console.log("Inner username:",Innerusernameusername);
         console.log("Outer username:",outerusername);
    }
    //console.log(Innerusername);//Error: Innerusername is not defined
    //innerFunction()//if we comment out this line, then the inner username will not be printed
    innerFunction()
}
//outerFunction()//nothing will be printed because innerFunction is not called
outerFunction()//Outer username: amulya

console.log("-------------------------");

if(true){
    const username="amulya"
    if(username==="amulya"){
        const website=" loves tanisha"
        console.log(username+website);
    }
    //console.log(username+website);//Error: website is not defined 
                                //because it is only accessible within the scope of the "if" statement

}
//console.log(username);//Error: username is not defined
                        //because it is only accessible within the scope of the "if" statement

//++++++++++++++++++++++++++Interesting++++++++++++++++++++++++++++++

console.log(addone(5));//6
function addone(num){
    return num+1;

}


addTwo(6);//error   Cannot access 'addTwo' before initialization
const addTwo=function(num){
    return num+2;
}

//the above concept is called hoisting
//hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase in JavaScript
