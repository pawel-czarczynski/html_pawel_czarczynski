const card1 = document.getElementById("card");

card1.addEventListener("click", flipCard);

function flipCard() {
    card1.classList.toggle("flipCard");
}
const card2 = document.getElementById("card2");

card2.addEventListener("click", flipCard2);

function flipCard2() {
    card2.classList.toggle("flipCard2");
}