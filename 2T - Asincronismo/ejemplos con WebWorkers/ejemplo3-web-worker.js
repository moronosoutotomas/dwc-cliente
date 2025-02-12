onmessage = function (event) {
  // No podemos manipular el DOM directamente; solo podemos procesar datos.
  const datos = event.data; // Este es el array recibido
  const resultado = datos.map(num => num * 2); // Ejemplo de procesamiento

  // Buenas prácticas: intentar no devolver datos excesivamente grandes
  // si no es necesario, y coordinar la comunicación de forma eficiente.
  postMessage(resultado);
};