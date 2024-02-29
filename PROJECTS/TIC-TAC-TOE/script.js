"use strict";

// Your JavaScript code goes here

let boxes= document.querySelectorAll('.box');
let resetBtn= document.querySelector('#reset');
let msgContainer= document.querySelector('.msg-container');
let newGameBtn= document.querySelector('#new-btn');
let msg= document.querySelector('#msg');



let turnO= true;

let winPatterns= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{  
    box.addEventListener("click",()=>{
        console.log("box clicked");
        
        if(turnO){
            box.textContent= "O";
            turnO= false;
        }
        else{
            box.textContent= "X";
            turnO= true;
        }
        box.disabled=true;
        
        checkWinner();
    });
}); 


const disableBtns=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBtns=()=>{
    for(let box of boxes){
        box.disabled=false;
    }
}


function showWinner(winner) {
    msg.innerText = `${winner} wins!`;
    msgContainer.classList.remove('hide');
    disableBtns();
}



function checkWinner(){
    for(let pattern of winPatterns){
        // console.log(pattern[0], pattern[1], pattern[2]);
    
            let pos1= boxes[pattern[0]].innerHTML; 
            let pos2= boxes[pattern[1]].innerHTML; 
            let pos3= boxes[pattern[2]].innerHTML;

            if(pos1!=""&&pos2!=""&&pos3!=""&&pos1==pos2&&pos2==pos3){
                console.log("winner",pos1);
                showWinner(pos1);
                
    }
}
}

// Function to reset the game
function resetGame() {
    boxes.forEach(box => {
        box.textContent = '';
        box.disabled = false;
    });
    
    msg.innerText = '';
    document.querySelector('.msg-container').classList.add('hide');
    turnO = true;
}
function newGame() {
    resetGame();
}

resetBtn.addEventListener('click', resetGame);
newGameBtn.addEventListener('click', newGame);
