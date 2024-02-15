// console.log("A");
// console.log("M");
// console.log("U");
// console.log("L");
// console.log("Y");
// console.log("A");


function sayMyName(){
    console.log("A");
    console.log("M");
    console.log("U");
    console.log("L");
    console.log("Y");
    console.log("A");  
}

//sayMyName();


function addTwoNumbers(a, b){
    console.log(a+b);
}
// addTwoNumbers();//NaN
// addTwoNumbers(4, 5);//9
// addTwoNumbers(4,"5");//45
// addTwoNumbers(4,"A");//4A

function addTwoNumbers2(a, b){
    console.log(a+b);
}

const result=addTwoNumbers2(4, 5);//9
console.log("Result: ",result);//undefined


function addTwoNumbers3(a, b){
    return a+b;
    console.log("This line will not be executed");//Unreachable code, this is because return statement is already there and it will exit the function
}

const result2=addTwoNumbers3(4, 5);//9
console.log("Result: ",result2);//Result: 9


// function loginUserMessage(username){
//     return `Welcome ${username}`;
// }

// loginUserMessage("amulya");//Welcome amulya will not be printed here because no print statement is there
// console.log(loginUserMessage("amulya"));//Welcome amulya will be printed here

// console.log(loginUserMessage(""));//Welcome will be printed here with an empty string as input
// console.log(loginUserMessage());//Welcome undefined will be printed here with no input

function loginUserMessage2(username){
    if(username){
        return `Welcome ${username}`;
    }
    return "Please provide a username";
}

console.log(loginUserMessage2("amulya")); // Welcome amulya
console.log(loginUserMessage2(""));       // Please provide a username
console.log(loginUserMessage2());         // Please provide a username

function loginUserMessage2_(username){
//function loginUserMessage2_(username="Tanisha"){///this is default parameter value if nothing or undefined is passed as input it will be printed as Tanisha
   // if(username===undefined){
    if(!username){
       console.log("Please provide a username");
       return
    }
    return `Welcome ${username}`;
}

console.log(loginUserMessage2_("sonam")); // Welcome sonam
    
console.log(loginUserMessage2_());// Please provide a username
//undefined is also printed because no input is given to the function and it is not returning anything