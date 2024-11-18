// 'use strict'

// function areaCuadrado(lado) {
//   return Math.pow(lado, 2);
// }

// function areaTriangulo(b, h) {
//   return (b * h) / 2;
// }

// function areaCircunferencia(r) {
//   return Math.PI * Math.pow(r, 2);
// }


function areaCuadrado() {
  let l = document.getElementById("ladoCuadrado").value;
  let res = document.getElementById("resultadoAreaCuadrado");
  res.innerHTML = "Área del cuadrado: " + Math.pow(l, 2);
}

function areaTriangulo() {
  let b = document.getElementById("baseTriangulo").value;
  let h = document.getElementById("alturaTriangulo").value;

  let res = document.getElementById("resultadoAreaTriangulo");
  res.innerHTML = "Área del triángulo: " + (b * h) / 2;
}

function areaCircunferencia() {
  let r = document.getElementById("radioCircunferencia").value;
  let res = document.getElementById("resultadoAreaCircunferencia");
  res.innerHTML = "Área de la circunferencia: " + (Math.PI * Math.pow(r, 2)).toFixed(2);
}