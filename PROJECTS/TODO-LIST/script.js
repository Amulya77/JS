// document.getElementById("addBtn").addEventListener("click", function() {
//     var newItem = document.getElementById("item").value;
//     if (newItem !== "") {
//         var pointList = document.getElementById("pointList");
//         var newPoint = document.createElement("li");
//         newPoint.textContent = newItem;
//         pointList.insertBefore(newPoint, pointList.firstChild); // Insert new point at the beginning of the list
//         document.getElementById("item").value = ""; // Clear the input field
//     }
// });


// let addBtn = document.getElementById("addBtn");
// let i=0;

// function DeleteButton(newPoint) {
// let deleteButton = document.createElement("button");
//         deleteButton.classList.add("deleteButton");
//         deleteButton.textContent = "Delete";
//         deleteButton.style.backgroundColor = "rgb(195, 25, 133)";
//         deleteButton.addEventListener("click", function() {
//             pointList.removeChild(newPoint);
//             i--;
//             console.log("i deleted:",i);
           
//         });
//         newPoint.appendChild(deleteButton);
       
//  }


// addBtn.addEventListener("click", function(){
//     let newItem = document.getElementById("item").value;// Get the value of the input field
//     if(newItem !== ""){
        
//         let pointList = document.getElementById("pointList");
//         let listItems = pointList.getElementsByTagName("ul");
//         console.log("i:",i);
//         if(i==0){
//         listItems[i].textContent = newItem;
//         listItems[i].style.color = "black";
//         // DeleteButton(listItems[i])
//         i++;
//         }
//         else if(i==1){
//             listItems[i].textContent = newItem;
//             listItems[i].style.color = "black";
//             pointList.insertBefore(listItems[i], pointList.firstChild);
//             // DeleteButton(listItems[i])
//             i++;
//         }
//         else if(i==2){
//             listItems[i].textContent = newItem;
//             listItems[i].style.color = "black";
//             pointList.insertBefore(listItems[i], pointList.firstChild);
//             // DeleteButton(listItems[i])
//             i++;
//         }

//         else{
//         let newPoint = document.createElement("ul");
//         newPoint.textContent = newItem;
//         pointList.insertBefore(newPoint, pointList.firstChild);
//         // DeleteButton(listItems[i])
//         i++;
      
        
//         }

        
        
//         document.getElementById("item").value = ""; // Clear the input field
//     }
// });





//////////////////////////////////////////FINALY////////////////////////////////////////////////////////////
// let addBtn = document.getElementById("addBtn");
// let i = 0;

// function createDeleteButton(newPoint, pointList) {
//     let deleteButton = document.createElement("button");
//     deleteButton.classList.add("deleteButton");
//     deleteButton.textContent = "Delete";
//     deleteButton.style.backgroundColor = "rgb(195, 25, 133)";
//     deleteButton.addEventListener("click", function() {
//         pointList.removeChild(newPoint);
//         if(i>0)
//         i--;
//         console.log("i deleted:", i);
//         // if (pointList.children.length === 0) {
//         //     // Reset i when all points are deleted
//         //     i = 0;
//         // }
//     });
//     newPoint.appendChild(deleteButton);
// }

// addBtn.addEventListener("click", function(){
//     let newItem = document.getElementById("item").value;
//     if(newItem !== ""){
//         let pointList = document.getElementById("pointList");
//         let listItems = pointList.getElementsByTagName("ul");

//         if (i < 3) {
//             // Update existing items
//             listItems[i].textContent = newItem;
//             listItems[i].style.color = "black";
//             createDeleteButton(listItems[i], pointList);
//             // Insert updated item at the top
//             pointList.insertBefore(listItems[i], pointList.firstChild);
//             i++;
//         } else {
//             let newPoint = document.createElement("ul");
//             newPoint.textContent = newItem;
//             newPoint.style.color = "black";
//             createDeleteButton(newPoint, pointList);
//             // Insert new points before the first child of pointList
//             pointList.insertBefore(newPoint, pointList.firstChild);
//         }

//         document.getElementById("item").value = ""; // Clear the input field
//     }
// });




// // Get reference to the reset button
// let resetBtn = document.getElementById("resetBtn");

// // Reset button event listener
// resetBtn.addEventListener("click", function() {
//     // Clear the input field
//     document.getElementById("item").value = "";

//     // Reset the point list to initial values
//     let pointList = document.getElementById("pointList");
//     let listItems = pointList.getElementsByTagName("ul");
//     for (let j = 0; j < 3; j++) {
//         listItems[j].textContent = "Point " + (j + 1);
//         listItems[j].style.color = "rgb(107, 107, 107)";
//         // Remove delete button if exists
//         if (listItems[j].querySelector(".deleteButton")) {
//             listItems[j].removeChild(listItems[j].querySelector(".deleteButton"));
//         }
//     }
// });




//////////////////////////////////////////////////KLANSDNASK///////////////

let addBtn = document.getElementById("addBtn");
let i = 0;

function createDeleteButton(newPoint, pointList) {
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
    deleteButton.textContent = "Delete";
    deleteButton.style.backgroundColor = "rgb(195, 25, 133)";
    deleteButton.addEventListener("click", function() {
        pointList.removeChild(newPoint);
        if(i>0)
        i--;
        console.log("i deleted:", i);
        // if (pointList.children.length === 0) {
        //     // Reset i when all points are deleted
        //     i = 0;
        // }
    });
    newPoint.appendChild(deleteButton);
}

addBtn.addEventListener("click", function(){
    let newItem = document.getElementById("item").value;
    if(newItem !== ""){
        let pointList = document.getElementById("pointList");
        let listItems = pointList.getElementsByTagName("ul");

        if (i < 3) {
            // Check if the list item exists before updating
            if (listItems[i]) {
                // Update existing items
                listItems[i].textContent = newItem;
                listItems[i].style.color = "black";
                createDeleteButton(listItems[i], pointList);
                // Insert updated item at the top
                pointList.insertBefore(listItems[i], pointList.firstChild);
                i++;
            } else {
                // If the list item doesn't exist, create a new one
                let newPoint = document.createElement("ul");
                newPoint.textContent = newItem;
                newPoint.style.color = "black";
                createDeleteButton(newPoint, pointList);
                pointList.insertBefore(newPoint, pointList.firstChild);
                i++;
            }
        } else {
            let newPoint = document.createElement("ul");
            newPoint.textContent = newItem;
            newPoint.style.color = "black";
            createDeleteButton(newPoint, pointList);
            // Insert new points before the first child of pointList
            pointList.insertBefore(newPoint, pointList.firstChild);
        }

        document.getElementById("item").value = ""; // Clear the input field
    }
});



// Get reference to the reset button
// Get reference to the reset button
let resetBtn = document.getElementById("resetBtn");

// Reset button event listener
resetBtn.addEventListener("click", function() {
    // Clear the input field
    document.getElementById("item").value = "";

    // Reset the point list to initial values
    let pointList = document.getElementById("pointList");
    let listItems = pointList.getElementsByTagName("ul");

    // Reset the first three points
    for (let j = 0; j < 3; j++) {
        listItems[j].textContent = "Point " + (j + 1);
        listItems[j].style.color = "rgb(107, 107, 107)";
        // Remove delete button if exists
        if (listItems[j].querySelector(".deleteButton")) {
            listItems[j].removeChild(listItems[j].querySelector(".deleteButton"));
        }
    }

    // Remove additional points
    while (pointList.children.length > 3) {
        pointList.removeChild(pointList.lastChild);
    }

    // Reset the index i to 0
    i = 0;
});
