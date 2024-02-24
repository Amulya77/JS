const buttons = document.querySelectorAll('.button');//all buttons
const body = document.querySelector('body');//the body

buttons.forEach(button => {//for each button in the array of buttons
    console.log(button);//each button
    button.addEventListener('click', function(e){//add an event listener to each button
        console.log(e);//event object
        console.log(e.target);//the element that was clicked
        if(e.target.id==='grey'){
            body.style.backgroundColor=e.target.id;//change the background color of the body to grey
          }
          if(e.target.id==='white'){
            body.style.backgroundColor=e.target.id;//change the background color of the body to white
          }
          if(e.target.id==='blue'){
            body.style.backgroundColor=e.target.id;//change the background color of the body to blue
          }
          if(e.target.id==='yellow'){
            body.style.backgroundColor=e.target.id;//change the background color of the body to yellow
          }
        })
    })
      