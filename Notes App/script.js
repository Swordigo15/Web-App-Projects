const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');

let notes = document.querySelectorAll('.input-box');

function loadStorage(){
    notesContainer.innerHTML = localStorage.getItem('notes');
}

loadStorage();

function updateStorage(){
    localStorage.setItem('notes', notesContainer.innerHTML);
}

createBtn.addEventListener('click', ()=>{
    console.log('create');
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.className = 'input-box';
    inputBox.setAttribute('contenteditable', 'true');
    img.src = 'images/delete.png';
    notesContainer.appendChild(inputBox).appendChild(img);
    updateStorage();
});

notesContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === 'P'){
        notes = document.querySelectorAll('.input-box');
        notes.forEach(nt =>{
            nt.onKeyUp = function(){
                updateStorage();
            }
        })
    }
});

document.addEventListener('keyword', event =>{
    if(event.ket === 'enter'){
        document.execCommand('insertlineBlank');
        event.preventDefault();
    }
});