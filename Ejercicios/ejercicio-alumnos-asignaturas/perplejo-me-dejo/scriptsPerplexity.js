let notas = [];
let asignaturas = [];
let alumnos = [];

document.getElementById('notasForm').addEventListener('submit', function (e) {
  e.preventDefault();
  asignaturas = document
    .getElementById('asignaturas')
    .value.split(',')
    .map(a => a.trim());
  alumnos = document
    .getElementById('alumnos')
    .value.split(',')
    .map(a => a.trim());
  generarNotas();
  document.getElementById('mostrarTabla').style.display = 'block';
});

document.getElementById('mostrarTabla').addEventListener('click', mostrarTabla);

function generarNotas() {
  notas = alumnos.map(() =>
    asignaturas.map(() => Number((Math.random() * 10).toFixed(2)))
  );
}

function getColorClass(nota) {
  if (nota < 3) return 'nota-roja';
  if (nota < 5) return 'nota-amarilla';
  return 'nota-negra';
}

function mostrarTabla() {
  let tabla =
    '<table><tr><th>Alumno</th>' +
    asignaturas.map(a => `<th>${a}</th>`).join('') +
    '<th>Media</th></tr>';

  notas.forEach((alumnoNotas, i) => {
    let media = alumnoNotas.reduce((a, b) => a + b) / alumnoNotas.length;
    tabla +=
      `<tr><td>${alumnos[i]}</td>` +
      alumnoNotas
        .map(n => `<td class="${getColorClass(n)}">${n.toFixed(2)}</td>`)
        .join('') +
      `<td class="media-alumno">${media.toFixed(2)}</td></tr>`;
  });

  let mediasAsignaturas = asignaturas.map(
    (_, i) =>
      notas.reduce((sum, alumnoNotas) => sum + alumnoNotas[i], 0) /
      alumnos.length
  );

  tabla +=
    '<tr><td><strong>Media Asignatura</strong></td>' +
    mediasAsignaturas
      .map(m => `<td class="media-asignatura">${m.toFixed(2)}</td>`)
      .join('') +
    '<td></td></tr></table>';

  document.getElementById('resultados').innerHTML = tabla;
}
