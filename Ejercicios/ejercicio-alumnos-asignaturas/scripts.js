var notasArray = [];

function procesarListas() {
  // Recogemos el input
  let alumnos = document.getElementById('alumnos').value;
  let asignaturas = document.getElementById('asignaturas').value;

  // Lo dividimos en arrays filtrando las comas y los espacios con split() y trim()
  let alumnosArray = alumnos.split(",").map(item => item.trim());
  let asignaturasArray = asignaturas.split(",").map(item => item.trim());

  // Limpiamos el array
  notasArray = [];

  // Creamos el array bidimensional de notas
  alumnosArray.forEach(alumno => {
    notasAlumno = asignaturasArray.map(() => (Math.random() * 10).toFixed(2));
    notasArray.push({ alumno, notas: alumno });
  });

  // Check procesamiento correcto
  alert("Procesamiento correcto, pulse en 'mostrar listas' para visualizar la tabla");
}

function calcularMedias(notas) {
  suma = notas.reduce((acc, nota) => acc + parseFloat(nota), 0);
  return (suma / notas.length).toFixed(2);
}

function mostrarTabla() {

}
