import { Title } from '../title/title';
import './leaderboard.scss';

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

export function Leaderboard(): HTMLElement {
  const tableHeaders: string[] = [
    'Rank',
    'Player',
    'Games Played',
    'Total Score',
    'Streak',
    'Favorite Game',
  ];
  const leaderboard = document.createElement('section');
  leaderboard.className = 'leaderboard';

  const container = document.createElement('div');
  container.className = 'container';

  const leaderboardMeta = document.createElement('div');
  leaderboardMeta.className = 'leaderboard__meta';

  const leaderboardWrapper = document.createElement('div');
  leaderboardWrapper.className = 'leaderboard__wrapper';

  const leaderboardTable = document.createElement('table');
  leaderboardTable.className = 'table';
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

  leaderboardTable.appendChild(tHeadElement);
  leaderboardTable.appendChild(TableBody());

  leaderboardMeta.appendChild(Title('Top Players This Week'));
  leaderboardWrapper.appendChild(leaderboardTable);

  container.appendChild(leaderboardMeta);
  container.appendChild(leaderboardWrapper);

  leaderboard.appendChild(container);
  return leaderboard;
}

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
  tr.appendChild(rankCell(player.rank));
  tr.appendChild(playerNameCell(player.name));
  tr.appendChild(gamesCountCell(player.gamesPlayed));
  tr.appendChild(totalScoreCell(player.totalScore));
  tr.appendChild(streakDaysCell(player.streakDays));
  tr.appendChild(favoriteGameCell(player.favoriteGame));

  return tr;
}

function rankCell(rank: number) {
  const td = document.createElement('td');
  td.textContent = `#${rank}`;
  if (rank === 1) td.classList.add('yellow');
  return td;
}

function playerNameCell(name: string) {
  const td = document.createElement('td');
  const playerIcon = document.createElement('span');
  playerIcon.className = '';
  playerIcon.textContent = name;
  td.appendChild(playerIcon);
  return td;
}

function gamesCountCell(count: number) {
  const td = document.createElement('td');
  td.textContent = `${count}`;
  return td;
}

function totalScoreCell(score: number) {
  const td = document.createElement('td');
  td.textContent = score.toLocaleString();
  return td;
}

function streakDaysCell(streak: number) {
  const td = document.createElement('td');
  td.textContent = `🔥 ${streak} days`;
  return td;
}

function favoriteGameCell(value: string): HTMLElement {
  const td = document.createElement('td');

  const chips = document.createElement('span');
  chips.className = 'chips';
  chips.textContent = value;

  td.appendChild(chips);
  return td;
}
