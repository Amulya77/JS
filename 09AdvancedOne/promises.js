// Certainly! Let's simplify the concept of Promise:

// ### Promise in Simple Terms:

// Think of a Promise as a guarantee made by someone to do something for you in the future, like a friend promising to bring you your favorite snack tomorrow.

// 1. **Promise Made**: Your friend promises to bring you your favorite snack tomorrow.

// 2. **States**:
//    - **Pending**: Right now, the promise is pending. Your friend hasn't brought the snack yet.
//    - **Fulfilled**: If your friend keeps their promise and brings the snack, the promise is fulfilled.
//    - **Rejected**: If your friend forgets or something comes up, the promise is rejected.

// 3. **Handling the Promise**:
//    - You trust your friend, so you wait for the snack patiently.
//    - If your friend fulfills the promise, you happily enjoy your snack.
//    - If your friend can't fulfill the promise (maybe they got busy), you might be disappointed, but you'll handle it gracefully.

// 4. **Chaining Promises**:
//    - Sometimes, you might ask for more than one thing. Your friend might promise to bring not just one, but two snacks tomorrow.
//    - You can chain promises like this: "If you bring the first snack, can you also bring the drink?"

// 5. **Async Operations**:
//    - Promises are great for dealing with things that take time, like waiting for your friend to bring the snack. You don't have to sit there staring at the door waiting for them to arrive.

// In JavaScript, Promises work similarly. They represent operations that haven't completed yet but will at some point in the future. You can write code that responds when the operation is done (either successfully or with an error) without having to worry about blocking the program's execution.

// So, Promises help you handle asynchronous actions in a more organized and manageable way, just like waiting for your friend to bring your snack!




const promiseOne= new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    }, 1000);   
    
})

promiseOne.then(function(){
    console.log('I am done');
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2 is complete');
        resolve();
    }, 1000);   
    
}).then(function(){
    console.log('I am done 2');
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 3 is complete');
        resolve({id: 1, name: 'John'});
    }, 1000);   
    
})

promiseThree.then(function(result){
    console.log('I am done 3', result);
})



const promiseFour= new Promise(function(resolve, reject){
    setTimeout(function(){
        let error= true;
        if(!error){
            resolve({ id: 1, name: 'John'});
        }else{
           reject(new Error('Something went wrong'));
        }
    }, 1000) 
    
})
 

promiseFour.then((user)=>{
    console.log('User', user);
    return user.name;
}).then((userName)=>{
    console.log('User name', userName);
}).catch((error)=>{
    console.log('Error', error);
}).finally(()=>{
    console.log('Finally will print');
})




const promiseFive= new Promise(function(resolve, reject){
    setTimeout(function(){
        let error= true;
        if(!error){
            resolve({ id: 2, name: 'Ruhanee'});
        }else{
           reject('Error Something went wrong');
        }
    }, 1000) 
    
})

async function consumePromiseFive(){
    try{
        const response= await promiseFive;
        console.log('Response from promise five', response);
    }catch(err){
        console.log(err);
    }
   
}
consumePromiseFive();


// async function getAllUsers(){
//     const response= await fetch('https://api.github.com/users/amulya77')
//     const data=await response.json()
//     console.log(data);
// }

// getAllUsers();

// async function getAllUsers(){
   
//     try{
//         const response= await fetch('https://api.github.com/users/amulya77')
//         const data=await response.json()//.then(data=>console.log(data)).catch(err=>console.log(err));
//         console.log(data);
//     }catch (error){
//         console.log("E:", error);
//     }
// }

// getAllUsers();


fetch('https://api.github.com/users/amulya77')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))



// Example of a Promise
let promise = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation
    setTimeout(() => {
        let success = true;
        if (success) {
            resolve("Operation completed successfully!"); // Resolve the Promise
        } else {
            reject("Operation failed!"); // Reject the Promise
        }
    }, 2000); // Simulate a 2-second delay
});

// Handle the result of the Promise
promise.then((message) => {
    console.log("Success:", message);
}).catch((error) => {
    console.error("Error:", error);
});






// An asynchronous operation, in programming, refers to a task or operation that doesn't block the execution of the program while waiting for it to complete. Instead, the program continues to run, and the result of the asynchronous operation is handled separately once it's finished.

// Here's a simple analogy to understand asynchronous operations:

// ### Analogy: Waiting for a Package Delivery

// Imagine you've ordered a package online, and you're waiting for it to be delivered to your doorstep.

// 1. **Synchronous Waiting**:
//    - If you were waiting synchronously, you would sit by the door and do nothing else until the package arrives. You'd be blocked from doing anything else until the delivery is complete.

// 2. **Asynchronous Waiting**:
//    - If you're waiting asynchronously, you could carry on with your day while periodically checking the door or your phone for delivery updates. You don't have to stop everything else you're doing just to wait for the package.

// ### Characteristics of Asynchronous Operations:

// 1. **Non-Blocking**: Asynchronous operations don't stop the execution of the program. Other tasks can continue while waiting for the asynchronous operation to complete.

// 2. **Callback Mechanism**: Asynchronous operations often use callbacks or other mechanisms (like Promises or async/await in JavaScript) to handle the result of the operation once it's finished.

// 3. **Concurrency**: Asynchronous operations can be executed concurrently with other operations, allowing for more efficient use of system resources and better responsiveness in applications.

// ### Examples of Asynchronous Operations:

// - **Fetching Data from a Server**: When making an HTTP request to a server to fetch data, the program doesn't halt while waiting for the response. Instead, it continues executing other tasks, and the response is handled asynchronously when it arrives.

// - **File I/O Operations**: Reading or writing files to disk can be asynchronous. The program can continue its execution while the file operation is being performed in the background.

// - **Timers and Delays**: Setting timers or delays in programming languages allows the program to schedule tasks to be executed in the future without blocking the main execution thread.

// Overall, asynchronous operations are crucial for building responsive and efficient software systems, especially in scenarios where tasks may take a variable amount of time to complete, such as network communication or I/O operations.


