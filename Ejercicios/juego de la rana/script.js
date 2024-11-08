// variables
let punt_inicial = 0;
let max_saltos = 20;
let tiempoSalto = 1000; // en milisegundos
let tiempoRestante;
let saltosRestantes = document.getElementById('saltosRestantes'); // desde 20
const rana = document.getElementById('rana');
const puntuacion = document.getElementById('puntuacion');
const container = document.getElementById('container');
const anchoPantalla = window.innerWidth - 200;
const altoPantalla = window.innerHeight;

// TODO: revisar las variables para meter algunas cosas mas en el estado inicial del juego

// estado inicial del juego
container.width = anchoPantalla + 'px';
container.height = altoPantalla + 'px';
rana.width = 300;
rana.height = 300;
puntuacion.innerHTML = punt_inicial;
saltosRestantes.innerHTML = max_saltos;

// fin del juego
function endgame() {
  if (punt_inicial >= 20) {
    alert('ENHORABUENA!!!\nHAS GANADO!!!');
    clearInterval(sr);
    clearInterval(eg);
  }

  if (tiempoRestante > 20000 && punt_inicial < 20) {
    alert('Has perdido\nMucha suerte la próxima vez!');
    clearInterval(sr);
    clearInterval(eg);
  }
}

// actualiza el marcador
rana.onclick = function updateMarcador() {
  punt_inicial++;
  puntuacion.innerHTML = punt_inicial;
};

// la rana salta, se encoge y la puntuacion aumenta
function salto() {
  tiempoSalto -= 50;
  tiempoRestante += tiempoSalto;
  rana.width -= 20;
  rana.height -= 20;

  let salir = false;

  do {
    let x = Math.round(Math.random() * 1000);
    let y = Math.round(Math.random() * 1000);

    if (x < anchoPantalla && y < altoPantalla) {
      rana.style.top = `${y}px`;
      rana.style.left = `${x}px`;
    }
  } while (salir);
}

let sr = setInterval(salto, tiempoSalto); // salto de la rana cada 2s
let eg = setInterval(endgame, tiempoSalto); // check de puntuacion y tiempo

// cambio del ratón on hover
rana.onmouseover = () => {
  rana.style.cursor = 'pointer';
};
