const newCardButton = document.querySelectorAll('.newOperation')

newCardButton.forEach(element => {
    element.addEventListener('click', openModal)
});

function openModal(){
    document.querySelector('.modal-operation').classList.toggle('disabled-modal')
}

