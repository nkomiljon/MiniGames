import './title.scss';

export function Title(title: string): HTMLElement {
  const h1Element = document.createElement('h1');
  h1Element.textContent = title;
  h1Element.className = 'title';
  return h1Element;
}
