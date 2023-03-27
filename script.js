const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector(".statusText");
const restartBtn = document.querySelector(".restartBtn");
const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let option = ["", "", "", "", "", "", "", "", ""];

let currentPlayer = "x";
let running = false;

initializeGame()

function initializeGame() {
  cells.forEach(cell => cell.addEventListener("click", cellClicked));
  restartBtn.addEventListener("click", restartGame);
  statusText.textContent = `${currentPlayer}'s turns`;
  running = true;
}
function cellClicked() {
  const cellIndex = this.getAttribute("cellIndex");
  if (option[cellIndex] != "" || !running) {
    return;
  }
  updateCell(this, cellIndex);
  changePlayer()
  checkWinner();
}
function updateCell(cell, index) {
  option[index] = currentPlayer;
  cell.textContent = currentPlayer;
}
function changePlayer() {
  currentPlayer = (currentPlayer == "x") ? "o" : "x"
  statusText.textContent = `${currentPlayer}`
}
function checkWinner() {
  
}
function restartGame() {}
