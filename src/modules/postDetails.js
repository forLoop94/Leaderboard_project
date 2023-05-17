export default (name, score) => {
  fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ig0zUZVxOFVzmvzfuw94/scores',
    {
      method: 'POST',
      body: JSON.stringify({
        user: name,
        score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
};
