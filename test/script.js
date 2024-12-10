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
	return (kelvins - kelvin).toFixed(2);
}

// Fn que convierte un dato numérico parametrizado a grados Farenheit
function aFarenheit(kelvins) {
	return (1.8 * (kelvins - kelvin) + 32).toFixed(2);
}

// Metemos los valores en un array y eliminamos los espacios
const arrayInput = input.split(',').map(x => x.trim());

// Fn que convierte cada uno de los datos a Farenheit
function calcDataFar() {
	const output = document.getElementById('output');
	output.innerHTML = '';

	let far = arrayInput.map(x => aFarenheit(x));

	// Ordenamos en caso de que esté el checkbox marcado
	if (document.getElementById('orden').checked) {
		far.sort((a, b) => {
			return a - b;
		});
	}

	// Metemos cada posición del array en un párrafo independiente para
	// poder aplicarle el estilo requerido
	far.forEach(element => {
		let color = '';
		let bgColor = 'white';
		let resultado = document.createTextNode(element);
		let span = document.createElement('span');
		span.appendChild(resultado);

		// En caso de que se haya seleccionado el modo "alto contraste"
		// mostraremos los resultados en ese modo, por defecto se verá
		// en modo coloreado.
		if (
			document.querySelector('input[name="radio"]:checked').value ==
			'alto-contraste'
		) {
			color = 'white';
			bgColor = 'black';
		} else {
			if (element < 0) {
				color = 'purple';
			} else if (element < 100) {
				color = 'blue';
			} else if (element < 200) {
				color = 'green';
			} else if (element < 300) {
				color = 'yellow';
			} else if (element < 400) {
				color = 'orange';
			} else {
				color = 'red';
			}
		}

		span.style.padding = '.5em';
		span.style.color = color;
		output.style.backgroundColor = bgColor;

		output.appendChild(span);
	});
}

// Fn que convierte cada uno de los datos a Celsius
function calcDataCel() {
	const output = document.getElementById('output');
	output.innerHTML = '';

	let cel = arrayInput.map(x => aCelsius(x));

	// Ordenamos en caso de que esté el checkbox marcado
	if (document.getElementById('orden').checked) {
		cel.sort((a, b) => {
			return a - b;
		});
	}

	// Metemos cada posición del array en un párrafo independiente para
	// poder aplicarle el estilo requerido
	cel.forEach(element => {
		let color = '';
		let bgColor = 'white';
		let resultado = document.createTextNode(element);
		let span = document.createElement('span');
		span.appendChild(resultado);

		// En caso de que se haya seleccionado el modo "alto contraste"
		// mostraremos los resultados en ese modo, por defecto se verá
		// en modo coloreado.
		if (
			document.querySelector('input[name="radio"]:checked').value ==
			'alto-contraste'
		) {
			color = 'white';
			bgColor = 'black';
		} else {
			if (element < 0) {
				color = 'purple';
			} else if (element < 100) {
				color = 'blue';
			} else if (element < 200) {
				color = 'green';
			} else if (element < 300) {
				color = 'yellow';
			} else if (element < 400) {
				color = 'orange';
			} else {
				color = 'red';
			}
		}

		span.style.padding = '.5em';
		span.style.color = color;
		output.style.backgroundColor = bgColor;

		output.appendChild(span);
	});
}
