const canvasRatio =
  parseInt(canvas.style.height, 10) / parseInt(canvas.style.width, 10);

window.addEventListener("resize", setCanvasSize);

function setCanvasSize() {
  const maxWidth = 1024;
  const sizeMultiplier = 0.95;
  if (window.innerWidth * sizeMultiplier <= maxWidth) {
    canvas.style.width = window.innerWidth * sizeMultiplier + "px";
    canvas.style.height =
      window.innerWidth * sizeMultiplier * canvasRatio + "px";
  } else {
    canvas.style.width = maxWidth + "px";
    canvas.style.height = maxWidth * canvasRatio + "px";
  }
}

setCanvasSize();
