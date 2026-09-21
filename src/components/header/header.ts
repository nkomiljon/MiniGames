import './header.scss';
import logo from '../../assets/icons/Logo.png';
import { Logo } from '../logo/logo';

export function Header(): HTMLElement {
  const menu: string[] = ['Home', 'Library', 'Tournaments', 'Community'];

  const headerElement = document.createElement('header');
  headerElement.classList.add('header');

  const containerElement = document.createElement('div');
  containerElement.className = 'container';

  const divElement = document.createElement('div');
  divElement.classList.add('header__wrapper');

  const navElement = document.createElement('nav');
  navElement.className = 'navbar';
  const ulElement = document.createElement('ul');
  ulElement.className = 'navbar__menu';

  menu.map((m) => {
    const liElement = document.createElement('li');
    const aElement = document.createElement('a');
    aElement.text = m;
    aElement.href = `/${m}`;
    liElement.appendChild(aElement);
    ulElement.appendChild(liElement);
  });

  const authWrapperElement = document.createElement('div');
  authWrapperElement.className = 'auth-wrapper';

  const loginElement = document.createElement('a');
  const signInElement = document.createElement('a');
  loginElement.className = 'btn';
  loginElement.text = 'Log In';
  signInElement.classList.add('btn', 'btn--active');
  signInElement.text = 'Sign Up';

  authWrapperElement.appendChild(loginElement);
  authWrapperElement.appendChild(signInElement);
  navElement.appendChild(ulElement);
  navElement.appendChild(authWrapperElement);

  divElement.appendChild(Logo(logo, '/', 'dark'));
  divElement.appendChild(navElement);

  containerElement.appendChild(divElement);
  headerElement.appendChild(containerElement);
  return headerElement;
}
