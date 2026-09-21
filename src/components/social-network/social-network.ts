import './social-network.scss';
import { Icon } from '../icon/icon';
import share from '../../assets/icons/share.png';
import chat from '../../assets/icons/chat.png';
import rss from '../../assets/icons/rss_feed.png';

export function SocialNetwork(): HTMLElement {
  const socialArea = document.createElement('div');
  socialArea.className = 'social-area';

  const socialAreaTitle = document.createElement('span');
  socialAreaTitle.textContent = 'Community';
  socialAreaTitle.className = 'social-area__title';
  const socialAreaWrapper = document.createElement('div');
  socialAreaWrapper.className = 'social-area__wrapper';

  socialAreaWrapper.appendChild(Icon(share, 'share', 'share'));
  socialAreaWrapper.appendChild(Icon(chat, 'chat', 'chat'));
  socialAreaWrapper.appendChild(Icon(rss, 'rss', 'rss'));

  socialArea.appendChild(socialAreaTitle);
  socialArea.appendChild(socialAreaWrapper);
  return socialArea;
}
