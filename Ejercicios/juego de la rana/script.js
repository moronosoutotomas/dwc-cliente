// variables
//const html = document.getElementsByTagName('html');
const rana = document.getElementById('rana');
const puntuacion = document.getElementById('puntuacion');
let saltosRestantes = document.getElementById('saltosRestantes'); // desde 20
let tiempoSalto = 2000; // en milisegundos

// listeners
rana.addEventListener('click', updateMarcador());
//html.addEventListener('load', startMarcador());

function puntuar() {
  // puntua al capturar la rana
}

function salto() {
  // la rana salta al capturarla
  tiempoSalto -= 250;
}

function rngCoords() {
  // genero nuevas coords aleatoriamente
}

function redimensionarRana() {
  rana.width -= 20;
  rana.height -= 20;
}

function updateMarcador() {
  puntuacion.innerText = punt_inicial++;
  saltosRestantes.innerText = max_saltos--;
}

setInterval(redimensionarRana(), tiempoSalto);