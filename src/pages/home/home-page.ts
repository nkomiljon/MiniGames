import { DeveloperCta } from '../../components/developer-cta/developer-cta';
import { GameCarousel } from '../../components/game-carousel/game-carousel';
import { HeroSection } from '../../components/hero-section/hero-section';
import { Leaderboard } from '../../components/leaderboard/leaderboard';

export function HomePage(): DocumentFragment {
  const fragment = document.createDocumentFragment();
  fragment.append(HeroSection(), GameCarousel(), Leaderboard(), DeveloperCta());
  return fragment;
}
