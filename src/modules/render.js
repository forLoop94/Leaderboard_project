import refreshScores from './refreshScores.js';

const display = document.querySelector('.display-section');

export default () => {
  refreshScores().then((data) => {
    data.forEach((obj, key) => {
      const detailsContainer = document.createElement('div');
      detailsContainer.className = 'details-container';
      if (key % 2 === 0) {
        detailsContainer.innerHTML = `<div>${obj.user}: ${obj.score}</div>`;
        detailsContainer.style.backgroundColor = 'rgb(240, 240, 240';
      } else {
        detailsContainer.innerHTML = `<div>${obj.user}: ${obj.score}</div>`;
        detailsContainer.style.backgroundColor = 'white';
      }
      display.appendChild(detailsContainer);
    });
  });
};