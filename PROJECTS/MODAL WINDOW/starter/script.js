'use strict';

const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const btnCloseModal=document.querySelector('.close-modal');
const btnsOpenModal=document.querySelectorAll('.show-modal');


for (let i=0; i<btnsOpenModal.length; i++)
{
    btnsOpenModal[i].addEventListener('click', function(){
        console.log('Button clicked');
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
}

btnCloseModal.addEventListener('click', function(){
    console.log('cross clicked');
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}  );

overlay.addEventListener('click', function(){
    console.log('overlay clicked');
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}  ) ;


document.addEventListener('keydown', function(e){
    console.log('key pressed');
    if(e.key==='Escape' && !modal.classList.contains('hidden'))
    {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    }
});
