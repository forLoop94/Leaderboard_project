import './styles.css';
import render from './modules/render.js';
import postDetails from './modules/postDetails.js';

const form = document.querySelector('form');
const nameInput = document.querySelector('.name-input');
const scoreInput = document.querySelector('.score-input');
const refresh = document.querySelector('.refresh');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  postDetails(nameInput.value, scoreInput.value);
  nameInput.value = '';
  scoreInput.value = '';
});

refresh.addEventListener('click', () => {
  document.querySelector('.display-section').innerHTML = '';
  render();
});

render();
