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
  const container = document.createElement('div');
  container.className = 'container';

  const tableElement = document.createElement('table');
  tableElement.className = 'table';
  const tHeadElement = document.createElement('thead');
  tHeadElement.className = 'table__head';

  const trElement = document.createElement('tr');
  tableHeaders.map((t) => {
    const thElement = document.createElement('th');
    thElement.scope = 'col';
    thElement.textContent = t;
    trElement.appendChild(thElement);
  });
  tHeadElement.appendChild(trElement);

  tableElement.appendChild(tHeadElement);
  tableElement.appendChild(TableBody());

  container.appendChild(Title('Top Players This Week'));
  container.appendChild(tableElement);
  container.appendChild(tableElement);
  tableSectionElement.appendChild(container);
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

function TableBody(): HTMLElement {
  const tBody = document.createElement('tbody');
  tBody.className = 'table__body';
  players.forEach((player) => {
    const tr = TableRow(player);
    tBody.appendChild(tr);
  });

  return tBody;
}

function TableRow(player: Player): HTMLElement {
  const tr = document.createElement('tr');
  tr.className = 'tr';
  tr.appendChild(TableCell(`#${player.rank}`));
  tr.appendChild(TableCell(player.name));
  tr.appendChild(TableCell(String(player.gamesPlayed)));
  tr.appendChild(TableCell(String(player.totalScore)));
  tr.appendChild(TableCell(String(player.streakDays)));
  tr.appendChild(TableCell(player.favoriteGame));

  return tr;
}

function TableCell(value: string): HTMLElement {
  const td = document.createElement('td');
  td.textContent = value;
  return td;
}
