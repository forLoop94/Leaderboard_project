export default (arr, name, score) => {
  function Detail(name, score) {
    this.name = name;
    this.score = score;
  }

  const newdetail = new Detail(name, score);
  arr.push(newdetail);

  localStorage.setItem('leaderboard', JSON.stringify(arr));
};