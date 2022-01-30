import {FlippingCard} from './flipping-card'
import {ACHIVEMENT, ENDINGS, getCards} from "./constant";

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
    const final = ENDINGS[gameState.who + gameState.where + gameState.what];
    document.querySelector('#final').innerHTML = final || `We don't know! 😱`;

    const foundedEndings = localStorage.getItem('finals').split(',');
    const achievement = ACHIVEMENT[gameState.who + gameState.where + gameState.what];
    let text = ``;
    if (achievement) {
      text += `<p>You've unlocked:<br> <b>${achievement.title}!</b><br> <i>${achievement.description}</i></p>`
    }
    text += `
    <p>You have found ${foundedEndings.length} endings, can you find the other ${Object.keys(ENDINGS).length - foundedEndings.length}?</p>
    <button id="results-button" onclick="location.reload()">REPLAY</button>
    `
    document.querySelector('#results').innerHTML = text;
  }
}

const revealedCard = 0;
revealCard(revealedCard);
