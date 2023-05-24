// AddScore function
const addScore = async (event) => {
  event.preventDefault();
  const nameInput = document.getElementById('name');
  const scoreInput = document.getElementById('score');
  const form = document.getElementById('form');

  const inputData = {
    user: nameInput.value.trim(),
    score: scoreInput.value,
  };

  const dataToPost = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(inputData),
  };

  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/YDw2f6DbBPDc4QzVfPXs/scores/', dataToPost);
  form.reset();
};

export default addScore;