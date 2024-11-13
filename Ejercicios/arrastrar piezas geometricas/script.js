// Variables para almacenar el desplazamiento inicial
let desplazamientoX = 0;
let desplazamientoY = 0;

// Función para iniciar el arrastre
function iniciarArrastre(evento) {
  if (evento.button !== 0) return; // Solo iniciar si el botón izquierdo está presionado

  evento.preventDefault(); // Prevenir el arrastre predeterminado del navegador

  const imagen = evento.target;

  // Obtener la posición inicial de la imagen en relación al punto de clic
  desplazamientoX = evento.pageX - (parseInt(imagen.style.left) || 0);
  desplazamientoY = evento.pageY - (parseInt(imagen.style.top) || 0);

  // Asignar los eventos de movimiento y de soltar el mouse
  imagen.onmousemove = moverImagen;
  imagen.onmouseup = detenerArrastre;

  // Mover la imagen a la posición inicial del clic
  moverImagen(evento);
}

// Función para mover la imagen
function moverImagen(evento) {
  const imagen = evento.target;

  // Si el botón izquierdo no está presionado, detener el arrastre
  if (evento.buttons !== 1) {
    detenerArrastre();
    return;
  }

  // Calcular y asignar la nueva posición
  imagen.style.left = `${evento.pageX - desplazamientoX}px`;
  imagen.style.top = `${evento.pageY - desplazamientoY}px`;
}

// Función para detener el arrastre
function detenerArrastre() {
  const imagen = document.getElementById("circulo");

  // Quitar los eventos de movimiento y de soltar el mouse
  imagen.onmousemove = null;
  imagen.onmouseup = null;
}

// Función para eliminar la figura cuando se posiciona encima de su caja
function absorberFigura(evento) {
  const cajaCirculo = document.getElementById('caja-circulo');
  const topLeftCajaCirculo = cajaCirculo.pageX;
  const bottomRightCajaCirculo = cajaCirculo.pageY;

  console.log(topLeftCajaCirculo);
  console.log(bottomRightCajaCirculo);
}

absorberFigura();