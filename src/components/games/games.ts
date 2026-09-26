import './games.scss';
import Img3 from '../../assets/images/img-3.png';
import Img4 from '../../assets/images/img-4.png';
import Img5 from '../../assets/images/img-5.png';
import Img6 from '../../assets/images/img-6.png';
import Img7 from '../../assets/images/img-7.png';
import Img8 from '../../assets/images/img-8.png';

import ratingIcon from '../../assets/icons/star.png';
import likesIcon from '../../assets/icons/favorite.png';
import { GamesFilter } from '../games-filter/games-filter';
import { GamesTitle } from '../games-title/games-title';
import { GamesPagination } from '../games-pagination/games-pagination';

interface GameInfo {
  image: string;
  title: string;
  description: string;
  gener: string;
  price: string;
  meta: {
    rating: string;
    likes: string;
  };
}

const data: GameInfo[] = [
  {
    image: Img3,
    title: 'Vacation Cafe Simulator',
    description:
      'Cozy Italian Vacation Cafe 🏖️ No timers, No stress 😌 cook traditional dishes 🍝 upgrade and customize 🏠 just drink Prosecco 🥂 relax and grow your dream cafe ✨',
    gener: 'Strategy',
    price: 'Free',
    meta: {
      rating: '4.8',
      likes: '28.7K',
    },
  },
  {
    image: Img4,
    title: 'Winter Burrow',
    description:
      'A cozy woodland survival game about a mouse restoring their childhood burrow. Explore, gather resources, craft, knit warm sweaters, bake pies and meet the locals.',
    gener: 'Farm',
    price: 'Free',
    meta: {
      rating: '4.9',
      likes: '32.4K',
    },
  },
  {
    image: Img5,
    title: 'Shelve the Potions!',
    description:
      "Organize 2000+ potions on shelves after the witch's cats have knocked them over, using clues around an enchanted cellar. Learn strange symbols and decipher cryptic notes",
    gener: 'Puzzle',
    price: 'Free',
    meta: {
      rating: '4.7',
      likes: '23.1K',
    },
  },
  {
    image: Img8,
    title: 'Shelve the Potions!',
    description:
      "Organize 2000+ potions on shelves after the witch's cats have knocked them over, using clues around an enchanted cellar. Learn strange symbols and decipher cryptic notes",
    gener: 'Puzzle',
    price: '$1.99',
    meta: {
      rating: '4.7',
      likes: '23.1K',
    },
  },
  {
    image: Img6,
    title: 'Shelve the Potions!',
    description:
      "Organize 2000+ potions on shelves after the witch's cats have knocked them over, using clues around an enchanted cellar. Learn strange symbols and decipher cryptic notes",
    gener: 'Puzzle',
    price: 'Free',
    meta: {
      rating: '4.7',
      likes: '23.1K',
    },
  },
  {
    image: Img7,
    title: 'Shelve the Potions!',
    description:
      "Organize 2000+ potions on shelves after the witch's cats have knocked them over, using clues around an enchanted cellar. Learn strange symbols and decipher cryptic notes",
    gener: 'Puzzle',
    price: 'Free',
    meta: {
      rating: '4.7',
      likes: '23.1K',
    },
  },
];

export function Games() {
  const games = document.createElement('section');
  games.className = 'games';
  games.id = 'games';
  const container = document.createElement('div');
  container.className = 'container';

  const gamesWrapper = document.createElement('div');
  gamesWrapper.className = 'games-wrapper';

  container.appendChild(GamesTitle());
  container.appendChild(GamesFilter());
  data.forEach((d) => {
    gamesWrapper.appendChild(GameCard(d));
  });
  container.appendChild(gamesWrapper);
  container.appendChild(GamesPagination());
  games.appendChild(container);

  return games;
}

function GameCard(game: GameInfo): HTMLElement {
  const card = document.createElement('div');
  card.className = 'card skin';
  const cardWrapper = document.createElement('div');
  cardWrapper.className = 'card__wrapper';

  const cardImg = document.createElement('img');
  cardImg.src = game.image;
  cardImg.alt = game.title;
  cardImg.className = 'card__img';

  cardWrapper.appendChild(cardImg);
  cardWrapper.appendChild(
    CardContent(game.title, game.gener, game.price, game.description, game.meta),
  );

  card.appendChild(cardWrapper);
  return card;
}

function CardContent(
  title: string,
  tag: string,
  price: string,
  description: string,
  meta: {
    rating: string;
    likes: string;
  },
): HTMLElement {
  const content = document.createElement('div');
  content.className = 'content';

  const contentHeader = document.createElement('div');
  contentHeader.className = 'content__header';

  const contentDescription = document.createElement('p');

  contentDescription.className = 'content__description';
  contentDescription.textContent = description;

  const contentFooter = document.createElement('div');
  contentFooter.className = 'content__footer';

  const contentHeaderTitle = document.createElement('h2');
  contentHeaderTitle.textContent = title;
  contentHeaderTitle.className = 'content__title';

  const contentHeaderTag = document.createElement('span');
  contentHeaderTag.className = 'tag';
  contentHeaderTag.textContent = tag;

  const contentHeaderPrice = document.createElement('span');
  contentHeaderPrice.className = price.toLocaleLowerCase().includes('free')
    ? 'price price--free'
    : 'price';
  contentHeaderPrice.textContent = price;

  contentHeader.appendChild(contentHeaderTitle);
  contentHeader.appendChild(contentHeaderTag);
  contentHeader.appendChild(contentHeaderPrice);

  const ratingWrapper = document.createElement('div');
  ratingWrapper.className = 'game-rating';
  const likesgWrapper = document.createElement('div');
  likesgWrapper.className = 'game-likes';

  const ratingImg = document.createElement('img');
  ratingImg.src = ratingIcon;
  ratingImg.alt = 'rating';

  const likesImg = document.createElement('img');
  likesImg.src = likesIcon;
  likesImg.alt = 'likes';

  const rating = document.createElement('span');
  rating.textContent = meta.rating;
  const likes = document.createElement('span');
  likes.textContent = meta.likes;

  ratingWrapper.appendChild(ratingImg);
  ratingWrapper.appendChild(rating);
  likesgWrapper.appendChild(likesImg);
  likesgWrapper.appendChild(likes);

  const detailsBtn = document.createElement('button');
  detailsBtn.className = 'details-btn';
  detailsBtn.textContent = 'Details';

  contentFooter.appendChild(ratingWrapper);
  contentFooter.appendChild(likesgWrapper);
  contentFooter.appendChild(detailsBtn);

  content.appendChild(contentHeader);
  content.appendChild(contentDescription);
  content.appendChild(contentFooter);

  return content;
}
