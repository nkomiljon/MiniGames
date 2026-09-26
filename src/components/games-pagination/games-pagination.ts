import './games-pagination.scss';

const pages: number[] = [1, 2, 3, 4];
export function GamesPagination(): HTMLElement {
  const pagination = document.createElement('nav');
  pagination.className = 'pagination';

  const paginationWrapper = document.createElement('ul');
  paginationWrapper.className = 'pagination__wrapper';

  const prevBtn = createPaginationBtn('<', 'inactive', 'Prev page');
  paginationWrapper.appendChild(prevBtn);

  pages.forEach((page) => {
    const paginationItem = document.createElement('li');
    const paginationBtn = document.createElement('a');
    paginationBtn.className = 'pagination__btn';
    paginationBtn.textContent = `${page}`;
    if (page === 1) paginationBtn.setAttribute('aria-current', `${page}`);
    paginationItem.appendChild(paginationBtn);
    paginationWrapper.appendChild(paginationItem);
  });
  pagination.appendChild(paginationWrapper);

  const nextBtn = createPaginationBtn('>', '', 'Next page');
  paginationWrapper.appendChild(nextBtn);

  return pagination;
}

function createPaginationBtn(content: string, extraClass = '', ariaLabel?: string): HTMLLIElement {
  const item = document.createElement('li');
  const btn = document.createElement('a');
  btn.className = `pagination__btn${extraClass ? ` ${extraClass}` : ''}`;
  btn.textContent = content;
  if (ariaLabel) btn.setAttribute('aria-label', ariaLabel);
  item.appendChild(btn);
  return item;
}
