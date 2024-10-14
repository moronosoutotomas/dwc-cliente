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
    "Procesamiento correcto, pulse en 'mostrar listas' para visualizar la tabla"
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
  // donde printear
  let resultado = document.getElementById('resultado').innerHTML;
  let tabla = document.createElement('table');

  // arrays de alumnos y asignaturas
  let asignaturasArray = asignaturas.split(',').map(item => item.trim());
  let alumnosArray = alumnos.split(',').map(item => item.trim());

  let asigArr = asigArr.trim(asignaturas.split(','));

  // recorrido de alumnos (eje Y)
  for (let i = 0; i < alumnosArray.length; i++) {
    const hilera = document.createElement('tr');

    // recorrido de asignaturas (eje X)
    for (let j = 0; j < asignaturasArray.length; j++) {
      var celda = document.createElement('td');
      var textoCelda = document.createTextNode(j);

      celda.appendChild(textoCelda);
      hilera.appendChild(celda);
    } // j

    tabla.appendChild(hilera);
  } // i

  resultado = appendChild(tabla);
}
