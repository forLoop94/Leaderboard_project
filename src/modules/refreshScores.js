export default async () => {
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ig0zUZVxOFVzmvzfuw94/scores');

    const data = await response.json();
    data.result.sort(function(a, b){return b.score - a.score});
    return data.result;
  } catch (error) {
    return error;
  }
};