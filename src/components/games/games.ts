import './games.scss';
import Img3 from '../../assets/images/img-3.png';
import Img4 from '../../assets/images/img-4.png';
import Img5 from '../../assets/images/img-5.png';
import Img6 from '../../assets/images/img-6.png';
import Img7 from '../../assets/images/img-7.png';
import Img8 from '../../assets/images/img-8.png';

import { GamesFilter } from '../games-filter/games-filter';
import { GamesTitle } from '../games-title/games-title';
import { GamesPagination } from '../games-pagination/games-pagination';
import { DialogContent } from '../dialog-content/dialog-content';
import { createDialog } from '../../utils/create-dialog';
import { Game } from '../../interfaces/game.interface';
import { Rating } from '../rating/rating';
import { Like } from '../like/like';

const data: Game[] = [
  {
    image: Img3,
    title: 'Vacation Cafe Simulator',
    description:
      'Cozy Italian Vacation Cafe 🏖️ No timers, No stress 😌 cook traditional dishes 🍝 upgrade and customize 🏠 just drink Prosecco 🥂 relax and grow your dream cafe ✨',
    category: 'Strategy',
    price: 'Free',
    playersType: 'Solo',
    duration: '40-90min',
    meta: {
      rating: 4.8,
      likes: 28.7,
    },
    recorders: [
      {
        id: 1,
        name: 'ForestSpirit',
        point: 1000,
        history: '1 days',
      },
      {
        id: 2,
        name: 'TeaBrewer',
        point: 1000,
        history: '5 days',
      },
      {
        id: 3,
        name: 'HerbalistPath',
        point: 1000,
        history: '1 week',
      },
    ],
    comments: [
      {
        meta: {
          author: 'ForestDweller',
          date: '3 hours ago',
        },
        body: "The hand-drawn art is absolutely magical 🍄 Every location feels like a page from a children's storybook. The mushroom village made me cry happy tears!",
        likes: 12,
      },
    ],
  },
  {
    image: Img4,
    title: 'Winter Burrow',
    description:
      'A cozy woodland survival game about a mouse restoring their childhood burrow. Explore, gather resources, craft, knit warm sweaters, bake pies and meet the locals.',
    category: 'Farm',
    price: 'Free',
    playersType: 'Solo',
    duration: '',
    meta: {
      rating: 4.9,
      likes: 32.4,
    },
    recorders: [
      {
        id: 1,
        name: '',
        point: 1000,
        history: '2 day',
      },
      {
        id: 2,
        name: '',
        point: 1000,
        history: '2 day',
      },
      {
        id: 3,
        name: '',
        point: 1000,
        history: '2 day',
      },
    ],
    comments: [],
  },
  {
    image: Img5,
    title: 'Shelve the Potions!',
    description:
      "Organize 2000+ potions on shelves after the witch's cats have knocked them over, using clues around an enchanted cellar. Learn strange symbols and decipher cryptic notes",
    category: 'Puzzle',
    price: 'Free',
    playersType: 'Solo',
    duration: '',
    meta: {
      rating: 4.7,
      likes: 23.1,
    },
    recorders: [
      {
        id: 1,
        name: '',
        point: 1000,
        history: '2 day',
      },
    ],
    comments: [],
  },
  {
    image: Img8,
    title: 'Shelve the Potions!',
    description:
      "Organize 2000+ potions on shelves after the witch's cats have knocked them over, using clues around an enchanted cellar. Learn strange symbols and decipher cryptic notes",
    category: 'Puzzle',
    price: '$1.99',
    playersType: 'Solo',
    duration: '',
    meta: {
      rating: 4.7,
      likes: 23.1,
    },
    recorders: [
      {
        id: 1,
        name: '',
        point: 1000,
        history: '2 day',
      },
    ],
    comments: [],
  },
  {
    image: Img6,
    title: 'Shelve the Potions!',
    description:
      "Organize 2000+ potions on shelves after the witch's cats have knocked them over, using clues around an enchanted cellar. Learn strange symbols and decipher cryptic notes",
    category: 'Puzzle',
    price: 'Free',
    playersType: 'Solo',
    duration: '',
    meta: {
      rating: 4.7,
      likes: 23.1,
    },
    recorders: [
      {
        id: 1,
        name: '',
        point: 1000,
        history: '2 day',
      },
    ],
    comments: [],
  },
  {
    image: Img7,
    title: 'Shelve the Potions!',
    description:
      "Organize 2000+ potions on shelves after the witch's cats have knocked them over, using clues around an enchanted cellar. Learn strange symbols and decipher cryptic notes",
    category: 'Puzzle',
    price: 'Free',
    playersType: 'Solo',
    duration: '',
    meta: {
      rating: 4.7,
      likes: 23.1,
    },
    recorders: [
      {
        id: 1,
        name: '',
        point: 1000,
        history: '2 day',
      },
    ],
    comments: [],
  },
];

export function Games() {
  const games = document.createElement('section');
  games.className = 'games';
  games.id = 'games';
  const container = document.createElement('div');
  container.className = 'container';

  const gamesWrapper = document.createElement('div');
  gamesWrapper.className = 'library-grid';

  container.appendChild(GamesTitle());
  container.appendChild(GamesFilter());
  data.forEach((d) => gamesWrapper.appendChild(GameCard(d)));
  container.appendChild(gamesWrapper);
  container.appendChild(GamesPagination());
  games.appendChild(container);

  return games;
}

function GameCard(game: Game): HTMLElement {
  const card = document.createElement('div');
  card.className = 'card skin';
  card.appendChild(CardWrapper(game));
  return card;
}

function CardWrapper(game: Game): HTMLElement {
  const cardWraper = document.createElement('div');
  cardWraper.className = 'card__wrapper';

  cardWraper.append(CardImage(game.image, game.title), CardContent(game));
  return cardWraper;
}

function CardImage(src: string, alt: string): HTMLElement {
  const cardImageWrapper = document.createElement('div');
  cardImageWrapper.className = 'card__img';
  const cardImg = document.createElement('img');
  cardImg.src = src;
  cardImg.alt = alt;

  cardImageWrapper.appendChild(cardImg);
  return cardImageWrapper;
}

function CardContent(game: Game): HTMLElement {
  const content = document.createElement('div');
  content.className = 'content';

  content.append(
    CardContentTop(game.title, game.category, game.price),
    CardContentBody(game.description),
    CardContentFooter(game),
  );
  return content;
}

function CardContentTop(title: string, tag: string, price: string): HTMLElement {
  const contentHeader = document.createElement('div');
  contentHeader.className = 'content__header';

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

  contentHeader.append(contentHeaderTitle, contentHeaderTag, contentHeaderPrice);
  return contentHeader;
}

function CardContentBody(description: string): HTMLElement {
  const contentBody = document.createElement('div');
  contentBody.className = 'content__body';
  const contentDescription = document.createElement('p');
  contentDescription.textContent = description;

  contentBody.appendChild(contentDescription);
  return contentBody;
}

function CardContentFooter(game: Game): HTMLElement {
  const contentFooter = document.createElement('div');
  contentFooter.className = 'content__footer';

  const detailsBtn = document.createElement('button');
  detailsBtn.className = 'details-btn';
  detailsBtn.textContent = 'Details';
  detailsBtn.addEventListener('click', () => {
    createDialog<Game>({
      data: game,
      content: (close) => DialogContent(game, close),
      onClose: () => {},
    });
  });

  contentFooter.append(Rating(game.meta.rating), Like(game.meta.likes), detailsBtn);
  return contentFooter;
}
