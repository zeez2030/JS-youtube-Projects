const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');


//  Fill Listeners

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);
//  Loop through empties and call drag event
for (const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}




// Drag Functions

function dragStart() {
    console.log('start');
    this.classList.add('hold');
    setTimeout(() => {
        this.classList.add('invisible');
    }, 0)

}

function dragEnd() {
    this.className = 'fill';
}

function dragOver(e) {
    e.preventDefault();

}

function dragEnter(e) {
    e.preventDefault();
    this.classList.add('hovered');
}

function dragLeave() {
    //this.classList.remove('hovered');
    this.className = 'empty';
}

function dragDrop() {
    this.className = 'empty';
    this.append(fill);
}