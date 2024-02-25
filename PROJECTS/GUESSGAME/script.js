let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');//selecting the submit button
const userInput = document.querySelector('#guessField');//selecting the input field
const guessSlot = document.querySelector('.guesses');//selecting the guesses
const remaining = document.querySelector('.lastResult');//selecting the remaining
const lowOrHi = document.querySelector('.lowOrHi');//selecting the lowOrHi
const startOver = document.querySelector('.resultParas');//selecting the resultParas

const p = document.createElement('p');//creating a paragraph element

let prevGuess = [];//creating an empty array to store the previous guesses
let numGuess = 1;//creating a variable to store the number of guesses

let playGame = true;

if (playGame) {//if playGame is true then only the game will start
  submit.addEventListener('click', function (e) {//when the user clicks the submit button the function will run
    e.preventDefault();//prevent the default action of the form
    const guess = parseInt(userInput.value);//parseInt is used to convert string to number
    validateGuess(guess);//calling the function
  });
}

function validateGuess(guess) {//function to validate the guess
  if (isNaN(guess)) {//if the guess is not a number
    alert('Please enter a valid Number');//alert the user to enter a valid number
  } else if (guess < 1) {//if the guess is less than 1
    alert('Please enter number between 1 and 100');//alert the user to enter a number between 1 and 100
  } else if (guess > 100) {//if the guess is greater than 100
    alert('Please enter number less than or equal to 100');//alert the user to enter a number less than or equal to 100
  } else {//if the guess is valid
    prevGuess.push(guess);//push the guess to the prevGuess array
    if (numGuess === 11) {//if the number of guesses is equal to 11
      displayGuess(guess);//display the guess
      displayMessage(`Game Over. Random number was ${randomNumber}`);//display the message
      endGame();//end the game
    } else {//if the number of guesses is less than 11
      displayGuess(guess);//display the guess
      checkGuess(guess);//check the guess
    }
  }
}

function checkGuess(guess) {//function to check the guess
  if (guess === randomNumber) {//if the guess is equal to the random number
    displayMessage(`You guessed it right`);//display the message
    endGame();//end the game
  } else if (guess < randomNumber) {//if the guess is less than the random number
    displayMessage(`Number is too low`);//display the message
  } else if (guess > randomNumber) {//if the guess is greater than the random number
    displayMessage(`Number is too High`);//display the message
  }
}

function displayGuess(guess) {//function to display the guess
  userInput.value = '';//set the value of the input field to empty
  guessSlot.innerHTML += `${guess} `;//display the guess
  numGuess++;//increment the number of guesses
  remaining.innerHTML = `${11 - numGuess}`;//display the remaining guesses
}

function displayMessage(message) {//function to display the message
  lowOrHi.innerHTML = `<h2>${message}</h2>`;//display the message
}

function endGame() {//function to end the game
  userInput.value = '';//set the value of the input field to empty
  userInput.setAttribute('disabled', '');//disable the input field
  p.classList.add('button');//add the class button to the paragraph element
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;//display the message
  startOver.appendChild(p);//append the paragraph element to the startOver div
  playGame = false;//set the playGame to false
  newGame();//call the newGame function
}//end of the endGame function
function newGame() {//function to start a new game
  const newGameButton = document.querySelector('#newGame');//selecting the newGame button
  newGameButton.addEventListener('click', function (e) {//when the user clicks the newGame button the function will run
    randomNumber = parseInt(Math.random() * 100 + 1);//generate a new random number
    prevGuess = [];//empty the prevGuess array
    numGuess = 1;//set the number of guesses to 1
    guessSlot.innerHTML = '';//set the innerHTML of the guessSlot to empty
    remaining.innerHTML = `${11 - numGuess}`;//display the remaining guesses
    userInput.removeAttribute('disabled');//remove the disabled attribute from the input field
    startOver.removeChild(p);//remove the paragraph element from the startOver div

    playGame = true;//set the playGame to true
  });
}
