onmessage = function (event) {
  const datos = event.data; // Array numérico

  // Calculamos la media, el valor mínimo y el valor máximo
  // (Aquí podríamos realizar otros cálculos más complejos)
  let suma = 0;
  let min = Number.MAX_VALUE;
  let max = -Number.MAX_VALUE;

  for (let i = 0; i < datos.length; i++) {
    const valor = datos[i];
    suma += valor;
    if (valor < min) min = valor;
    if (valor > max) max = valor;
  }

  const media = suma / datos.length;

  // Enviamos los resultados al hilo principal
  postMessage({ media, min, max });
};