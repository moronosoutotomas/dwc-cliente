// Etructura básica de una petición con fetch

fetch('la url de turno')
  .then(response => {
    // Comprobamos si la respuesta es correcta
    if (!response.ok) {
      throw new Error('Error en la respuesta: ' + response.status);
    }
    // Parseamos la respuesta a JSON
    return response.json();
  })
  .then(data => {
    // Aqui manejamos el objeto JS resultante
    console.log(data);
  })
  .catch(error => {
    // Manejamos cualquier error durante la petición
    console.error('Hubo un error: ', error);
  });

/*

Primero, llamamos a fetch con la URL o endpoint que queramos.

• Después, la promesa resultante contiene un objeto Response que
necesitamos verificar con response.ok.

• A continuación, utilizamos el método response.json() para convertir
la respuesta a un objeto JavaScript (antes era una cadena).

• Una vez que tenemos el objeto, podemos trabajar con él directamente,
por ejemplo, para mostrar datos en una página o para procesarlos de la
forma que necesitemos.

*/