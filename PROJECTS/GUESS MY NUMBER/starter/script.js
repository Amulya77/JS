'use strict';

// document.querySelector('.message').textContent = 'Correct Number! 🎉';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;


// document.querySelector('.guess').value = 23; // Set initial value for user's guess
// console.log(document.querySelector('.guess').value); // Get the value of user's guess

// Handling click events

let number= Math.trunc(Math.random() * 20) + 1;//Generate a random number between 1 and 20
let score =20;
let highscore = 0;


document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    

    if (!guess) {
        document.querySelector('.message').textContent = 'No number! 🚫';
    }
    //when player wins
    else if(guess === number) {  
    document.querySelector('.message').textContent = 'Correct Number! 🎉';
    
    document.querySelector('.number').textContent = number;//Secret number in the UI
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if(score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }   
    
    else if (guess > number){

        if(score > 1){
            document.querySelector('.message').textContent = 'Too high! 📈';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = 'You lost the game! 😢';
            document.querySelector('.score').textContent = 0;
        }
        
    }
    else if (guess < number){
        if(score > 1){
            document.querySelector('.message').textContent = 'Too low! 📉';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = 'You lost the game! 😢';
            document.querySelector('.score').textContent = 0;
        }
    }


});


document.querySelector('.again').addEventListener('click',function(){
    score=20;
    number= Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})
        