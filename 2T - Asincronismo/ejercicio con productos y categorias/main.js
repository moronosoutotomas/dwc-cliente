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

let listadoProductos = []; // listado con los productos parseados en JSON
let listadoCategorias = []; // listado con las categorias parseadas en JSON
let productos = []; // array de productos final, con todos los datos

// Obtener datos JSON
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

		// Obtenemos las categorias del resultado parseado
		let categorias = xmlDoc.getElementsByTagName('categoria');

		for (let i = 0; i < categorias.length; i++) {
			// Obtenemos los datos de cada categoría (--verbose: bien desglosado
			// podría comprimirse eliminando ambas variables y asignando directa-
			// -mente en el objeto
			let nombreCategoria =
				categorias[i].getElementsByTagName('nombre')[0].textContent;
			let idCategoria = categorias[i].getAttributeNode('id').textContent;

			// Asignamos los datos a las categorías
			listadoCategorias[i] = {
				id: idCategoria,
				nombre: nombreCategoria,
			};
		}

		combinarDatos();
		makeTable();
	})
	.catch(error => {
		console.error('Ha ocurrido un error: ', error);
	});

// Combinamos los dos listados en 1 solo array, almacenando todas las
// propiedades adecuadamente
function combinarDatos() {
	listadoProductos.forEach(producto => {
		listadoCategorias.forEach(categoria => {
			if (producto.categoriaId == categoria.id) {
				i = {
					id: producto.id,
					nombre: producto.nombre,
					categoriaId: categoria.id,
					categoriaNombre: categoria.nombre,
				};
				productos.push(i);
			}
		});
	});
	//console.log(productos);
}

// Generamos la tabla
let container = document.getElementById('container');
let tabla = document.createElement('table');
let cabecera = document.createElement('thead');
let cuerpo = document.createElement('tbody');

function makeTable() {
	// Creamos el encabezado
	let rowHeader = document.createElement('tr');

	Object.keys(productos[0]).forEach(key => {
		let th = document.createElement('th');
		th.textContent = key;
		rowHeader.appendChild(th);
	});
	cabecera.appendChild(rowHeader);

	// Creamos la información de la tabla
	productos.forEach(producto => {
		let rowBody = document.createElement('tr');

		Object.values(producto).forEach(value => {
			let td = document.createElement('td');
			td.textContent = value;

			rowBody.appendChild(td);
		});

		cuerpo.appendChild(rowBody);
		tabla.appendChild(cabecera);
		tabla.appendChild(cuerpo);
		container.appendChild(tabla);
	});
}

// Para ordenar por las cabeceras añadir un .addEventListener() a cada cabecera
// que genere de nuevo la tabla a partir de un array ordenado por dicha cabecera
