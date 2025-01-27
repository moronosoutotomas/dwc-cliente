// Uso básico de DOMParser

const xmlString = `
      <catalog>
        <book id="1">
          <title>Aprendiendo JavaScript</title>
          <author>Juan Pérez</author>
        </book>
        <book id="2">
          <title>Profundizando en XML</title>
          <author>María García</author>
        </book>
      </catalog>
      `;

// Creamos una instancia de DOMParser
const parser = new DOMParser();

// Parseamos la cadena con el formato 'application/xml' o 'text/xml'
const xmlDoc = parser.parseFromString(xmlString, 'text/html');

// Ahora xmlDoc es un documento DOM con nodos accesibles
const catalog = xmlDoc.getElementsByTagName('catalog')[0];
const books = catalog.getElementsByTagName('book');

for (let i = 0; i < books.length; i++) {
  const title = books[i].getElementsByTagName('title')[0].textContent;
  const author = books[i].getElementsByTagName('author')[0].textContent;
  console.log(`Libro: ${i + 1}, de ${author}`);
}

/*

• Se utiliza parseFromString, indicando el tipo de contenido.

• El resultado es un documento DOM con métodos como
getElementsByTagName(), querySelectorAll(), etc.

• De esta forma, podemos recorrer el árbol XML y obtener la información
de cada elemento.

*/

// Conversión inversa con XMLSerializer

const serializer = new XMLSerializer();
const nuevoXMLString = serializer.serializeToString(xmlDoc);
console.log(nuevoXMLString);