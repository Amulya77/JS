'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');



const displayMovements=function(movements){
  containerMovements.innerHTML='';//to clear the container before adding the new movements

  movements.forEach(function(mov,i){
    const type=mov>0?'deposit':'withdrawal';
    const html=`
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>`;
    containerMovements.insertAdjacentHTML('afterbegin',html);//afterbegin is used to insert the html at the top of the container
  });

}
// displayMovements(account1.movements);

const calcDisplayBalance=function(acc){
  const balance=acc.movements.reduce((acc,cur)=>acc+cur,0);
  acc.balance=balance
  labelBalance.textContent=`${acc.balance} EUR`;
}

// calcDisplayBalance(account1.movements);
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};


///update UI
const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

// console.log(containerMovements.innerHTML);
// const createUsernames=function(user){  
// const username= user
// .toLowerCase()
// .split(' ')
// .map(name=>name[0]).
// join('');
// return username;
// }

const createUsernames=function(acc){  
  acc.forEach(function(acc){
  acc.username= acc.owner//adding a new property to the object
                              //using the owner name as value
  .toLowerCase()
  .split(' ')
  .map(name=>name[0]).
  join('');
  
  });
}
createUsernames(accounts) 
console.log(accounts);

/*
```
// Define an object
const obj = { value1: 5 };
// Function to modify the object
function modifyObject(obj) {
    obj.value2 = 10;
}
// Call the function and modify the object
modifyObject(obj);

// Output the modified object
console.log(obj); // Output: { value1: 5, value2: 10 }

In this modified example, 
we have added another value value2 to the object within the modifyObject function. 
As before, because objects are passed by reference, 
any modifications made to the object inside the function will reflect 
on the original object itself. 
When we output obj after calling the modifyObject function,
 we can see that it now contains both value1 and value2 properties.
```

*/

// console.log(createUsernames('Steven Thomas Williams'));
//const user='Steven Thomas Williams';//stw
// const username= user
// .toLowerCase()
// .split(' ')
// .map(function(name){
//   return name[0];
// }).join('');

// const username= user.toLowerCase().split(' ').map(name=>name[0]).join('');
// console.log(username);



/////Event Handlers

let currentAccount;


btnLogin.addEventListener('click',function(e){
  
  e.preventDefault();//to prevent the form from submitting
  console.log('LOGIN');

  currentAccount=accounts.find(acc=>acc.username===inputLoginUsername.value);
  console.log(currentAccount);


  if(currentAccount?.pin===Number(inputLoginPin.value)){
    console.log('LOGIN');
    labelWelcome.textContent=`Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity=100;

    inputLoginUsername.value=inputLoginPin.value='';
    inputLoginPin.blur();//to remove the focus from the input field





    displayMovements(currentAccount.movements);


    calcDisplayBalance(currentAccount);

    calcDisplaySummary(currentAccount);

  }
});



btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

















/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////


// const euroToUSD=1.1;

// const movementsUSD=movements.map(function(mov){
//   return mov*euroToUSD;
// } );//map method returns a new array with the results of calling a provided function on every

// // console.log('Original Movements:',movements);
// // console.log('Conversion to USD:',movementsUSD);


// const movementsUSDfor=[];
// for(const mov of movements) movementsUSDfor.push(mov*euroToUSD);
// // console.log('For loop conversion to USD:',movementsUSDfor);//same as map method but using for loop instead



// const movementsUSD2=movements.map(mov=> mov*euroToUSD);//using arrow function returning the result of the expression

// console.log('Conversion to USD using arrow function:',movementsUSD2);//using arrow function

//////////////////filter method//////////////////////////

// console.log('Original Movements:',movements);

// const deposits=movements.filter(function(mov){
//   return mov>0;
// });
// console.log('Deposits using filter:',deposits);

// const depositsfor=[];
// for(const mov of movements) if(mov>0) depositsfor.push(mov);

// console.log('Deposits using for loop:',depositsfor);

// const withdrawals=movements.filter(mov=>mov<0);
// console.log('Withdrawals using arrow function:',withdrawals);

////////////////////////reduce method///////////////////////

// console.log('Original Movements:',movements);


// const balance= movements.reduce(function(acc,cur,i,arr){
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc+cur;
// },0);

// console.log('Balance using reduce:',balance);

// let balance2=0;
// for(const mov of movements) balance2+=mov;
// console.log('Balance using for loop:',balance2);


// //MAXIMUM value
// const max=movements.reduce((acc,cur)=>acc>cur?acc:cur,0);
// console.log('Maximum movement: ',max);

// const maxagain=movements.reduce((acc,curr)=>{
//   if(acc>curr) return acc;
//   else return curr;
// },movements[0]);

// console.log('Maximum movement using if else:',maxagain);




/*
Certainly! Here are simple examples of `reduce`, `filter`, and `map` functions in JavaScript:

1. **Reduce:**
   The `reduce` function iterates over an array and accumulates a single value based on the elements of the array.

```javascript
// Example of reduce: Summing up all elements in an array
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5)
```

2. **Filter:**
   The `filter` function creates a new array containing only the elements of the original array that satisfy a specified condition.

```javascript
// Example of filter: Filtering out even numbers from an array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter((number) => number % 2 === 0);

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]
```

3. **Map:**
   The `map` function creates a new array by applying a function to each element of the original array.

```javascript
// Example of map: Doubling each element in an array
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((number) => number * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
```

These examples demonstrate how `reduce`, `filter`, and `map` can be used to perform common operations on arrays in JavaScript.


*/