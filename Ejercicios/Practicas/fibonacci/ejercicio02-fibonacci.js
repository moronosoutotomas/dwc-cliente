/* 

Instrucciones Fibonacci:
1- Hallar la fórmula que genera la secuencia.
2- Establecer un límite máximo.
3- Sacar la secuencia.

*/


function fibonacciSecuence() {

  var x = 0;
  var y = 1;
  var limite = document.getElementById("inicial").value;
  var sucesion = x + ", " + y;

  for (i = 2; i < limite; i++) {
    var j = x + y;
    sucesion += ", " + j;
    x = y;
    y = j;
  }

  document.getElementById("resultadoIterativa").innerHTML = sucesion;
}

function fibonacciSecuenceRecursive(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}