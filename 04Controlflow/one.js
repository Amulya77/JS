//if

if(true){
    console.log('This is true');
}
//output: This is true

//<, >, <=, >=, ==, ===, !=, !==//comparison operators
//&&, ||, !//logical operators
//if else
if(false){
    console.log('This is true');
}else{
    console.log('This is false');
}
//output: This is false

//if else if
if(false){
    console.log('This is true');
}else if(true){
    console.log('This is true');
}else{
    console.log('This is false');
}
//output: This is true

var x = 10;
if(x < 5) {
    console.log('This is true');
}else if (x == 5){
    console.log('This is true');
}else{      
    console.log('This is false');
}
//output: This is false

if(5 == "5"){
    console.log('This is true');
}
if(5 === "5"){
    console.log('This is true');
}else{
    console.log('This is false');
}
//=== is used to check the type and value of the variable as well
//== is used to check the value of the variable only

const score=200
if(score>=100){
    const power="fly"
    console.log(`You are superman and you can ${power}`)
}


const balance=1000
if(balance>500) console.log("test"),console.log("test2");
//do not use this kind of syntax, it is not readable

if(balance<500){
    console.log("You have less balance")
} else if(balance>500){
    console.log("You have enough balance")
}else{
    console.log("You have no balance")
}

const userloggedin=true
const debitcard= true
if(userloggedin && debitcard && 2==2){
    console.log("You can purchase")
}else{
    console.log("You cannot purchase")
}