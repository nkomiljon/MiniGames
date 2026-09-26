import { Games } from '../../components/games/games';
import './game-library.scss';

export function GameLibrary() {
  const library = document.createElement('main');
  library.className = 'main';
  library.id = 'main';

  library.appendChild(Games());
  return library;
}
