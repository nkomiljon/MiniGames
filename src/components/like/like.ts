import './like.scss';
import favoriteIcon from '../../assets/icons/favorite.png';

export function Like(count: number) {
  const like = document.createElement('div');
  like.className = 'like';
  const likeIcon = document.createElement('img');
  likeIcon.src = favoriteIcon;
  likeIcon.alt = 'like';
  const likeCount = document.createElement('span');
  likeCount.className = 'like__count';
  likeCount.textContent = `${count}`;

  like.append(likeIcon, likeCount);
  return like;
}
