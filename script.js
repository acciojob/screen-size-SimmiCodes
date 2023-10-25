
function getWindowSize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  return { width, height };
}


function updateWindowSize() {
  const windowSize = getWindowSize();
  document.getElementById("width").textContent = `Width: ${windowSize.width}px`;
  document.getElementById("height").textContent = `Height: ${windowSize.height}px`;
}


window.addEventListener("resize", updateWindowSize);


updateWindowSize();
