import './style.css';
import showScore from './modules/showScore.js';
import addScore from './modules/addScore.js';

// Render score on the board
const leaderBoard = ` <div class="recent-scores">
    <div class="scores">
        <h3 class="scores">Recent Scores</h3>
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

// EventListener on refresh
document.getElementById('refresh').addEventListener('click', showScore);

// EventListener on submit form
document.getElementById('form').addEventListener('submit', addScore);