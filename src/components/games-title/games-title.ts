import './games-title.scss';

export function GamesTitle(): HTMLElement {
  const gamesTitleWrapper = document.createElement('div');
  gamesTitleWrapper.className = 'games__info';

  const gamesTitle = document.createElement('h1');
  gamesTitle.className = 'games__title';
  gamesTitle.textContent = 'Game Library';

  const gamesDescription = document.createElement('p');
  gamesDescription.className = 'games__description';
  gamesDescription.textContent = 'Browse our collection of casual mini-games';

  gamesTitleWrapper.appendChild(gamesTitle);
  gamesTitleWrapper.appendChild(gamesDescription);
  return gamesTitleWrapper;
}
