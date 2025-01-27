// Ejemplo 2: Estructuras anidadas con objetos y arrays

const jsonString2 = `
                      {
                        "curso": "Desarrollo de Aplicaciones Web",
                        "codigo": "DAW2024",
                        "modulos": [
                          {
                            "nombre": "Lenguaje de Marcas",
                            "numHoras": 120,
                            "aprobados": [
                              { "alumno": "Lucía", "nota": 8.5 },
                              { "alumno": "Pedro", "nota": 7.0 }
                            ]
                          },
                          {
                            "nombre": "Entornos de Desarrollo",
                            "numHoras": 100,
                            "aprobados": [
                              { "alumno": "Ana", "nota": 9.0 },
                              { "alumno": "Carlos", "nota": 6.8 }
                            ]
                          }
                        ]
                      }
                    `;

const datosCurso = JSON.parse(jsonString2);
console.log('Nombre del curso:', datosCurso.curso);
console.log('Código:', datosCurso.codigo);

datosCurso.modulos.forEach((modulo, index) => {
  console.log(`\Módulo ${index + 1}:`, modulo.nombre);
  console.log(`Horas: ${modulo.numHoras}`);

  modulo.aprobados.forEach(aprobado => {
    console.log(` - Alumno: ${aprobado.alumno}, Nota: ${aprobado.nota}`);
  });
});

/*

datosCurso.modulos es un array de objetos.

• Cada objeto del array modulos tiene su propio array aprobados.

• Navegamos cada nivel con JavaScript de manera sencilla, pues JSON
se traduce “uno a uno” a la estructura interna de objetos y arrays de
JavaScript.

*/