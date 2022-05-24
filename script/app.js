// --------------------- Show Modals when clicked ---------------------

let isClicked = false;

document.querySelector('#grid-icon').addEventListener('click', () => {
    let modal_1 = document.querySelector('.modal-1');

    if(document.querySelector('.modal-2').classList.contains('show')){
        document.querySelector('.modal-2').classList.toggle('show');
    }

    isClicked = true;
    modal_1.focus();
    modal_1.classList.toggle('show');
    document.querySelector('.grid-icon').toggle('focus');
})

document.querySelector('#user-icon').addEventListener('click', () => {
    if(document.querySelector('.modal-1').classList.contains('show')){
        document.querySelector('.modal-1').classList.toggle('show');
    }
    document.querySelector('.modal-2').classList.toggle('show');
    document.querySelector('#user-icon').classList.toggle('focus');
})

// document.body.addEventListener('click', () => {
//     if(document.querySelector('.modal-1').classList.contains('show')){
//         document.querySelector('.modal-1').classList.toggle('show');
//     }
//     if(document.querySelector('.modal-2').classList.contains('show')){
//         document.querySelector('.modal-2').classList.toggle('show');
//     }
// })

// --------------------- Search Box Actions---------------------

var search = document.querySelector('.search-bar');

// Show clear button when focused
search.addEventListener('focus', () => {
    // if(search.value !== ""){
        document.querySelector('.search-clear').style.display = 'block';
        document.querySelector('.vertical-line').style.display = 'block';
    // }
})

// Hide clear button when unfocused and empty
search.addEventListener('blur', () => {
    if(search.value === ""){
        hideClearButton();
    }
})

// --------------------- Clear Button ---------------------

document.querySelector('.search-clear').addEventListener('click', () => {
    search.value = "";
    hideClearButton();
})

// function to hide clear button
function hideClearButton(){
    document.querySelector('.search-clear').style.display = 'none';
    document.querySelector('.vertical-line').style.display = 'none';
}