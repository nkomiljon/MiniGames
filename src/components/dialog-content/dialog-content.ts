import './dialog-content.scss';
import { Comment, Game, Recorder } from '../../interfaces';

export function DialogContent(game: Game, close: () => void): HTMLElement {
  const gameDetail = document.createElement('div');
  gameDetail.className = 'game-detail';

  gameDetail.appendChild(GameDetailHeader(game.image, close));
  gameDetail.appendChild(GameDetailContent(game));
  return gameDetail;
}

function GameDetailHeader(image: string, close: () => void) {
  const gameDetailHeader = document.createElement('div');
  gameDetailHeader.style.backgroundImage = `url(${image})`;
  gameDetailHeader.className = 'game-detail__header';

  const closeBtn = document.createElement('button');
  closeBtn.className = 'close-btn';
  closeBtn.addEventListener('click', close);

  gameDetailHeader.appendChild(closeBtn);
  return gameDetailHeader;
}

function GameDetailContent(game: Game) {
  const gameDetailContent = document.createElement('div');
  gameDetailContent.className = 'game-detail__content';

  gameDetailContent.appendChild(ContentTop(game));
  return gameDetailContent;
}

function ContentTop(game: Game) {
  const widgets = [];
  widgets.push({
    category: game.category,
    playersType: game.playersType,
    duration: game.duration,
    price: game.price,
  });
  const contentTop = document.createElement('div');
  contentTop.className = 'content__top';

  const contentInfo = document.createElement('div');
  const contnetTitle = document.createElement('h2');
  contnetTitle.textContent = game.title;
  const contentDescription = document.createElement('p');
  contentDescription.textContent = game.description;

  contentInfo.appendChild(contnetTitle);
  contentInfo.appendChild(contentDescription);

  const contentWidgets = document.createElement('div');
  contentWidgets.className = 'widgets';

  widgets.forEach((w) => {
    contentWidgets.append(
      Widget('Category', w.category),
      Widget('Players', w.playersType),
      Widget('Duration', w.duration),
      Widget('Price', w.price),
    );
  });

  const contentActions = document.createElement('div');
  contentActions.className = 'actions';
  contentActions.append(
    ActionBtn('Play now', 'action-btn--play'),
    ActionBtn('Add to Favorites', 'action-btn--favorite'),
  );

  contentTop.appendChild(contentInfo);
  contentTop.appendChild(contentWidgets);
  contentTop.appendChild(contentActions);
  contentTop.appendChild(TopRecorders(game.recorders));
  contentTop.appendChild(Comments(game.comments));
  return contentTop;
}

function Widget(headerValue: string, value: string): HTMLElement {
  const widget = document.createElement('div');
  widget.className = 'widgets__item widget skin';
  const widgetHeader = document.createElement('span');
  widgetHeader.className = 'widget__header';
  widgetHeader.textContent = headerValue;

  const widgetBody = document.createElement('div');
  widgetBody.className = 'widget__body';
  widgetBody.textContent = value;

  widget.append(widgetHeader, widgetBody);
  return widget;
}

function ActionBtn(value: string, prefix: string): HTMLElement {
  const actionBtn = document.createElement('button');
  actionBtn.className = 'action-btn ' + prefix;
  actionBtn.textContent = value;
  return actionBtn;
}

function TopRecorders(recorders: Recorder[]): HTMLElement {
  const recordersTop = document.createElement('div');
  recordersTop.className = 'records';

  const recordersTopWrapper = document.createElement('div');
  recordersTopWrapper.className = 'records__wrapper';

  const recordersTitle = document.createElement('h2');
  recordersTitle.textContent = '🏆 Top Records';

  recordersTop.append(recordersTitle, recordersTopWrapper);

  recorders.forEach((recorder) => {
    recordersTopWrapper.appendChild(RecorderItem(recorder));
  });

  return recordersTop;
}

function RecorderItem(recorder: Recorder): HTMLElement {
  const ratingIcon = ['🥇', '🥈', '🥉'];

  const recorderItem = document.createElement('div');
  recorderItem.className = 'recorder';

  const recorderName = document.createElement('span');
  recorderName.className = 'recorder__name';
  recorderName.textContent = ratingIcon[recorder.id - 1] + recorder.name;

  const recorderLeft = document.createElement('div');
  recorderLeft.className = 'recorder__left';
  const recorderPoint = document.createElement('span');
  recorderPoint.className = 'recorder__point';
  recorderPoint.textContent = `${recorder.point} pts`;

  const recorderHistory = document.createElement('span');
  recorderHistory.className = 'recorder__history';
  recorderHistory.textContent = recorder.history + 'ago';

  recorderItem.appendChild(recorderName);
  recorderLeft.append(recorderPoint, recorderHistory);
  recorderItem.appendChild(recorderLeft);
  return recorderItem;
}

function Comments(comments: Comment[]): HTMLElement {
  const commentsArea = document.createElement('div');
  commentsArea.className = 'comments';

  const commentsTitle = document.createElement('h2');
  commentsTitle.className = 'comments__title';
  commentsTitle.textContent = 'Comments ' + comments.length;

  const commentsWrapper = document.createElement('div');
  commentsWrapper.className = 'comments__wrapper';
  comments.forEach((comment) => {
    commentsWrapper.appendChild(CommentItem(comment));
  });
  commentsArea.appendChild(commentsWrapper);
  return commentsArea;
}

function CommentItem(comment: Comment): HTMLElement {
  const commentItem = document.createElement('div');
  commentItem.className = 'comment';

  const commentTop = document.createElement('div');
  commentTop.className = 'comment__top';

  const userInfo = document.createElement('div');
  const userIcon = document.createElement('div');
  userIcon.className = 'user-icon';
  userIcon.textContent = comment.meta.author.slice(1);

  const userName = document.createElement('h4');
  userName.className = 'user-name';
  userName.textContent = '';

  const date = document.createElement('span');
  date.className = 'comment__date';
  date.textContent = comment.meta.date;

  userInfo.append(userIcon, userName);
  commentTop.append(userInfo, date);

  const commentBody = document.createElement('div');
  commentBody.className = 'comment__body';

  commentItem.append(commentTop, commentBody);
  return commentItem;
}
