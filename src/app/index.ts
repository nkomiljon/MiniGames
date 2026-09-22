import '../styles/globals.scss';

import { Header } from '../components/header/header';
import { HeroSection } from '../components/hero-section/hero-section';
import { Leaderboard } from '../components/leaderboard/leaderboard';
import { DeveloperCta } from '../components/developer-cta/developer-cta';
import { Footer } from '../components/footer/footer';
import { GameCarousel } from '../components/game-carousel/game-carousel';

const rootEl = document.querySelector<HTMLDivElement>('#app');
rootEl?.appendChild(Header());
rootEl?.appendChild(HeroSection());
rootEl?.appendChild(GameCarousel());
rootEl?.appendChild(Leaderboard());
rootEl?.appendChild(DeveloperCta());
rootEl?.appendChild(Footer());
