// Fetch con async/await

async function obtenerDatos() {
  try {
    const response = await fetch('la url de turno');
    if (!response.ok) {
      throw new Error('Error en la respuesta: ' + response.status);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Ha ocurrido un error: ', error);
  }
}
obtenerDatos();

/*

• async se declara en la función que va a utilizar
await.

• await “pausa” la ejecución hasta que la promesa se resuelva, evitando
la necesidad de múltiples .then.
Buenas prácticas al trabajar con JSON

• Validar siempre que las respuestas del servidor sean correctas, tanto
por código de estado (status) como por el contenido retornado.

• Estructurar el JSON de manera clara y limpia para facilitar la lectura y
el mantenimiento del código.

• Manejar adecuadamente los errores (por ejemplo, si el JSON no está
bien formado o si la petición no devuelve lo esperado).

• Usar HTTPS en la medida de lo posible para proteger la transferencia
de datos.

*/