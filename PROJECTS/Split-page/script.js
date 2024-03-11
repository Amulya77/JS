// const whiteButton = document.querySelector(".white .btn");
// const blackButton = document.querySelector(".black .btn");
// const whiteDiv = document.querySelector(".white");
// const blackDiv = document.querySelector(".black");

// whiteButton.addEventListener("click", function() {
//     whiteDiv.style.width = "75%";
//     blackDiv.style.width = "25%";
// });

// blackButton.addEventListener("click", function() {
//     blackDiv.style.width = "75%";
//     whiteDiv.style.width = "25%";
// });


const whiteDiv = document.querySelector(".white");
const blackDiv = document.querySelector(".black");

whiteDiv.addEventListener("mouseenter", function() {
    whiteDiv.style.width = "75%";
    blackDiv.style.width = "25%";
});

blackDiv.addEventListener("mouseenter", function() {
    blackDiv.style.width = "75%";
    whiteDiv.style.width = "25%";
});

// Reset width on mouseleave (optional)
whiteDiv.addEventListener("mouseleave", function() {
    whiteDiv.style.width = "";
    blackDiv.style.width = "";
});

blackDiv.addEventListener("mouseleave", function() {
    blackDiv.style.width = "";
    whiteDiv.style.width = "";
});
