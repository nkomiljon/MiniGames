import './avatar.scss';

export function Avatar(value: string, classPrefix: string): HTMLElement {
  const userNameFirstLetter = value.match('[A-Z]')?.join('');

  const avatar = document.createElement('div');
  avatar.className = classPrefix ? 'avatar ' + classPrefix : 'avatar';
  avatar.textContent = userNameFirstLetter || '';
  return avatar;
}
