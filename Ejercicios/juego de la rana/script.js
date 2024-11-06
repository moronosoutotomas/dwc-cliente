// variables
const rana = document.getElementById('rana');
const puntuacion = document.getElementById('puntuacion');
let punt_inicial = 0;
let max_saltos = 20;
let saltosRestantes = document.getElementById('saltosRestantes'); // desde 20
let tiempoSalto = 2000; // en milisegundos

// escuchadores
rana.onclick = updateMarcador();
rana.onmouseover = () => {
  rana.style.cursor = 'pointer';
};

// la rana salta, se encoge y la puntuacion aumenta
function salto() {

  tiempoSalto /= 4;
  rana.width -= 20;
  rana.height -= 20;

  let x = Math.round(Math.random() * 1000);
  let y = Math.round(Math.random() * 1000);


}

// actualiza el marcador
function updateMarcador() {
  puntuacion.innerText = punt_inicial;
  saltosRestantes.innerText = max_saltos;

  punt_inicial++;
  max_saltos++;
}

setInterval(salto, tiempoSalto);