// add player modal

const openBtn = document.getElementById('openmodal');
const modal = document.getElementById('playermodal');


const closeBtn = document.getElementById('closemodal');
closeBtn.addEventListener('click', closeModal);

const playerform = document.querySelector('form')


//const anuller = document.querySelector('#anuller-button')
//anuller.addEventListener('click', closeModal)


openBtn.addEventListener('click', function () {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
});


function closeModal() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    resetRole();
}


//////////////////////////////////////////////
// add match modale 

const openbtnm = document.getElementById('openmodalmatche')
const modalm= document.getElementById('matchemodal');

const closeBtnm = document.getElementById('closemodalm');
closeBtnm.addEventListener('click', closeModal);




openbtnm.addEventListener('click', function () {
    modalm.classList.remove('hidden');
    modalm.classList.add('flex');
});


function closeModal() {
    modalm.classList.add('hidden');
    modalm.classList.remove('flex');
    resetRole();
}



