const workerDespedida = new Worker('ww-despedida.js');

onmessage = function (event) {
  workerDespedida.postMessage(`${event.data}\nPasando por el worker que pregunta... Todo bien?' `);
  console.log(event.data);
}