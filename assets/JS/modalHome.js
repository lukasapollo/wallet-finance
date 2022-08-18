const newCardButton = document.querySelector('#newCard')

function openModal(){
    document.querySelector('.modal-home').classList.toggle('disabled-modal')
}

newCardButton.addEventListener('click', openModal)