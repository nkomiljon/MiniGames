import './footer.scss';
import logo from '../../assets/icons/Logo.png';
import code from '../../assets/icons/code.png';
import rs from '../../assets/icons/RS.png';

import { SocialNetwork } from '../social-network/social-network';
import { FooterSitemap } from '../footer-sitemap/footer-sitemap';
import { Logo } from '../logo/logo';

export function Footer(): HTMLElement {
  const footerElement = document.createElement('footer');
  footerElement.className = 'footer';

  const containerElement = document.createElement('div');
  containerElement.className = 'container';

  const footerTopElement = document.createElement('div');
  footerTopElement.className = 'footer-top';

  const footerBrand = document.createElement('div');
  footerBrand.className = 'footer-top__brand';

  const footerDescriptionElement = document.createElement('p');
  footerDescriptionElement.className = 'footer-top__description';
  footerDescriptionElement.textContent = `Take a short break and have fun. Hundreds of curated 
  casual mini-games right in your web browser. No download
  required.`;

  footerBrand.appendChild(Logo(logo, '/', 'light'));
  footerBrand.appendChild(footerDescriptionElement);

  const footerMenuElement = document.createElement('div');
  footerMenuElement.className = 'footer-top__menu';
  footerMenuElement.appendChild(FooterSitemap());
  footerMenuElement.appendChild(SocialNetwork());

  footerTopElement.appendChild(footerBrand);
  footerTopElement.appendChild(footerMenuElement);

  containerElement.appendChild(footerTopElement);
  containerElement.appendChild(FooterBottom());
  footerElement.appendChild(containerElement);
  return footerElement;
}

function FooterBottom(): HTMLElement {
  const footerBottom = document.createElement('div');
  footerBottom.className = 'footer-bottom';

  const footerInfo = document.createElement('span');
  footerInfo.className = 'footer-bottom__info';
  footerInfo.textContent = '© 2026 MiniGames. All rights reserved.';

  const schoolLink = document.createElement('a');
  schoolLink.className = 'footer-bottom__rslink';
  schoolLink.href = '/';
  const schoolLinkWrapper = document.createElement('div');
  schoolLinkWrapper.className = 'footer-bottom__rslink-wrapper';
  const schoolLinkIcon = document.createElement('img');
  schoolLinkIcon.src = rs;
  schoolLinkIcon.alt = 'RS school';
  const schoolLinkName = document.createElement('span');
  schoolLinkName.className = 'footer-bottom__rslink-name';
  schoolLinkName.textContent = 'RS School';

  schoolLinkWrapper.appendChild(schoolLinkIcon);
  schoolLink.appendChild(schoolLinkWrapper);
  schoolLink.appendChild(schoolLinkName);

  const githubLink = document.createElement('a');
  githubLink.className = 'footer-bottom__github-link';
  githubLink.href = '/';
  const githubIconWrapper = document.createElement('div');
  githubIconWrapper.className = 'footer-bottom__github-wrapper';
  const githubIcon = document.createElement('img');
  githubIcon.src = code;
  githubIcon.alt = 'github-icon';
  const githubNickname = document.createElement('span');
  githubNickname.className = 'footer-bottom__github-nickname';
  githubNickname.textContent = '@student-nickname';

  githubIconWrapper.appendChild(githubIcon);
  githubLink.appendChild(githubIconWrapper);
  githubLink.appendChild(githubNickname);

  const loveText = document.createElement('span');
  loveText.className = 'footer-bottom__love-text';
  loveText.textContent = 'Designed with love';

  footerBottom.appendChild(footerInfo);
  footerBottom.appendChild(schoolLink);
  footerBottom.appendChild(githubLink);
  footerBottom.appendChild(loveText);
  return footerBottom;
}
