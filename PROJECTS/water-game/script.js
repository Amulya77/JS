const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');
const smallCups = document.querySelectorAll('.cup-small');
const bigCup = document.querySelector('.big-cup');

let filledCups = 0;

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx));
});

function highlightCups(idx) {
    smallCups.forEach((cup, idx2) => {
        if (idx2 === idx) {
            cup.classList.toggle('filled');//toggle the class filled for clicked cup only
        } 
  
    });

    updateBigCup();
}

function updateBigCup() {
    filledCups = document.querySelectorAll('.cup-small.filled').length;//get the number of filled cups
    console.log(filledCups)

    const percentageFilled = filledCups / smallCups.length * 100; //  calculates the percentage of filled cups out of the total number of small cups available
    console.log(percentageFilled)
    const percentageRemaining = 100 - percentageFilled;// calculates the percentage of remaining cups out of the total number of small cups available

    bigCup.style.background = `linear-gradient(to top, var(--fill-color) ${percentageFilled}%, #fff ${percentageFilled}% ${percentageRemaining}%, #fff ${percentageRemaining}%)`;

    liters.innerText = `${percentageFilled / 12.5}Liters Filled ${percentageRemaining/12.5}Liters Remaining`; // 12.5% represents one-eighth of 100%

    if (percentageFilled === 100) {
        bigCup.classList.add('full');
    } else {
        bigCup.classList.remove('full');
    }
}
