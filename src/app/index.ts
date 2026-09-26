import '../styles/globals.scss';
import { createBrowserRouter } from './router';
import { HomePage } from '../pages/home/home-page';
import { GameLibrary } from '../pages/game-library/game-library';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { Outlet } from '../components/outlet/outlet';

const rootEl = document.querySelector<HTMLDivElement>('#app')!;
rootEl.append(Header(), Outlet(), Footer());

createBrowserRouter([
  { path: '/', component: HomePage() },
  { path: '/games-library', component: GameLibrary() },
]);
