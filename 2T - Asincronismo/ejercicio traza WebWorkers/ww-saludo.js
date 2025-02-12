const workerPregunta = new Worker('ww-pregunta.js');

onmessage = function (event) {
  workerPregunta.postMessage(`${event.data}\nPasando por el worker que saluda... Hola! `);
  console.log(event.data);
}