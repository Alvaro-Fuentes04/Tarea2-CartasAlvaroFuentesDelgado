//IMPORTS
import { Card } from "./cards.js";
import * as constants from "./constants.js";

let randomCard = [];

function makeDeck() {
  for (let i = 0; i < constants.MAX_BOMBS_CARDS; i++) {
    let card = new Card(constants.CARDS_TYPE.BOMB);
    randomCard.push(card);
  }
  for (let i = 0; i < constants.MAX_DEFUSE_CARDS; i++) {
    let card = new Card(constants.CARDS_TYPE.DEFUSE);
    randomCard.push(card);
  } for (let i = 0; i < constants.MAX_SKIPS_CARDS; i++) {
    let card = new Card(constants.CARDS_TYPE.SKIP);
    randomCard.push(card);
  } for (let i = 0; i < constants.MAX_NOPES_CARDS; i++) {
    let card = new Card(constants.CARDS_TYPE.NOPE);
    randomCard.push(card);
  } for (let i = 0; i < constants.MAX_POINTS_CARDS; i++) {
    let card = new Card(constants.CARDS_TYPE.POINT, getRandom(constants.MIN_POINTS, constants.MAX_POINTS));
    randomCard.push(card);
  }
}
/*makeDeck();
console.log(randomCard);*/

function getRandom(min, max) {
  return Math.round(Math.random() * (max - min + 1)) + min;
}

function mixDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]]; // Intercambio de cartas
  }
}

makeDeck();
mixDeck(randomCard); // Mix deck after generate it

console.log(randomCard);

function showNextCard() {
  const container = document.getElementById('card-container');

  // Clear the container before showing the next card
  container.innerHTML = '';

  // Check if there are still cards left
  if (randomCard.length > 0) {
    const card = randomCard.pop(); // Extrae y elimina la última carta del array

    const cardElement = document.createElement('div');
    cardElement.classList.add('card'); // Clase CSS para estilizar
    cardElement.textContent = `${card.name}`; // Muestra el nombre de la carta

    // If the card has points, add them
    if (card.point !== null) {
      cardElement.textContent += ` - Points: ${card.point}`;
    }

    container.appendChild(cardElement); // Add the card to the container
  } else {
    container.textContent = "There are no more cards left in the deck..";
  }
}

// Function to initialize the button
function showCardButton() {
  const cardContainer = document.createElement('div');
  cardContainer.id = 'card-container';
  document.body.appendChild(cardContainer);

  const button = document.createElement('button');
  button.textContent = 'Show next card';
  button.addEventListener('click', showNextCard); // Click event that shows the next card
  document.body.appendChild(button);
}

// Llamada a las funciones
makeDeck();
mixDeck(randomCard); // Mezcla el mazo después de crearlo
showCardButton();
