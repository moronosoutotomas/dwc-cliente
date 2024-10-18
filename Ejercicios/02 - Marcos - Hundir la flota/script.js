// Tablero de 8x8 con algunos barcos ocultos (1 indica la presencia de un barco, 0 es agua)
const tablero = [
    [0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 0, 0, 0]
];

let aciertos = 0; // Contador de aciertos
const totalBarcos = contarBarcos(); // Número total de barcos (1s) en el tablero

// Función para contar el número total de barcos (1s) en el tablero
function contarBarcos() {
    let contador = 0;
    for (let i = 0; i < tablero.length; i++) {
        for (let j = 0; j < tablero[i].length; j++) {
            if (tablero[i][j] === 1) {
                contador++;
            }
        }
    }
    return contador;
}

// Función para crear el tablero visible en la página con cabeceras sin usar createElement ni appendChild
function crearTablero() {
    let tablaHTML = '<tr><th>X / Y</th>';
    
    // Crear cabecera de columnas (0-7)
    for (let i = 0; i < 8; i++) {
        tablaHTML += `<th>${i}</th>`;
    }
    tablaHTML += '</tr>';

    // Crear las filas con cabecera de filas (0-7) y celdas
    for (let i = 0; i < 8; i++) {
        tablaHTML += `<tr><th>${i}</th>`;
        for (let j = 0; j < 8; j++) {
            tablaHTML += `<td id="${i}-${j}" onclick="disparar(${i}, ${j})"></td>`;
        }
        tablaHTML += '</tr>';
    }

    // Asignar el HTML generado a la tabla en el DOM
    document.getElementById('tablero').innerHTML = tablaHTML;
}

// Función para manejar los disparos al hacer clic en las celdas
function disparar(x, y) {
    const textoResultado = document.getElementById('resultado');
    const celda = document.getElementById(`${x}-${y}`);

    // Verificar si la celda ya ha sido disparada
    if (celda.innerText !== '') {
        textoResultado.textContent = 'Ya has disparado en esta posición.';
        return;
    }

    // Validar que las coordenadas estén dentro de los límites
    if (x >= 0 && x <= 7 && y >= 0 && y <= 7) {
        if (tablero[x][y] === 1) {
            // Acierto: Cambiar estilo de la celda manualmente
            celda.style.backgroundColor = 'red';
            celda.style.color = 'white';
            celda.innerText = 'X';
            aciertos++; // Incrementar el contador de aciertos
            textoResultado.textContent = '¡Has acertado!';
        } else {
            // Fallo: Cambiar estilo de la celda manualmente
            celda.style.backgroundColor = 'lightgray';
            celda.style.color = 'black';
            celda.innerText = 'O';
            textoResultado.textContent = 'Has fallado.';
        }
    } else {
        textoResultado.textContent = 'Coordenadas fuera de rango. Inténtalo de nuevo.';
    }

    // Verificar si el jugador ha hundido todos los barcos
    if (aciertos === totalBarcos) {
        textoResultado.textContent = '¡Felicidades! Has hundido todos los barcos. La partida ha terminado.';
        desactivarTablero();
    }
}

// Función para disparar usando las coordenadas ingresadas en los inputs
function dispararConCoordenadas() {
    const x = parseInt(document.getElementById('coord-x').value);
    const y = parseInt(document.getElementById('coord-y').value);
    
    disparar(x, y); // Llama a la función disparar con las coordenadas ingresadas
}

// Función para desactivar el tablero una vez finalizada la partida
function desactivarTablero() {
    const celdas = document.querySelectorAll('td');
    celdas.forEach(celda => {
        celda.onclick = null; // Desactivar clic en las celdas
    });
}

// Inicializar el tablero
crearTablero();
