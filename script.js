const canvas = document.querySelector("#canvas");
const newGridButton = document.querySelector("#new-grid");

function createGrid(size) {
  canvas.innerHTML = "";

  const canvasSize = canvas.clientWidth;
  const squareSize = Math.floor(canvasSize / size);

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "black";
    });

    canvas.appendChild(square);
  }
}

createGrid(16);

newGridButton.addEventListener("click", () => {
  let gridSize = prompt("Enter the number of squares per side (maximum 100):");
  gridSize = Math.min(Math.max(parseInt(gridSize), 1), 100);
  createGrid(gridSize);
});
