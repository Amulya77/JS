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
