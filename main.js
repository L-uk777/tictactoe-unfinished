const cells = document.querySelectorAll(".cell");
const resetButton = document.querySelector(".reset");
let xIsNext = true;

for (const cell of cells) {
  cell.addEventListener("click", click);
}

resetButton.addEventListener("click", resetGame);

function click(e) {
  const cell = e.target;
  const xOro = xIsNext ? "x" : "o";
  cell.innerHTML = xOro;
  cell.classList.add(xOro);
  cell.removeEventListener("click", click);
  xIsNext = !xIsNext;
}

function resetGame() {
  for (const cell of cells) {
    cell.innerHTML = "";
    cell.className = "cell";
    cell.addEventListener("click", click);
  }
  xIsNext = true;
}



