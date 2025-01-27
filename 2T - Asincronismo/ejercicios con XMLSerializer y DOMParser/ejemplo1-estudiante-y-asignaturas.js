// Ejemplo 1: Estudiante y asignaturas que cursa

const jsonString = `
                    {
                    "nombre": "Carla",
                    "edad": 22,
                    "matriculada": true,
                    "asignaturas": ["Programación", "Bases de Datos", "Entornos
                    de Desarrollo"]
                    }
                  `;

// Parseamos la cadena para convertirla en un objeto JS
const estudiante = JSON.parse(jsonString);
console.log(estudiante.nombre); // "Carla"
console.log(estudiante.asignaturas); // "Programación"

const xmlString = `
                    <estudiante>
                      <nombre>Carla</nombre>
                      <edad>22</edad>
                      <matriculada>true</matriculada>
                      <asignaturas>
                        <asignatura>Programación</asignatura>
                        <asignatura>Bases de Datos</asignatura>
                        <asignatura>Entornos de Desarrollo</asignatura>
                      </asignaturas>
                    </estudiante>
                  `;

// Creación de un DOMParser
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, 'text/html');

// Acceso al contenido
const nombre = xmlDoc.getElementsByTagName('nombre')[0].textContent;
const edad = xmlDoc.getElementsByTagName('edad')[0].textContent;
const matriculada = xmlDoc.getElementsByTagName('matriculada').textContent;

// Para el array de asignaturas
const asignaturas = xmlDoc.getElementsByTagName('asignaturas');
console.log('Nombre: ', nombre); // "Carla"
console.log('Edad: ', edad); // "22"
console.log('Matriculada: ', matriculada); // "true"

for (let i = 0; i < asignaturas.length; i++) {
  console.log(`Asignatura ${i + 1}: `, asignaturas[i].textContent); // Mostrará cada asignatura iterativamente
}