export default async () => {
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ig0zUZVxOFVzmvzfuw94/scores');

    const data = await response.json();
    return data.result;
  } catch (error) {
    return error;
  }
};