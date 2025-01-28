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
    return response.text();
  })
  .then(datos => {
    // Creamos una instancia del parser
    const parser = new DOMParser();

    // Parseamos la cadena con su debido formato
    const xmlDoc = parser.parseFromString(datos, 'text/html');
    let categorias = xmlDoc.getElementsByTagName('categoria');

    for (let i = 0; i < categorias.length; i++) {
      // Obtenemos los datos de cada categoría
      let nombreCategoria = categorias[i].getElementsByTagName('nombre')[0].textContent;
      let idCategoria = categorias[i].getAttributeNode('id').textContent;

      // Y los imprimimos
      console.log(`ID: ${idCategoria}, Nombre: ${nombreCategoria}`);
    }
  })
  .catch(error => {
    console.error('Ha ocurrido un error: ', error);
  });




// TODO Combinar info
//for (let i = 0; i < listadoCategorias.length; i++) {}



// Generamos la tabla
let tabla = document.createElement('table');
let cabecera = document.createElement('thead');
let cuerpo = document.createElement('tbody');

function makeTable() {
  // id_producto, nombre, categoria serán las cabeceras
  listadoProductos.forEach(producto => {
    let td = document.createElement('td');
    td.textContent = producto;

    // TODO
  });
}




// Para ordenar por las cabeceras añadir un .addEventListener() a cada cabecera
// que genere de nuevo la tabla a partir de un array ordenado por dicha cabecera