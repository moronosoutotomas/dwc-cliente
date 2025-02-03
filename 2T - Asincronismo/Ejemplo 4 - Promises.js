function validarToken() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const tokenValido = Math.random() > 0.3; // 70% de probabilidad de éxito
      if (tokenValido) {
        resolve("Token válido.");
      } else {
        reject("Token inválido, no autorizado.");
      }
    }, 800);
  });
}
function solicitarDatosPrivados() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulamos obtención de datos
      resolve({ informacion: "Datos privados del usuario." });
    }, 1200);
  });
}
function procesarDatos(datos) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulamos un posible error en el procesamiento
      const procesoExitoso = Math.random() > 0.5;
      if (procesoExitoso) {
        resolve(`Datos procesados con éxito: ${JSON.stringify(datos)}`);
      } else {
        reject("Hubo un problema al procesar los datos.");
      }
    }, 1000);
  });
}
// Cadena de Promesas
validarToken()
  .then((mensajeToken) => {
    console.log(mensajeToken);
    // Si la validación fue exitosa, solicitamos datos privados
    return solicitarDatosPrivados();
  })
  .then((datosPrivados) => {
    console.log("Datos privados obtenidos:", datosPrivados);
    // Encadenamos el procesamiento de datos
    return procesarDatos(datosPrivados);
  })
  .then((resultadoProcesado) => {
    console.log(resultadoProcesado);
  })
  .catch((error) => {
    // Cualquier error que ocurra en la cadena es capturado aquí
    console.error("Ha ocurrido un error en alguna parte del proceso:", error);
  })
  .finally(() => {
    console.log("Proceso de validación y procesamiento finalizado.");
  });
