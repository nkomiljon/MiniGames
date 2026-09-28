import '../styles/globals.scss';
import { createBrowserRouter } from './router';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { Outlet } from '../components/outlet/outlet';
import { GamesLibraryPage, HomePage } from '../pages';

const rootEl = document.querySelector<HTMLDivElement>('#app')!;
rootEl.append(Header(), Outlet(), Footer());

createBrowserRouter([
  { path: '/', component: HomePage },
  { path: '/games-library', component: GamesLibraryPage },
]);
