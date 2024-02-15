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

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------
function calculateCartPrice(num1){
    return num1;
}

console.log(calculateCartPrice(100));//100

//suppose a situation arises where we need to add multiple items in the cart and calculate the total price
//we can use rest parameter to solve this problem
//rest parameter is used to pass multiple arguments to a function and it is represented by three dots followed by the parameter name
//rest parameter is always the last parameter in the function
function calculateCartPrice2(...num1){
    console.log(num1);
//     let total=0;
//     for(let i=0;i<num1.length;i++){
//         total+=num1[i];
//     }
//     return total;
}

//rest parameter is always an array
console.log(calculateCartPrice2(100,200,300,400));//100,200,300,400  and undefined is also printed because no return statement is there

//---------------------------------------interview-------------------------------------
function calculateCartPrice3(val1 , val2, ...num1){
    console.log(val1);
    console.log(val2);
    return num1;
}

//val1=100, val2=200 and num1=[300,400,500,600]
console.log(calculateCartPrice3(100,200,300,400,500,600));//100,200  and [300,400,500,600] is also printed because return statement is there


const user={
    username:"Sonam",
    price:100
    //prices:100//this will retuen undefined in the console log statement
    //so always check the key name in the object and use the same key name in the console log statement
}

function handObject(anyobject){
   // console.log(anyobject);//nothing is printed
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);//Username is Sonam and price is 100
}

//handObject(user);//Username is Sonam and price is 100

handObject({
    username:"Sonam",
    price:200
});//Username is Sonam and price is 200

const myNewArray=[200,300,400,500,600];

function returnSecondvalue(getArray){
    return getArray[1];
}

console.log(returnSecondvalue(myNewArray));//300

console.log(returnSecondvalue([200,400,600,800]));//400

//------------------------------------------------------------------------------