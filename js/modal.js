const openModalBtnCollection = document.querySelectorAll('[data-modal-open]');
const openModalLength = document.querySelectorAll('[data-modal-open]').length;
const closeModalBtn =document.querySelector('[data-modal-close]');
const modal = document.querySelector('[data-modal]');

function toggleModal() { 
    document.body.classList.toggle("modal-open");
    modal.classList.toggle('is-hidden'); 
}

if (openModalLength){
    for (let i=0; i < openModalLength; i+= 1){
        openModalBtnCollection[i].addEventListener('click', toggleModal); 
    }
}

closeModalBtn.addEventListener('click', toggleModal);