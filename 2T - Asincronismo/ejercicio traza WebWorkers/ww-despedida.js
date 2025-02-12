onmessage = function (event) {
  this.postMessage(`${event.data}\nPasando por el worker que se despide... CIAO!' `);
  console.log(event.data);
}