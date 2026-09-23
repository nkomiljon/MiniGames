import { Carousel } from '../carousel/carousel';
import { Title } from '../title/title';
import './game-carousel.scss';

export function GameCarousel(): HTMLElement {
  const gameCarousel = document.createElement('section');
  gameCarousel.className = 'game-carousel';
  const container = document.createElement('div');
  container.className = 'container';
  const gameCarouselWrapper = document.createElement('div');
  gameCarouselWrapper.className = 'game-carousel__wrapper';

  const gameCarouselWrapperTop = document.createElement('div');
  gameCarouselWrapperTop.className = 'game-carousel__meta';
  gameCarouselWrapperTop.appendChild(Title('New Games'));
  gameCarouselWrapperTop.appendChild(CarouselControlBtns());

  gameCarouselWrapper.appendChild(gameCarouselWrapperTop);
  gameCarouselWrapper.appendChild(Carousel());
  container.appendChild(gameCarouselWrapper);
  gameCarousel.appendChild(container);
  return gameCarousel;
}

function CarouselControlBtns() {
  const controlArea = document.createElement('div');
  controlArea.className = 'control-area';
  const btnBack = document.createElement('button');
  btnBack.className = 'control-area__btn';
  btnBack.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3.825 9L9.425 14.6L8 16L1.19209e-07 8L8 -9.53674e-07L9.425 1.4L3.825 7H16V9H3.825Z" fill="#242145"/></svg>';
  const btnNext = document.createElement('button');
  btnNext.className = 'control-area__btn';
  btnNext.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M12.175 9H1.19209e-07V7H12.175L6.575 1.4L8 -9.53674e-07L16 8L8 16L6.575 14.6L12.175 9Z" fill="#242145"/></svg>';

  controlArea.appendChild(btnBack);
  controlArea.appendChild(btnNext);
  return controlArea;
}
