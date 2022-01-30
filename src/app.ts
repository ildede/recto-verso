import {FlippingCard} from './flipping-card'
import {FINALS, getCards} from "./constant";

customElements.define('flipping-card', FlippingCard, {extends: 'div'});

const gameState = {
  cardList: getCards(),
  who: '',
  where: '',
  what: ''
}

function revealCard(index: number) {
  if (gameState.cardList.length > index) {
    const flippingCard = new FlippingCard(gameState.cardList[index], () => revealCard(index + 1));
    document.querySelector('.cards').appendChild(flippingCard);
  } else {
    document.querySelectorAll('.card').forEach(e => e.animate({}));
    document.querySelectorAll('.flipping-card').forEach(card => {
      const identifier = card.getAttribute('identifier');
      card
        .querySelector('.card')
        .classList.add('reduced');
      gameState[identifier] = card.getAttribute('choice');
    });

    const item = localStorage.getItem('finals');
    if (item) {
      const splitted = item.split(',');
      splitted.push(gameState.who + gameState.where + gameState.what);
      localStorage.setItem('finals', Array.from(new Set(splitted)).join(','));
    } else {
      localStorage.setItem('finals', gameState.who + gameState.where + gameState.what)
    }
    const final = FINALS[gameState.who + gameState.where + gameState.what];
    document.querySelector('#final').innerHTML = final || `We don't know! 😱`;

    const foundedFinals = localStorage.getItem('finals').split(',');
    document.querySelector('#results').innerHTML = `
    <p>You have find ${foundedFinals.length} finals, can you find the other ${Object.keys(FINALS).length - foundedFinals.length}?</p>
    <button id="results-button" onclick="location.reload()">REPLAY</button>
    `;
  }
}

const revealedCard = 0;
revealCard(revealedCard);
