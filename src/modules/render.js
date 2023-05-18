import refreshScores from './refreshScores.js';

const display = document.querySelector('.display-section');

export default () => {
  refreshScores().then((data) => {
    data.forEach((obj, key) => {
      const detailsContainer = document.createElement('div');
      detailsContainer.className = 'details-container';
      if (key % 2 === 0) {
        detailsContainer.innerHTML = `<i class='fa fa-user'></i><span>${obj.user}: ${obj.score}</span>`;
        detailsContainer.style.backgroundColor = '#e9f3f7';
      } else {
        detailsContainer.innerHTML = `<i class='fa fa-user'></i><span>${obj.user}: ${obj.score}</span>`;
        detailsContainer.style.backgroundColor = 'white';
      }
      display.appendChild(detailsContainer);
    });
  });
};