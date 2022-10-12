import './style.css';

const submit = document.getElementById('form');

// Create Score object

const Scores = [
  {
    name: 'Jeff',
    score: 100,
  },
  {
    name: 'Hillary',
    score: 150,
  },
  {
    name: 'Edward',
    score: 250,
  },
  {
    name: 'James',
    score: 300,
  },
];

// Render score on the board
const leaderBoard = ` <div class="recent-scores">
    <div class="scores">
        <h3 id="scores">Recent Scores</h3>
        <button type="button" id="refresh">Refresh</button>
    </div>

    <ul class="board"></ul>
</div>

<form id="form">
    <h3 class="add-score">Add your score</h3>
    <input type="text"  id="name" placeholder="Your name">
    <br> <br>
    <input type="text"  id="score" placeholder="Your score"> <br>
    <button type="submit" id="submit">Submit</button>
</form>`;

const renderLeaderBoard = () => {
  const board = document.querySelector('.leader-board');
  board.insertAdjacentHTML('beforeend', leaderBoard);
};
renderLeaderBoard();

const showScore = () => {
  const showUserScore = document.querySelector('.board');
  showUserScore.innerHTML = '';
  Scores.forEach((user) => {
    showUserScore.innerHTML += `<li>${user.name} : ${user.score}</li>`;
  });
};
showScore();

// AddScore function
const addScore = (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  const inputData = {
    user: name.trim(),
    score,
  };
  Scores.push(inputData);
  document.getElementById('form').reset();
};

// EventListener on refresh
document.getElementById('refresh').addEventListener('click', showScore);

// EventListener on submit form
submit.addEventListener('submit', addScore);