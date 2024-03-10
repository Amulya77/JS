const words = ["apple", "banana", "orange", "grapefruit"]; // Word list
let currentWord;
let scrambledWord;

function initGame() {
  // 1. Choose a random word
  currentWord = words[Math.floor(Math.random() * words.length)];

  // 2. Scramble the word
  scrambledWord = currentWord.split("").sort(() => Math.random() - 0.5).join("");

  // 3. Display the scrambled word
  document.getElementById("jumbled-word-container").textContent = scrambledWord;
}

function checkAnswer() {
  const userGuess = document.getElementById("user-input").value.trim().toLowerCase();

  if (userGuess === currentWord) {
    document.getElementById("result").textContent = "Correct! ";
  } else {
    document.getElementById("result").textContent = "Try again! ";
  }

  // Clear the input field
  document.getElementById("user-input").value = "";
}

initGame();

// Add event listener to the button
document.getElementById("check-button").addEventListener("click", checkAnswer);
