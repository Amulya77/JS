// document.addEventListener("DOMContentLoaded", function() {
//     const part2 = document.getElementById("part2");
//     const overlay = document.getElementById("overlay");

//     part2.addEventListener("mouseenter", function() {
//         overlay.style.display = "none";
//     });

//     part2.addEventListener("mouseleave", function() {
//         overlay.style.display = "block"; // Or whatever initial display property is
//     });
// });


document.getElementById("part2").addEventListener("mousemove", function(event) {
    var part2 = document.getElementById("part2");
    var overlay = document.getElementById("overlay");

    // Calculate the width of 40% of part2-div
    var fortyPercentWidth = part2.offsetWidth * 0.4;

    // Get the x-coordinate of the mouse relative to the part2-div
    var mouseX = event.clientX - part2.getBoundingClientRect().left;

    // If mouse enters the center 40% from left or right, hide the overlay
    if (mouseX >= (part2.offsetWidth - fortyPercentWidth) / 2 && mouseX <= (part2.offsetWidth + fortyPercentWidth) / 2) {
        overlay.style.display = "none"; // Hide the overlay
    } else {
        overlay.style.display = "block"; // Show the overlay
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const textDivs = document.querySelectorAll("#text-div h1");

    textDivs.forEach(textDiv => {
        textDiv.innerHTML = textDiv.textContent
            .split("")
            .map(char => `<span>${char}</span>`)
            .join("");

        const spans = textDiv.querySelectorAll("span");
        spans.forEach(span => {
            span.addEventListener("mouseover", function() {
                span.style.color = getRandomColor();
                span.style.fontSize = '80px';
            });

            span.addEventListener("mouseleave", function() {
                span.style.color = "white";
                span.style.fontSize = '60px';
                
            });
        });
    });

    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});


// const h1s = document.querySelectorAll('#text-div h1');

// h1s.forEach(h1 => {
//     h1.addEventListener('mouseenter', () => {
//         h1.style.color = getRandomColor();
//         h1.style.fontSize = '70px'; // Increase font size
//     });

//     h1.addEventListener('mouseleave', () => {
//         h1.style.color = 'white'; // Change back to white
//         h1.style.fontSize = '60px'; // Reset font size
//     });
// });

// function getRandomColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }


const soundCloud = document.querySelector('.sound-cloud');
const off = document.querySelector('#off');
const on = document.querySelector('#on');
const myAudio = document.querySelector('#myAudio');

off.addEventListener('click', () => soundTrack('off'));
on.addEventListener('click', () => soundTrack('on'));

const soundTrack = (soundState) => {
    if(soundState === 'off'){
        on.style.display = 'block';
        off.style.display = 'none';
        soundCloud.style.color = "#08fdd8";
        myAudio.play();
    }
    else if(soundState === 'on'){
        on.style.display = 'none';
        off.style.display = 'block';
        soundCloud.style.color = "#f50057";
        myAudio.pause();
    }
}



// Add event listener to small-img-div to play sound when clicked
// Add event listener to small-img-div to play sound when clicked and toggle sound button
document.getElementById("small-img-div").addEventListener("click", function() {
    const myAudio = document.querySelector('#myAudio');
    const off = document.querySelector('#off');
    const on = document.querySelector('#on');
    const soundCloud = document.querySelector('.sound-cloud');
    
    if (myAudio.paused) {
        myAudio.play();
        off.style.display = 'none';
        on.style.display = 'block';
        soundCloud.style.color = "#08fdd8";
    } else {
        myAudio.pause();
        on.style.display = 'none';
        off.style.display = 'block';
        soundCloud.style.color = "#f50057";
    }
});
