import './rating.scss';

import starIcon from '../../assets/icons/star.png';

export function Rating(evaluation: number): HTMLElement {
  const rating = document.createElement('div');
  rating.className = 'rating';
  const ratingIcon = document.createElement('img');
  ratingIcon.className = 'rating__icon';
  ratingIcon.src = starIcon;
  ratingIcon.alt = 'rating';

  const ratingEvaluation = document.createElement('span');
  ratingEvaluation.className = 'rating__evaluation';
  ratingEvaluation.textContent = `${evaluation}`;

  rating.append(ratingIcon, ratingEvaluation);
  return rating;
}
