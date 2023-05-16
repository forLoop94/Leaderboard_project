const display = document.querySelector('.display-section');

export default () => {
  const arr = JSON.parse(localStorage.getItem('leaderboard'));
  display.textContent = '';

  arr.forEach((obj, key) => {
    const detailsContainer = document.createElement('div');
    detailsContainer.className = 'details-container';
    if (key % 2 === 0) {
      detailsContainer.innerHTML = `<div>${obj.name}: ${obj.score}</div>`;
      detailsContainer.style.backgroundColor = 'rgb(240, 240, 240';
    } else {
      detailsContainer.innerHTML = `<div>${obj.name}: ${obj.score}</div>`;
      detailsContainer.style.backgroundColor = 'white';
    }
    display.appendChild(detailsContainer);
  });
};