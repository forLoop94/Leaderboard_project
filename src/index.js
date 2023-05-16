import './styles.css';
import playerDetails from './modules/playerDetails.js';
import render from './modules/render.js';

let leaderboard = [];

const details = localStorage.getItem('leaderboard');
const allDetails = JSON.parse(details);
if (details) {
  leaderboard = allDetails;
}

const form = document.querySelector('form');
const nameInput = document.querySelector('.name-input');
const scoreInput = document.querySelector('.score-input');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  playerDetails(leaderboard, nameInput.value, scoreInput.value);
  render();
})

render()

