import './icon.scss';

export function Icon(src: string, alt: string, link: string) {
  const aElement = document.createElement('a');
  aElement.href = link;
  aElement.className = 'icon-link';
  const imgElement = document.createElement('img');

  imgElement.src = src;
  imgElement.alt = alt;
  aElement.appendChild(imgElement);
  return aElement;
}
