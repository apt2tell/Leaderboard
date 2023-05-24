// Post New Game to Leaderboard Api
const postNewGame = async (url, data) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application.json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error('Network response not Ok');
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

postNewGame('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', { name: 'streakers' })
  .then((data) => data)
  .catch((error) => {
    throw error;
  });

export default postNewGame;