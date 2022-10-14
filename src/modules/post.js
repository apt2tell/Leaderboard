// Post New Game to Leaderboard Api
const postNewGame = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
postNewGame('https://us-central1-js-capstone-backend.cloudfunctions.net/api', { name: 'streakers' })
  .then((data) => console.log(data));

export default postNewGame;