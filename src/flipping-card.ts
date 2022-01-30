import {CardInfo} from "./constant";

const template = document.createElement('template');
template.innerHTML = `
<div class="card">
  <div class="card__inner">
    <div class="card__face card__face--front">
      <span id="front-text"></span>
    </div>
    <div class="card__face card__face--back">
      <span id="back-text"></span>
    </div>
  </div>
</div>
<div class="buttons">
  <button class="keep-it">KEEP IT</button>
  <button class="flip-it">FLIP IT</button>
</div>
`

export class FlippingCard extends HTMLDivElement {

  private readonly front: { text: string, id: number };
  private readonly back: { text: string, id: number };

  constructor(info: CardInfo, callback: () => void) {
    super();

    this.front = info.front;
    this.back = info.back;

    this.appendChild(template.content.cloneNode(true));
    this.classList.add('flipping-card');
    this.classList.add('new-item');

    this.querySelector('.card__face--front span').innerHTML = this.front.text;
    this.querySelector('.card__face--back span').innerHTML = this.back.text;

    this.setAttribute('choice', String(info.front.id));
    this.setAttribute('identifier', info.identifier);

    this.querySelector('.keep-it').addEventListener('click', () => {
      this.setAttribute('choice', String(this.front.id));
      this.querySelector('.buttons').remove();
      callback();
    });

    this.querySelector('.flip-it').addEventListener('click', () => {
      this.flip()
      this.setAttribute('choice', String(this.back.id));
      this.querySelector('.buttons').remove();
      setTimeout(callback, 1000);
    });
  }

  flip = function (): void {
    this.querySelector('.card__inner').classList.toggle('is-flipped');
  }

}


