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

function scrollToProjects() {
  var projectsDiv = document.getElementById('page-down');
  projectsDiv.scrollIntoView({ behavior: 'smooth' });
}

function scrollToAbout() {
    var projectsDiv = document.getElementById('about');
    projectsDiv.scrollIntoView({ behavior: 'smooth' });
  }


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

// const off = document.querySelector('#off');
// const on = document.querySelector('#on');
// const soundTrack = document.querySelector('#soundTrack');

// off.addEventListener('click', () => toggleSound('off'));
// on.addEventListener('click', () => toggleSound('on'));

// const toggleSound = (soundState) => {
//     if(soundState === 'off'){
//         on.style.display = 'block';
//         off.style.display = 'none';
//         soundTrack.play();
//     }
//     else if(soundState === 'on'){
//         on.style.display = 'none';
//         off.style.display = 'block';
//         soundTrack.pause();
//     }
// }




// // Add event listener to small-img-div to play sound when clicked
// // Add event listener to small-img-div to play sound when clicked and toggle sound button
// document.getElementById("small-img-div").addEventListener("click", function() {
//     const myAudio = document.querySelector('#myAudio');
//     const off = document.querySelector('#off');
//     const on = document.querySelector('#on');
//     const soundCloud = document.querySelector('.sound-cloud');
    
//     if (myAudio.paused) {
//         myAudio.play();
//         off.style.display = 'none';
//         on.style.display = 'block';
//         soundCloud.style.color = "#08fdd8";
//         myAudio.play();
//     } else {
//         myAudio.pause();
//         on.style.display = 'none';
//         off.style.display = 'block';
//         soundCloud.style.color = "#f50057";
//         myAudio.pause();
//     }
// });



///*/////

document.addEventListener("DOMContentLoaded", function() {
    const myAudio = document.querySelector('#soundTrack');
    const off = document.querySelector('#off');
    const on = document.querySelector('#on');
    const soundCloud = document.querySelector('.sound-cloud');
    const soundDiv = document.querySelector('#sound');
    const smallImgDiv = document.getElementById("small-img-div");

    // Function to toggle play/pause
    function togglePlayPause() {
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
    }

    // Event listener for sound div
    soundDiv.addEventListener("click", togglePlayPause);

    // Event listener for small img div
    smallImgDiv.addEventListener("click", togglePlayPause);
});



/*cursor*/

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

// const colors = [
//   "#ffb56b",
//   "#fdaf69",
//   "#f89d63",
//   "#f59761",
//   "#ef865e",
//   "#ec805d",
//   "#e36e5c",
//   "#df685c",
//   "#d5585c",
//   "#d1525c",
//   "#c5415d",
//   "#c03b5d",
//   "#b22c5e",
//   "#ac265e",
//   "#9c155f",
//   "#950f5f",
//   "#830060",
//   "#7c0060",
//   "#680060",
//   "#60005f",
//   "#48005f",
//   "#3d005e"
// ];

const colors = [
    "#69c8d6",
    "#61c3d1",
    "#59becb",
    "#50b9c6",
    "#47b4c1",
    "#3eafbc",
    "#35aab6",
    "#2ca5b1",
    "#24a0ac",
    "#1b9ba7",
    "#1296a1",
    "#09919c",
    "#008b97",
    "#008493",
    "#007e8e",
    "#007989",
    "#007484",
    "#006f7f",
    "#006a7a",
    "#006575",
    "#005f70",
    "#005a6b"
  ];
  
circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();


// /************************two ***************************************/
// /*--------------------
// Utils
// --------------------*/


