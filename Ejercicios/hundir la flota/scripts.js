
/**
 * Función que genera el tablero con barcos de 1x1 predefinidos.
 */
function mostrarTabla() {
  const tablero = [
    [0, 1, 0, 0, 0, 1, 0, 1],
    [0, 1, 0, 0, 0, 1, 0, 1],
    [0, 1, 0, 0, 0, 1, 0, 1],
    [0, 1, 0, 0, 0, 1, 0, 1],
    [0, 1, 0, 0, 0, 1, 0, 1],
    [0, 1, 0, 0, 0, 1, 0, 1],
    [0, 1, 0, 0, 0, 1, 0, 1],
    [0, 1, 0, 0, 0, 1, 0, 1],
  ];

  // Variables a usar
  let tabla = document.createElement('table');
  let fila = document.createElement('tr');
  let celda = document.createElement('td');
  let contenidoCelda;

  // Nice try bro xD
  // tablero.forEach(y => {
  //   y.forEach(x => {
  //     contenidoCelda = x;
  //     celda.appendChild(contenidoCelda);
  //     fila.appendChild(celda);
  //   });
  //   tabla.appendChild(fila);
  // });

  for (let i = 0; tablero.length; i++) {
    for (let j = 0; tablero[i].length; j++) {
      contenidoCelda = document.createTextNode(tablero[i][j]);
      celda.appendChild(contenidoCelda);
      fila.appendChild(celda);
    }
    tabla.appendChild(fila);
  }

  document.getElementById('resultado').appendChild(tabla);
}