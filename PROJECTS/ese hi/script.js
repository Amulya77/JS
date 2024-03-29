let currentIndex = 0;
const notes = document.querySelectorAll('.note');
const addButton = document.getElementById('add');

addButton.addEventListener('click', function() {
    if (currentIndex < notes.length) {
        notes[currentIndex].style.display = 'block';
        currentIndex++;
    } else {
        addButton.disabled = true; // Disabling the button when all notes are shown
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const deleteButtons = document.querySelectorAll('.delete');
    
    deleteButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            const noteDiv = event.target.closest('.note');
            if (noteDiv) {
                noteDiv.style.display = 'none';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const textareas = document.querySelectorAll('.textarea');
    const editButtons = document.querySelectorAll('.edit');

    textareas.forEach(function(textarea) {
        textarea.addEventListener('focusout', function() {
            textarea.disabled = true; // Disable the textarea when focus moves out
        });
    });

    editButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            const noteDiv = event.target.closest('.note');
            if (noteDiv) {
                const textarea = noteDiv.querySelector('.textarea');
                textarea.disabled = false; // Enable textarea when edit button is clicked
                textarea.focus(); // Set focus to the textarea
            }
        });
    });
});



