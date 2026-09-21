import './developer-cta.scss';
import img from '../../assets/images/illustration-side.png';

export function DeveloperCta(): HTMLElement {
  const sectionElement = document.createElement('section');
  sectionElement.className = 'section';
  const containerElement = document.createElement('div');
  containerElement.className = 'container';
  const sectionWrapperElement = document.createElement('div');
  sectionWrapperElement.className = 'section__wrapper';

  const imgElement = document.createElement('img');
  imgElement.className = 'section__img';
  imgElement.src = img;

  const ctaCardElement = document.createElement('div');
  ctaCardElement.className = 'cta-card';
  const ctaCardTitleElement = document.createElement('h1');
  ctaCardTitleElement.className = 'cta-card__title';
  ctaCardTitleElement.textContent = 'Are You a Game Developer?';

  const ctaCardDescriptionElement = document.createElement('p');
  ctaCardDescriptionElement.className = 'cta-card__description';
  ctaCardDescriptionElement.textContent =
    "Want to see your game on MiniGames? We're always looking for fun, engaging mini games to add to our platform. Submit your game and reach thousands of players!";

  const ctaCardBtnElement = document.createElement('a');
  ctaCardBtnElement.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 3V15M7 8L12 3L17 8M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="#242145" stroke-width="2" stroke-linecap="round"/></svg>' +
    'Submit Form';
  ctaCardBtnElement.href = '';
  ctaCardBtnElement.className = 'cta-card__btn';

  const ctaCardSubtitle = document.createElement('span');
  ctaCardSubtitle.className = 'cta-card__subtitle';
  ctaCardSubtitle.textContent = 'or contact us at developers@minigames.com';

  ctaCardElement.appendChild(ctaCardTitleElement);
  ctaCardElement.appendChild(ctaCardDescriptionElement);
  ctaCardElement.appendChild(ctaCardBtnElement);
  ctaCardElement.appendChild(ctaCardSubtitle);

  sectionWrapperElement.appendChild(imgElement);
  sectionWrapperElement.appendChild(ctaCardElement);
  containerElement.appendChild(sectionWrapperElement);
  sectionElement.appendChild(containerElement);
  return sectionElement;
}
