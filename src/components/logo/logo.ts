import './logo.scss';

export function Logo(img: string, url: string, classPrefix: string): HTMLElement {
  const link = document.createElement('a');
  link.className = 'logo';
  link.href = url;
  const icon = document.createElement('img');
  icon.src = img;
  icon.alt = 'MiniGames';
  const title = document.createElement('span');
  title.className = classPrefix ? 'logo__title ' + classPrefix : 'logo__title';
  title.textContent = 'MiniGames';

  link.appendChild(icon);
  link.appendChild(title);
  return link;
}
