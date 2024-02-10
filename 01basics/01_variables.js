const accountId = 144553
let accountEmail="amulya@google.com"
var accpassword="12345"
accCity="Amaravathi"

let accState;

// accountId = 2345

accountEmail="hch@gmail"
accpassword="123456"
// accCity="Vijayawada"

console.log(accountId);



/* 
    1. const - constant
    2. let - variable
    3. var - variable
    prefer not to use var because of issue in block scope and functional scope
*/
/*
------------------------------------------------------

In JavaScript, `var` and `let` are both used for variable declaration, but they have some differences in terms of scope and behavior.

1. **var**:
   - Variables declared with `var` are function-scoped. This means that the variable is accessible within the function it is declared in, regardless of block scope.
   - Variables declared with `var` are hoisted to the top of their scope during the execution phase. This means you can access a variable before it's declared without getting an error, but it will have the value `undefined`.
   - `var` variables can be re-declared within the same scope without any errors.
   - Example:
     ```javascript
     function example() {
         var x = 10;
         if (true) {
             var x = 20;
             console.log(x); // Outputs 20
         }
         console.log(x); // Outputs 20
     }
     ```

2. **let**:
   - Variables declared with `let` have block scope. This means that the variable is only accessible within the block it's declared in (e.g., within curly braces `{}`).
   - Variables declared with `let` are not hoisted to the top of their scope. If you try to access a `let` variable before it's declared, you'll get a ReferenceError.
   - `let` variables cannot be re-declared within the same scope.
   - Example:
     ```javascript
     function example() {
         let x = 10;
         if (true) {
             let x = 20;
             console.log(x); // Outputs 20
         }
         console.log(x); // Outputs 10
     }
     ```
In modern JavaScript development, `let` is often preferred over `var` because it provides block scoping and helps avoid some common issues associated with variable declaration and hoisting. However, `var` is still used in certain scenarios, especially in legacy code or when intentional hoisting behavior is desired.*/
console.table({accountId,accountEmail,accpassword,accCity,accState})