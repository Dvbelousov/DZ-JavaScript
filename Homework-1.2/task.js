const cookie = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");

cookie.addEventListener("click", function () {
  cookie.width = ++clickerCounter.textContent % 2 ? 250 : 200;
});