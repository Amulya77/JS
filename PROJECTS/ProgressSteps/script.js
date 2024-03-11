const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle')
const progress = document.getElementById('progress');

let currentActive = 1;//thisis the current active circle


console.log("circles: ", circles);// NodeList(4) [div.circle.active, div.circle, div.circle, div.circle]
console.log("progress: ", progress);// <div id="progress" style="width: 0%;"></div>
console.log("prev: ", prev);// <button id="prev">Prev</button>
console.log("next: ", next);// <button id="next">Next</button>

next.addEventListener('click', () => {
    currentActive++;
    console.log("currentActive: ", currentActive);

    if (currentActive > circles.length) {//if currentActive is greater than the number of circles
        currentActive = circles.length;
    }
    update();
});

prev.addEventListener('click', () => {
    currentActive--;
    console.log("currentActive: ", currentActive);
    if (currentActive < 1) {//if currentActive is less than 1
        currentActive = 1;
    }
    update();
});

function update() {//this function will update the active circle and the progress bar
    circles.forEach((circle, idx) => {//for each circle
        if (idx < currentActive) {//if the index is less than the currentActive
            circle.classList.add('active');//add the active class
        } else {
            circle.classList.remove('active');//remove the active class
        }
    });

    const actives = document.querySelectorAll('.active');
    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

    if (currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}
