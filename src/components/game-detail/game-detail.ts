import './game-detail.scss';

import Img3 from '../../assets/images/img-3.png';

export function GameDetail() {
  const gameDetail = document.createElement('div');
  gameDetail.className = 'game-detail';

  gameDetail.appendChild(GameDetailHeader(Img3));
  gameDetail.appendChild(GameDetailContent());
  return gameDetail;
}

function GameDetailHeader(image: string) {
  const gameDetailHeader = document.createElement('div');
  gameDetailHeader.style.backgroundImage = `url(${image})`;
  gameDetailHeader.className = 'game-detail__header';

  const closeBtn = document.createElement('button');
  closeBtn.className = 'close-btn';

  gameDetailHeader.appendChild(closeBtn);
  return gameDetailHeader;
}

function GameDetailContent() {
  const gameDetailContent = document.createElement('div');
  gameDetailContent.className = 'game-detail__content';

  gameDetailContent.appendChild(ContentTop());
  return gameDetailContent;
}

function ContentTop() {
  const contentTop = document.createElement('div');
  const contentInfo = document.createElement('div');
  const contnetTitle = document.createElement('h2');
  contnetTitle.textContent = 'Tukoni: Forest Keepers';
  const contentDescription = document.createElement('p');
  contentDescription.textContent =
    'Tukoni: Forest Keepers — a cozy hand-drawn puzzle-adventure. You are Traveller, a little forest spirit on an important mission. Wander storybook meadows, visit mushroom villages, meet adorable inhabitants, solve gentle hand-crafted puzzles, brew herbal teas and help the Tukoni forest prepare peacefully for the coming winter.';

  contentInfo.appendChild(contnetTitle);
  contentInfo.appendChild(contentDescription);

  const contentWidgets = document.createElement('div');
  contentWidgets.className = 'widgets';

  [1, 2, 3, 4].forEach(() => {
    const widget = document.createElement('div');
    widget.className = 'widgets__item';
    contentWidgets.appendChild(widget);
  });

  const contentActions = document.createElement('div');
  contentActions.className = 'actions';

  contentTop.appendChild(contentInfo);
  contentTop.appendChild(contentWidgets);
  contentTop.appendChild(contentActions);
  return contentTop;
}

function ContentBody() {}

function Records() {}

function Comments() {}
