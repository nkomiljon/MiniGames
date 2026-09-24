import './hero-section.scss';
import heroImage from '../../assets/images/hero_section.webp';

export function HeroSection(): HTMLElement {
  const heroSection = document.createElement('section');
  heroSection.className = 'hero-section';
  heroSection.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`;

  const heroContent = document.createElement('div');
  heroContent.className = 'hero-section__content';

  const heroTitle = document.createElement('h1');
  heroTitle.className = 'hero-section__title';
  heroTitle.textContent = 'Take a Short Break & Have Fun';

  const heroDescription = document.createElement('p');
  heroDescription.className = 'hero-section__description';
  heroDescription.textContent =
    'Discover hundreds of curated casual mini-games. Play instantly in your browser — puzzle, match 3, farm, and board classics.';

  const heroAction = document.createElement('a');
  heroAction.className = 'hero-section__btn';
  heroAction.text = 'Browse Library';
  heroAction.href = '/';

  heroContent.appendChild(heroTitle);
  heroContent.appendChild(heroDescription);
  heroContent.appendChild(heroAction);

  heroSection.appendChild(heroContent);
  return heroSection;
}
