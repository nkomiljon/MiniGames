import './comment.scss';

import { Comment } from '../../interfaces';
import { Avatar } from '../avatar/avatar';
import { Like } from '../like/like';

export function GameComment(comment: Comment): HTMLElement {
  const commentArea = document.createElement('div');
  commentArea.className = 'comment';
  const commentAreaTop = document.createElement('div');
  commentAreaTop.className = 'comment__top';
  const commentTime = document.createElement('span');
  commentTime.textContent = comment.time;

  commentAreaTop.append(UserInfo(comment.author), commentTime);

  const commentAreaBody = document.createElement('div');
  commentAreaBody.className = 'comment__body';
  const commentText = document.createElement('p');
  commentText.textContent = comment.body;
  commentAreaBody.appendChild(commentText);

  const commentAreaFooter = document.createElement('div');
  commentAreaFooter.className = 'comment__footer';
  commentAreaFooter.appendChild(Like(comment.like));

  commentArea.append(commentAreaTop, commentAreaBody, commentAreaFooter);
  return commentArea;
}

function UserInfo(author: string): HTMLElement {
  const userInfoArea = document.createElement('div');
  userInfoArea.className = 'user-info';
  const userName = document.createElement('span');
  userName.textContent = author;

  userInfoArea.append(Avatar(author, ''), userName);
  return userInfoArea;
}
