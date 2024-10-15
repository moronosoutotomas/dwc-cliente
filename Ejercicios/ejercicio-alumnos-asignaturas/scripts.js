var notasArray = [];

/**
 * Procesa y realiza todos los cálculos
 * @returns alert()
 */
function procesarListas() {
  // Recogemos el input
  let alumnos = document.getElementById('alumnos').value;
  let asignaturas = document.getElementById('asignaturas').value;

  // Lo dividimos en arrays filtrando las comas y los espacios con split() y trim()
  let alumnosArray = alumnos.split(',').map(item => item.trim());
  let asignaturasArray = asignaturas.split(',').map(item => item.trim());

  // Limpiamos el array
  notasArray = [];

  // Creamos el array bidimensional de notas
  alumnosArray.forEach(alumno => {
    notasAlumno = asignaturasArray.map(() => (Math.random() * 10).toFixed(2));
    notasArray.push({ alumno, notas: alumno });
  });

  // Check procesamiento correcto
  alert(
    "Procesamiento correcto, pulse en 'Mostrar tabla' para visualizar la tabla"
  );
}

function calcularMedias(notas) {
  suma = notas.reduce((acc, nota) => acc + parseFloat(nota), 0);
  return (suma / notas.length).toFixed(2);
}

/**
 * Muestra el resultado del procesamiento
 */
function mostrarTabla() {

  // datos
  let alumnos = document.getElementById('alumnos').value;
  let asignaturas = document.getElementById('asignaturas').value;

  // donde printear
  let resultado = document.getElementById('resultado').innerHTML;
  let tabla = document.createElement('table');

  // le añadimos el título a mano para evitar líos
  document.getElementById('resultado').innerHTML = '<hr><h4>Resultados</h4>';

  // arrays de alumnos y asignaturas
  let asignaturasArray = asignaturas.split(',').map(item => item.trim());
  let alumnosArray = alumnos.split(',').map(item => item.trim());

  // recorrido de alumnos (eje Y)
  for (let i = 0; i < alumnosArray.length; i++) {
    const hilera = document.createElement('tr');

    // recorrido de asignaturas (eje X)
    for (let j = 0; j < asignaturasArray.length; j++) {
      var celda = document.createElement('td');
      var textoCelda = document.createTextNode(Math.ceil(Math.random() * 10));
      let asignatura = document.createTextNode(asignaturasArray[j]);

      // perplejos nos hayamos
      if (i === 0) {
        if (j === 0) {
          celda.appendChild(document.createTextNode('Alumnos/Asignaturas'));
        } else {
          celda.appendChild(document.createTextNode(asignaturasArray[j - 1]));
        }
      } else {
        if (j === 0) {
          celda.appendChild(document.createTextNode(alumnosArray[i - 1]));
        } else {
          celda.appendChild(textoCelda);

          // esto no funciona
          if (textoCelda < 3) {
            celda.className = "rojo";
          }

        }
      }
      hilera.appendChild(celda);
    } // j

    tabla.appendChild(hilera);
  } // i

  // No se puede hacer document.getElementById('resultado').innerHTML += algo;
  document.getElementById('resultado').appendChild(tabla);
}
