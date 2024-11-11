// variables
const image = document.getElementById('image');
let coordsImageX;
let coordsImageY;

// eventos
image.ondragend = (e) => {
  e.preventDefault();

  coordsImageX = e.clientX - 100;
  coordsImageY = e.clientY - 100;

  image.style.top = `${coordsImageY}px`;
  image.style.left = `${coordsImageX}px`;
}