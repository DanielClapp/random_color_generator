const button = document.querySelector('#color');

function changeColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const newColor = `rgb(${r}, ${g}, ${b})`;
  document.body.style.backgroundColor = newColor;
}

button.addEventListener('click', changeColor);
