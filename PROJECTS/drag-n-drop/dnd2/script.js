const letters = document.querySelectorAll('.letter')
const empties = document.querySelectorAll('.box')

letters.forEach(letter => {
    letter.addEventListener('dragstart', dragStart)
    letter.addEventListener('dragend', dragEnd)
})

empties.forEach(empty => {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
})

let draggedLetter = null

function dragStart() {
    draggedLetter = this
    setTimeout(() => this.className = 'invisible', 0)
}

// function dragStart() {
//     draggedLetter = this;
//     setTimeout(() => {
//         this.className = 'invisible';
//         // Add the 'invisible' class to the <p> tag
//         this.querySelector('p').classList.add('invisible');
//     }, 0);
// }

function dragEnd() {
    this.className = 'letter'
}

function dragOver(e) {
    e.preventDefault()
}

function dragEnter(e) {
    e.preventDefault()
    this.className += ' hovered'
}

function dragLeave() {
    this.className = 'box'
}

function dragDrop() {
    this.className = 'box'
    this.appendChild(draggedLetter)
}
