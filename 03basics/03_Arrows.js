const user={
    username:"Sonam",
    price:100,

    welcomeMessage:function(){
        console.log(`${this.username} is welcome to our website`);
    console.log(this);
    }

}

user.welcomeMessage();//Sonam is welcome to our website
user.username="Tanisha";
user.welcomeMessage();//Tanisha is welcome to our website

console.log(this);//{} because this is a global object and it is empty in the beginning
//this keyword is used to refer to the object that is executing the current function

///================================================================================================
//if we use this keyword in a browser then it refers to the window object 
//and if we are using node js then this will refer to the global object</script>
//================================================================================================

// function chai(){
//     console.log(this);//bahut saara kuch
// }
// chai();

// function chai(){
//     let username="amulya"
//     console.log(this.username);//undefined
    
// }
// chai()

// // const chai= function(){
// //     let username="amulya"
// //     console.log(this.username);//undefined
// // }
// chai()

// const chai=()=>{
//     let username="amulya"
//     console.log(this.username);//undefined
// }
// chai()
//we can use this in arrow function and it will give the same output as the above function

// const addtwo=(num1,num2) =>{
//     return num1+num2;
// }

//const addtwo=(num1,num2) => num1+num2;

const addtwo=(num1,num2) => (num1+num2);
console.log(addtwo(10,20));//30