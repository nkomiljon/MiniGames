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
  const btnNext = document.createElement('button');

  controlArea.appendChild(btnBack);
  controlArea.appendChild(btnNext);
  return controlArea;
}
