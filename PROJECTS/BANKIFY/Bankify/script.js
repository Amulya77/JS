'use strict';



const account1 = {
    owner: 'Amulya Maurya',
    movements: [1000, 250, -300, 3000, -500, -120, 750, 300],
    interestRate: 1.2, 
    pin: 1111,
};
  
const account2 = {
    owner: 'Hermione Granger',
    movements: [5000, 400, -1500, -790, 3210, -1000, 8500, -300],
    interestRate: 1.5,
    pin: 2222,
};
  
const account3 = {
    owner: 'Robert Downey Junior',
    movements: [2000, -250, 740, -300, -200, 500, 4000, -480],
    interestRate: 0.7,
    pin: 3333,
};
  
const account4 = {
    owner: 'Christian bale',
    movements: [500, 1000, 700, 150, 1100],
    interestRate: 1,
    pin: 4444,
};

const account5 = {
  owner: 'Anjali Bundela',
  movements: [5000, 1000, -700, 150, -1100],
  interestRate: 1,
  pin: 5555,
};
  
const accounts = [account1, account2, account3, account4,account5];


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

const logoutButtons = document.querySelectorAll('.logout-btn');


const hideUI = function () {
  // containerApp.style.display = 'none';
  // document.querySelector('footer').style.display = 'none';
  // document.querySelector('nav').style.display = 'none';

  labelWelcome.textContent='Login Again';
  containerApp.style.opacity=0;
};

// Add event listeners to all logout buttons
logoutButtons.forEach(button => {
  button.addEventListener('click', function() {
      // Hide all UI elements when logout button is clicked
      // Clear the logout timer when the user manually logs out
      clearInterval(timer);
      hideUI();
  });
});


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


const calcDisplayBalance=function(acc){
  const balance=acc.movements.reduce((acc,cur)=>acc+cur,0);
  acc.balance=balance
  labelBalance.textContent=`${acc.balance} ₹`;
}


const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}₹`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}₹`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}₹`;
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

    updateLoginDate();

    displayMovements(currentAccount.movements);


    calcDisplayBalance(currentAccount);

    calcDisplaySummary(currentAccount);

    startLogoutTimer();

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

//loan
btnLoan.addEventListener('click',function(e){
  e.preventDefault();
  const amount=Number(inputLoanAmount.value);
  if(amount>0 && currentAccount.movements.some(mov=>mov>=amount*0.1)){
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
    // alert(`Loan of ${amount} added to your account`);
    console.log(currentAccount.movements);
  }
  inputLoanAmount.value='';
});

//close account
btnClose.addEventListener('click',function(e){
  e.preventDefault();
  if(inputCloseUsername.value===currentAccount.username && Number(inputClosePin.value)===currentAccount.pin){
    const index=accounts.findIndex(acc=>acc.username===currentAccount.username);
    console.log(index);
    accounts.splice(index,1);
    labelWelcome.textContent='Login Again';
    containerApp.style.opacity=0;
  }
  inputCloseUsername.value=inputClosePin.value='';
  console.log(accounts);
}); 

//sort
let sorted = false;

// Function to sort movements
const sortMovements = function () {
    sorted = !sorted;
    const movements = sorted ? currentAccount.movements.slice().sort((a, b) => a - b) : currentAccount.movements;

    // Display sorted movements
    displayMovements(movements);
};

// Event listener for sort button
btnSort.addEventListener('click', sortMovements);



//date

const formatMovementDate = function (date) {
  const calcDaysPassed = (date1, date2) =>
      Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));

  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  const day = `${date.getDate()}`.padStart(2, 0);
  const month = `${date.getMonth() + 1}`.padStart(2, 0);
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

// Function to update UI with current login date
const updateLoginDate = function () {
  const now = new Date();
  const options = {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
  };
  const locale = navigator.language;

  labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now);
};




let timer; // Variable to store the timer ID
let timeLeft; // Variable to store the time left in milliseconds

// Function to start the logout timer
const startLogoutTimer = function () {
    // Clear any existing timer
    clearInterval(timer);

    // Set the timer to 5 minutes (5 minutes * 60 seconds * 1000 milliseconds)
    timeLeft = 2 * 60 * 1000; // 5 minutes in milliseconds

    timer = setInterval(function () {
        // Calculate minutes and seconds left
        const minutes = Math.floor(timeLeft / 60000);
        const seconds = Math.floor((timeLeft % 60000) / 1000);

        // Display the timer in the UI
        document.querySelector('.timer-display').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

        // Decrease time left by one second
        timeLeft -= 1000;

        // Check if time left is 0, then perform logout actions
        if (timeLeft < 0) {
            clearInterval(timer);
            hideUI(); // Hide UI elements
            console.log('Auto logout after 5 minutes of inactivity');
        }
    }, 1000); // Update the timer every second
};