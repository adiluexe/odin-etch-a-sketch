const canvas = document.querySelector("#canvas");
const gridSizeSlider = document.querySelector("#grid-size-slider");
const gridSizeDisplay = document.querySelector("#grid-size-display");

function createGrid(size) {
  canvas.innerHTML = "";

  const canvasSize = canvas.clientWidth;
  const squareSize = canvasSize / size;

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

gridSizeSlider.addEventListener("input", () => {
  const gridSize = gridSizeSlider.value;
  gridSizeDisplay.textContent = `${gridSize} x ${gridSize}`;
  createGrid(gridSize);
});
