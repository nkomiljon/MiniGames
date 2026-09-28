export function NotFound(): HTMLElement {
  const notFoundContent = document.createElement('div');
  const h1 = document.createElement('h1');
  h1.textContent = '404 - Not found';

  notFoundContent.appendChild(h1);
  return notFoundContent;
}
