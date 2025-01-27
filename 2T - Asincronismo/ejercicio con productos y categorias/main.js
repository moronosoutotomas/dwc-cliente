/*
Crear un archivo JavaScript (main.js) que obtenga los datos JSON y XML y que
combine la información:

• Por cada producto, buscar la categoría correspondiente en el XML.

• Crear de forma dinámica una tabla (o la estructura HTML que se considere,
aunque se recomienda tabla) mostrando el nombre del producto y el
nombre de la categoría.

• Generar la tabla dinámicamente.

• Cada elemento de cabecera permitirá ordenar la tabla por dicho elemento.
*/


// Obtener datos JSON
let listadoProductos = [];

fetch('productos.json')
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
    listadoProductos = data;

    //console.log(listadoProductos);
  })
  .catch(error => {
    // Manejamos cualquier error durante la petición
    console.error('Ha ocurrido un error: ', error);
  });



// Obtener datos XML
let listadoCategorias = [];

fetch('categorias.xml')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la respuesta: ' + response.status);
    }
    // Creamos una instancia del parser
    const parser = new DOMParser();

    // Parseamos la cadena con su debido formato
    const xmlDoc = parser.parseFromString(response, 'text/html');

    //console.log(xmlDoc);
  })
  .then(data => {
    listadoProductos = data;
  })
  .catch(error => {
    console.error('Ha ocurrido un error: ', error);
  });


// Combinar info
for (let i = 0; i < listadoCategorias.length; i++) {

}