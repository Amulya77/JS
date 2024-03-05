const fill=document.querySelector('.fill')
const empties = document.querySelectorAll('.box')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)


for(const empty of empties) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}

function dragStart() {
    this.className += ' hold' 
    setTimeout(() => this.className = 'invisible', 0)
}

function dragEnd() {
    this.className = 'fill'
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
    this.append(fill)//this is the box where the fill is dropped
    console.log('fill add hogya')
}

/*
explanation--
Sure! Here's an explanation of the JavaScript code in simple Hindi-English:

1. **Elements Ko Chuna**:
   - `fill` ko woh element assign kiya gaya hai jo class `.fill` wala hai.
   - `empties` ko sabhi elements assign kiya gaya hai jo class `.box` wale hain.

2. **Event Listeners Jodna**:
   - `dragStart` function tab chalega jab `.fill` element ko drag karna shuru hota hai.
   - `dragEnd` function tab chalega jab `.fill` element ko drag karna khatam hota hai.

3. **Khali Boxes Par Loop Lagana**:
   - Har khali box (`.box`) ke liye, drag aur drop interactions ke liye event listeners jode jaate hain.

4. **Drag Start Function (`dragStart`)**:
   - Jab dragging shuru hoti hai, `.fill` element mein `hold` class add ho jata hai.
   - `setTimeout` se thoda late (0 milliseconds) `invisible` class add hoti hai. Isse element drag operation ke dauran temporary invisible ho jata hai.

5. **Drag End Function (`dragEnd`)**:
   - Jab dragging khatam hoti hai, `.fill` element ki class name ko `fill` mein reset kiya jata hai.

6. **Drag Over Function (`dragOver`)**:
   - Yeh function default drag-over behavior ko rokta hai, jo drop zones ko enable karne ke liye zaroori hai.

7. **Drag Enter Function (`dragEnter`)**:
   - Jab dragged element kisi drop zone mein enter karta hai, to drop zone mein `hovered` class add hoti hai.

8. **Drag Leave Function (`dragLeave`)**:
   - Jab dragged element kisi drop zone ko chhod deta hai, to drop zone se `hovered` class hata di jaati hai, jisse woh original state mein laut jata hai.

9. **Drag Drop Function (`dragDrop`)**:
   - Jab dragged element kisi drop zone par chhod diya jata hai, to drop zone par `box` class lagai jati hai.
   - Dragged element ko drop zone mein sthapit (move) kiya jata hai `this.append(fill)` ka istemal karke.

Samanya roop se, yeh JavaScript code `.fill` element aur `.box` elements ke beech drag-and-drop functionality ko sambhav banata hai, jo CSS classes aur unke interactions ke aadhar par define kiya gaya hai saath mein diye gaye CSS file mein.


Jab hum kisi element ko kisi div box mein drop karte hain, to HTML mein kuch badlav hota hai. Yeh badlav JavaScript ke dwara kiye gaye functions ke zariye hota hai:

1. **Drag Start (`dragStart`)**: Jab hum kisi element ko drag karte hain, tab `dragStart` function chalta hai. Ismein hum element ko ek nayi class `hold` aur thodi der ke liye class `invisible` dete hain. Isse element drag ho raha hota hai aur temporary roop se invisible ho jata hai.

2. **Drag End (`dragEnd`)**: Jab hum element ko drop kar dete hain, tab `dragEnd` function chalta hai. Ismein element ki class name ko phir se `fill` mein reset kiya jata hai, jisse woh pahle jaisa dikhai de.

3. **Drag Drop (`dragDrop`)**: Jab hum element ko kisi div box mein drop karte hain, tab `dragDrop` function chalta hai. Ismein div box ki class ko `box` mein badal diya jata hai aur dragged element ko us div box ke andar append kar diya jata hai, jisse woh us box ke andar chala jata hai.

Is tarah se, jab hum kisi element ko kisi div box mein drop karte hain, to JavaScript ke functions ke madhyam se HTML mein badlav aata hai, jisse element drop hone ke baad naye sthiti mein chala jata hai.*/