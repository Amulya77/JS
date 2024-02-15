// singleton------------

//literal

//constructor
//Object.create----------


//object literals

const mySym= Symbol("Key1")



const JsUser={
    name:"Amulya",
    "full name":"Amulya Maurya",
    //mySym:"myKey1",//this is not a symbol, it is a string
    [mySym]:"myKey1",  //to access the symbol as a a key, we need to use the square brackets notation
    age:21,
    location:"Bangalore",
    email:"amulya@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Wednesday"],

    isActive:true
}

console.log(JsUser);//

console.log(JsUser.name);
console.log(JsUser["name"]);
console.log(JsUser["full name"]);
//console.log(JsUser."full name");//error
//because dot notation does not work with special characters in the key name

console.log(mySym);//Symbol(Key1)
console.log(JsUser.mySym);//"myKey1"
console.log(typeof JsUser.mySym);//string
//console.log(JsUser[mySym]);//undefined before adding the square brackets notation
console.log(typeof JsUser[mySym]);//

//so overall the symbol is used to create a unique key for an object property.



JsUser.email="newEmail@gmial.com";
console.log(JsUser);

//Object.freeze(JsUser);//this will freeze the object and we cannot add, delete or modify the properties of the object
//JsUser.age=22;//error because age is not a writable property


JsUser.greeting=function(){
    console.log("Hello, JS User");
}

//console.log(JsUser.greeting);//ReferenceError: JsUser is not defined because JsUser is not a function
// console.log(JsUser.greeting())

console.log(JsUser.greeting);//[Function (anonymous)]
console.log(JsUser.greeting()); // Hello, JS User and undefined 
//undefined is printing because the function is not returning anything


JsUser.greetingTwo=function(){
    return "Hello, JS User";
}

console.log(JsUser.greetingTwo());//Hello, JS User and undefined is not printing because the function is returning something

JsUser.greetingThree=function(){
    return "Hello, "+this.name;
};

console.log(JsUser.greetingThree());//Hello, Amulya



//just remember to access the properties of an object, we can use the dot notation or the square brackets notation
//usually use dot but if the key name has special characters or spaces, use square brackets notation, special charachters such as hyphen, space, etc. or a symbol