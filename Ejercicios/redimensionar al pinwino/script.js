// variables
const cuadradito = document.getElementById('cuadradito');
const pinwino = document.getElementById('pinwino');

// listeners
cuadradito.addEventListener('mousedown', redimension);
cuadradito.removeEventListener('mouseup', redimension);

// funciones
function redimension(evento) {
  pinwino.getBoundingClientRect().right = `${evento.clientX}px`;
  pinwino.getBoundingClientRect().bottom = `${evento.clientY}px`;
  console.log(pinwino.getBoundingClientRect().bottom + evento.clientX)
}

// UTILIDADES USADAS
// https://es.javascript.info/coordinates
// https://developer.mozilla.org/es/docs/Web/API/Element/getBoundingClientRect