const buttonCreateCards = document.querySelector("#new-card");
const modalCard = document.querySelector(".modal-card");

const createNewCard = event => modalCard.classList.remove('disabled-modal')

buttonCreateCards.addEventListener("click", createNewCard)

console.log(md5('1'))