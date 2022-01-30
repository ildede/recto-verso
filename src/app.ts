import {FlippingCard} from './flipping-card'
import {ACHIVEMENT, ACHIVEMENT_TOTAL, ENDINGS, getCards} from "./constant";

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
    let text = `
    <p>You have found ${foundedEndings.length} endings, can you find the other ${Object.keys(ENDINGS).length - foundedEndings.length}?</p>
    <button id="results-button" onclick="location.reload()">REPLAY</button>
    `;

    const achievement = ACHIVEMENT[gameState.who + gameState.where + gameState.what];
    if (achievement) {
      text += `<p>You've unlocked:<br><h3>${achievement.title}</h3><i>${achievement.description}</i></p>`
    }
    Object.keys(ACHIVEMENT_TOTAL).forEach(n => {
      if (foundedEndings.length == Number(n)) {
        text += `<p>You've unlocked:<br><h3>${ACHIVEMENT_TOTAL[n].title}</h3><i>${ACHIVEMENT_TOTAL[n].description}</i></p>`
      }
    });

    text += `<br><h1>Achievements</h1>`;
    Object.keys(ACHIVEMENT_TOTAL).forEach(n => {
      if (foundedEndings.length >= Number(n)) {
        text += `<p><h4><s>${ACHIVEMENT_TOTAL[n].title}</s></h4><s><i>${ACHIVEMENT_TOTAL[n].description}</i></s></p>`
      } else {
        text += `<p><h4>${ACHIVEMENT_TOTAL[n].title}</h4><i>${ACHIVEMENT_TOTAL[n].description}</i></p>`
      }
    });

    Object.keys(ACHIVEMENT).forEach(a => {
      if (foundedEndings.includes(a)) {
        text += `<p><h4><s>${ACHIVEMENT[a].title}</s></h4><s><i>${ACHIVEMENT[a].description}</i></s></p>`
      } else {
        text += `<p><h4>${ACHIVEMENT[a].title}</h4><i>${ACHIVEMENT[a].description}</i></p>`
      }
    });

    document.querySelector('#results').innerHTML = text;
  }
}

const revealedCard = 0;
revealCard(revealedCard);
