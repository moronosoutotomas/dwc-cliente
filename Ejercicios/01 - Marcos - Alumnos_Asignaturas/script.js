let notasArray = []; // Array global para las notas

function procesarListas() {
    // Obtener los valores de los campos de entrada
    const asignaturasInput = document.getElementById("asignaturas").value;
    const alumnosInput = document.getElementById("alumnos").value;
    
    // Dividir las cadenas en arrays quitando los posibles espacios en blanco a cada elemento
    const asignaturasArray = asignaturasInput.split(",").map(item => item.trim());
    const alumnosArray = alumnosInput.split(",").map(item => item.trim());

    // Limpiar el array de notas
    notasArray = [];

    // Crear array bidimensional de notas con una nota aleatora para cada alumno
    // en cada asignatura
    alumnosArray.forEach(alumno => {
        const notasAlumno = asignaturasArray.map(() => (Math.random() * 10).toFixed(2));
        notasArray.push({ alumno, notas: notasAlumno });
    });

    // Alerta de éxito al procesar las listas
    alert("Listas procesadas correctamente. Haz clic en 'Mostrar Notas' para ver la tabla.");
}



function calcularMediaNotas(notas) {
    const suma = notas.reduce((acc, nota) => acc + parseFloat(nota), 0);
    return (suma / notas.length).toFixed(2);
}

function determinarClaseNota(nota) {
    // Determina la clase CSS en función de la nota
    if (nota < 3) {
        return "nota-baja";
    } else if (nota >= 3 && nota < 5) {
        return "nota-media";
    } else {
        return "nota-alta";
    }
}

function mostrarTablaNotas() {
    // Obtener los valores de los campos de entrada
    const asignaturasInput = document.getElementById("asignaturas").value;
    const asignaturasArray = asignaturasInput.split(",").map(item => item.trim());

    let sumaTotal = 0;
    let totalNotas = 0;

    // Crear tabla HTML para mostrar el array bidimensional
    let resultadoHTML = "<table><tr><th>Alumno</th>";

    // Encabezado de la tabla con las asignaturas
    asignaturasArray.forEach(asignatura => {
        resultadoHTML += `<th>${asignatura}</th>`;
    });
    resultadoHTML += `<th>Media Alumno</th></tr>`;

    // Añadir las notas de cada alumno a la tabla y calcular la media por alumno
    notasArray.forEach((item) => {
        resultadoHTML += `<tr>`;
        resultadoHTML += `<td>${item.alumno}</td>`;
        let mediaAlumno = calcularMediaNotas(item.notas);
        let sumaAlumno = 0;

        item.notas.forEach(nota => {
            const claseNota = determinarClaseNota(parseFloat(nota));
            resultadoHTML += `<td class="${claseNota}">${nota}</td>`;
            sumaAlumno += parseFloat(nota);
        });

        // Añadir la media de cada alumno
        resultadoHTML += `<td class="media">${mediaAlumno}</td>`;
        resultadoHTML += "</tr>";

        // Sumar para la media total
        sumaTotal += sumaAlumno;
        totalNotas += item.notas.length;
    });

    // Calcular y añadir la media por asignatura
    resultadoHTML += `<tr><td><strong>Media Asignatura</strong></td>`;
    asignaturasArray.forEach((_, asignaturaIndex) => {
        const notasAsignatura = notasArray.map(item => item.notas[asignaturaIndex]);
        const mediaAsignatura = calcularMediaNotas(notasAsignatura);
        resultadoHTML += `<td class="media">${mediaAsignatura}</td>`;
    });

    // Calcular la media total
    const mediaTotal = (sumaTotal / totalNotas).toFixed(2);
    
    // Añadir la celda de media total
    resultadoHTML += `<td class="media"><strong>Media Total: ${mediaTotal}</strong></td></tr>`;

    resultadoHTML += "</table>";
    document.getElementById("resultado").innerHTML = resultadoHTML;
}
