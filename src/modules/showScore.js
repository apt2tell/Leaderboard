const showScore = async () => {
  const showUserScore = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/YDw2f6DbBPDc4QzVfPXs/scores/');
  const data = await showUserScore.json();
  const { result } = data;
  const board = document.querySelector('.board');
  board.innerHTML = '';
  result.forEach((user) => {
    board.innerHTML += `<li>${user.user} : ${user.score}</li>`;
  });
};

export default showScore;