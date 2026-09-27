import './games-library.scss';
import { Games } from '../../components/games/games';

export function GamesLibraryPage() {
  const library = document.createElement('main');
  library.className = 'main';
  library.id = 'main';

  library.appendChild(Games());
  return library;
}
