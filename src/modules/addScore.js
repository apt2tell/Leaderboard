// AddScore function
const addScore = async (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  const inputData = {
    user: name.trim(),
    score,
  };
  const dataToPost = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(inputData),
  };
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/YDw2f6DbBPDc4QzVfPXs/scores/', dataToPost);
  document.getElementById('form').reset();
};

export default addScore;