import './games-filter.scss';

interface FilterTab {
  label: string;
  value: string;
}

const categories: FilterTab[] = [
  { label: 'All Games', value: 'all' },
  { label: 'Puzzle', value: 'puzzle' },
  { label: 'Card', value: 'card' },
  { label: 'Match', value: 'match' },
  { label: 'Farm', value: 'farm' },
  { label: 'Strategy', value: 'strategy' },
  { label: 'Arcade', value: 'arcade' },
];
export function GamesFilter(): HTMLElement {
  const filter = document.createElement('div');
  filter.className = 'filter';
  const filterCategories = document.createElement('div');
  filterCategories.className = 'filter__categories';

  const filterSort = document.createElement('div');
  filterSort.className = 'filter__sort';
  const sortBtn = document.createElement('button');
  sortBtn.className = 'sort-btn';
  sortBtn.textContent = 'Sort by: Rating ↓';

  filterSort.appendChild(sortBtn);

  categories.forEach((category) => {
    const chips = document.createElement('button');
    chips.className = 'chips';
    if (category.value === 'all') chips.classList.add('chips--active');

    chips.textContent = category.label;
    chips.id = category.value;

    filterCategories.appendChild(chips);
  });

  filter.appendChild(filterCategories);
  filter.appendChild(filterSort);
  return filter;
}
