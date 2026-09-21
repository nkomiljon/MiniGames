import { Title } from '../title/title';
import './table-section.scss';

export function TableSection(): HTMLElement {
  const tableHeaders: string[] = [
    'Rank',
    'Player',
    'Games Played',
    'Total Score',
    'Streak',
    'Favorite Game',
  ];
  const tableSectionElement = document.createElement('section');
  tableSectionElement.className = 'table-section';
  const containerElement = document.createElement('div');
  containerElement.className = 'container';

  const tableElement = document.createElement('table');
  tableElement.className = 'table';
  const tHeadElement = document.createElement('thead');
  tHeadElement.className = 'table__head';
  const tBodyElement = document.createElement('tbody');

  const trElement = document.createElement('tr');
  tableHeaders.map((t) => {
    const thElement = document.createElement('th');
    thElement.scope = 'col';
    thElement.textContent = t;
    trElement.appendChild(thElement);
  });
  tHeadElement.appendChild(trElement);

  const res = players.map((player) => {
    const trBodyElement = document.createElement('tr');
    const tdElement = document.createElement('td');
    tdElement.textContent = player.name;

    return trBodyElement.appendChild(tdElement);
  });
  console.log(res);

  res.map((r) => tBodyElement.appendChild(r));

  tableElement.appendChild(tHeadElement);
  tableElement.appendChild(tBodyElement);

  tableSectionElement.appendChild(Title('Top Players This Week'));
  containerElement.appendChild(tableElement);
  tableSectionElement.appendChild(tableElement);
  return tableSectionElement;
}

interface Player {
  rank: number;
  avatarInitials: string;
  avatarColor: string;
  name: string;
  gamesPlayed: number;
  totalScore: number;
  streakDays: number;
  favoriteGame: string;
}
const players: Player[] = [
  {
    rank: 1,
    avatarInitials: 'AP',
    avatarColor: 'orange',
    name: 'Alex_Pro99',
    gamesPlayed: 142,
    totalScore: 94250,
    streakDays: 12,
    favoriteGame: 'Heartopia',
  },
  {
    rank: 2,
    avatarInitials: 'CG',
    avatarColor: 'green',
    name: 'CozyGamer_x',
    gamesPlayed: 118,
    totalScore: 81400,
    streakDays: 8,
    favoriteGame: 'Cat Mail Co.',
  },
  {
    rank: 3,
    avatarInitials: 'MM',
    avatarColor: 'blue',
    name: 'MatchMaster',
    gamesPlayed: 98,
    totalScore: 72110,
    streakDays: 5,
    favoriteGame: 'Tiny Glade',
  },
  {
    rank: 4,
    avatarInitials: 'BP',
    avatarColor: 'purple',
    name: 'BubblePop',
    gamesPlayed: 87,
    totalScore: 65900,
    streakDays: 3,
    favoriteGame: 'Whisper of the House',
  },
  {
    rank: 5,
    avatarInitials: 'SG',
    avatarColor: 'yellow',
    name: 'SudokuGod',
    gamesPlayed: 74,
    totalScore: 59320,
    streakDays: 2,
    favoriteGame: 'Cat Chess',
  },
];
