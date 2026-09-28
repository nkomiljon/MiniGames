import { Avatar } from '../avatar/avatar';
import './comment-form.scss';

export function CommentForm(): HTMLElement {
  const commentFormArea = document.createElement('div');
  commentFormArea.className = 'comment-form';
  const commentForm = document.createElement('form');
  commentForm.className = 'form';
  const commentFormTextarea = document.createElement('textarea');
  commentFormTextarea.id = 'form-textarea';
  commentFormTextarea.setAttribute('placeholder', 'Write a comment...');
  commentFormTextarea.className = 'form__textarea';
  const commentFormSubmit = document.createElement('button');
  commentFormSubmit.className = 'form__btn';

  commentForm.append(commentFormTextarea, commentFormSubmit);
  commentFormArea.append(Avatar('', ''), commentForm);
  return commentFormArea;
}
