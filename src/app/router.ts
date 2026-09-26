import { NotFound } from '../pages/not-found/not-found';

interface Route {
  path: string;
  component: HTMLElement | DocumentFragment;
}

export function createBrowserRouter(routes: Route[]) {
  const outlet = document.getElementById('main')!;

  const handleRouter = () => {
    const path = window.location.hash.slice(1) || '/';
    const matched = routes.find((route) => route.path === path);

    outlet.innerHTML = '';
    if (matched) {
      outlet.appendChild(matched.component);
    } else {
      outlet.appendChild(NotFound());
    }

    updateActiveMenuItem(path);
  };

  window.addEventListener('hashchange', handleRouter);
  handleRouter();

  return () => {
    window.removeEventListener('hashchange', handleRouter);
  };
}

function updateActiveMenuItem(currentPath: string) {
  const links = document.querySelectorAll<HTMLAnchorElement>('.navbar__menu a');

  links.forEach((link) => {
    const linkPath = link.getAttribute('href')?.slice(1);

    if (linkPath === currentPath) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
}
