// Test examen JS

// Handler para ver los resultados en Farenheit
document
	.getElementById('quieroFarenheits')
	.addEventListener('mouseover', calcDataFar);

// Handler para ver los resultados en Celsius
document
	.getElementById('quieroCelsius')
	.addEventListener('mouseover', calcDataCel);

const input = document.getElementById('input').value;
const kelvin = 273.15;

let celsius = 0;
let farenheit = 0;

// Fn que convierte un dato numérico parametrizado a grados Celsius
function aCelsius(kelvins) {
	return Math.round(kelvins - kelvin);
}

// Fn que convierte un dato numérico parametrizado a grados Farenheit
function aFarenheit(kelvins) {
	return Math.round(1.8 * (kelvins - kelvin) + 32);
}

// Metemos los valores en un array y eliminamos los espacios
const arrayInput = input.split(',').map(x => x.trim());

// Fn que convierte cada uno de los datos a Farenheit
function calcDataFar() {
	document.getElementById('output').innerHTML = '';

	let far = arrayInput.map(x => aFarenheit(x));
	let resultado = document.createTextNode(far);
	let parrafo = document.createElement('p');
	parrafo.appendChild(resultado);
	document.getElementById('output').appendChild(parrafo);
}

// Fn que convierte cada uno de los datos a Celsius
function calcDataCel() {
	document.getElementById('output').innerHTML = '';

	let cel = arrayInput.map(x => aCelsius(x));
	let resultado = document.createTextNode(cel);
	let parrafo = document.createElement('p');
	parrafo.appendChild(resultado);
	document.getElementById('output').appendChild(parrafo);
}
