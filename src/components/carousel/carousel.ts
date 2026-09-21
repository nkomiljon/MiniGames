import './carousel.scss';
import img1 from '../../assets/images/img-1.png';
import img2 from '../../assets/images/img-2.png';
import img3 from '../../assets/images/img-3.png';
import img4 from '../../assets/images/img-4.png';
import img5 from '../../assets/images/img-5.png';

import starIcon from '../../assets/icons/star.png';
import favoriteIcon from '../../assets/icons/favorite.png';

export function Carousel(): HTMLElement {
  const carousel = document.createElement('div');
  carousel.className = 'carousel';
  const carouselWrapper = document.createElement('div');
  carouselWrapper.className = 'carousel__wrapper';

  carouselWrapper.appendChild(Card(img1, 'Vacation Cafe Simulator', '4.8', '28.7K', 'sm'));
  carouselWrapper.appendChild(Card(img2, 'ISLANDERS: New Shores', '4.9', '54.2K', 'md'));
  carouselWrapper.appendChild(Card(img3, 'Vacation Cafe Simulator', '4.8', '28.7K', 'active'));
  carouselWrapper.appendChild(Card(img4, 'Winter Burrow', '4.9', '32.4K', 'md'));
  carouselWrapper.appendChild(Card(img5, 'Vacation Cafe Simulator', '4.8', '28.7K', 'sm'));

  carousel.appendChild(carouselWrapper);
  return carousel;
}

function Card(
  src: string,
  txt: string,
  starsCount: string,
  likesCount: string,
  size: string,
): HTMLElement {
  const card = document.createElement('div');
  card.className = 'card ' + `card--${size}`;

  const cardImg = document.createElement('div');
  cardImg.className = 'card__image';
  cardImg.style.backgroundImage = `url(${src})`;

  const cardContent = document.createElement('div');
  cardContent.className = 'card__content';

  const cardContentText = document.createElement('p');
  cardContentText.textContent = txt;
  cardContentText.className = 'card__title';

  if (!size.includes('sm')) {
    cardContent.appendChild(cardContentText);
    cardContent.appendChild(CardMeta(starsCount, likesCount));
  }
  card.appendChild(cardImg);
  card.appendChild(cardContent);
  return card;
}

function CardMeta(starsCount: string, likesCount: string) {
  const cardContentMeta = document.createElement('div');
  cardContentMeta.className = 'card__meta-content';
  const cardContentMetaRating = document.createElement('span');
  cardContentMetaRating.className = 'card__rating';
  const cardContentMetaRatingImg = document.createElement('img');
  cardContentMetaRatingImg.src = starIcon;
  cardContentMetaRatingImg.alt = 'rating';

  const cardContentMetaRatingCount = document.createElement('span');
  cardContentMetaRatingCount.textContent = starsCount;

  cardContentMetaRating.appendChild(cardContentMetaRatingImg);
  cardContentMetaRating.appendChild(cardContentMetaRatingCount);

  const cardContentMetaLikes = document.createElement('span');
  cardContentMetaLikes.className = 'card__likes';
  const cardContentMetaLikesImg = document.createElement('img');
  cardContentMetaLikesImg.src = favoriteIcon;
  cardContentMetaLikesImg.alt = 'likes';

  const cardContentMetaLikesCount = document.createElement('span');
  cardContentMetaLikesCount.textContent = likesCount;

  cardContentMetaLikes.appendChild(cardContentMetaLikesImg);
  cardContentMetaLikes.appendChild(cardContentMetaLikesCount);

  cardContentMeta.appendChild(cardContentMetaRating);
  cardContentMeta.appendChild(cardContentMetaLikes);

  return cardContentMeta;
}
