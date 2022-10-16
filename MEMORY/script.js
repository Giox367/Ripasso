import "./contant";
let arrayAnimali = ["🐱", "🦉", "🐾", "🦁", "🦋", "🐛", "🐝", "🐬", "🦊", "🐨", "🐰", "🐯", "🐱", "🦉", "🐾", "🦁", "🦋", "🐛", "🐝", "🐬", "🦊", "🐨", "🐯", "🐰"];

let comparison = [];
document.body.onload = startGame();

let gridCards = document.getElementById("cardsGrid");

function clickSuCarta(carta) {
  carta.innerHTML = carta.textContent === " " ? carta.getAttribute(cardIcon) : " ";
}
function startGame() {
  shuffle(arrayAnimali);
  for (i = 0; i < arrayAnimali.length; i++) {
    let divIcon = document.createElement("div");

    document.getElementById("cardsGrid").appendChild(divIcon);
    divIcon.classList.add("card");
    divIcon.innerHTML = " ";
    divIcon.setAttribute(cardIcon, arrayAnimali[i]);
    divIcon.addEventListener("click", (ev) => {
      clickSuCarta(ev.target);
    });
    //divIcon.addEventListener("click", clickSuCarta);
    //divIcon.addEventListener("click", (el) => {

    //clickSuCarta(el);
    //});
  }
}

function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
