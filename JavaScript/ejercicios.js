//!Numero mayor y numero menor o iguales
/*
do {
  var numeroUno = Number(prompt("Ingresa un numero:"));
  var numeroDos = Number(prompt("Ingresa el segundo numero"));
  var tipoNumeroUno = typeof numeroUno;
} while (
  numeroUno <= 0 ||
  numeroDos <= 0 ||
  isNaN(numeroUno) ||
  isNaN(numeroDos)
);

if (numeroUno < numeroDos) {
  console.log(
    `El numero ${numeroUno} es el menor y el numero ${numeroDos} es el mayor`
  );
} else if (numeroDos < numeroUno) {
  console.log(
    `El numero ${numeroDos} es el menor y el numero ${numeroUno} es el mayor`
  );
} else if (numeroDos == numeroUno) {
  console.log(`El numero ${numeroDos} y el numero ${numeroDos} son iguales`);
} else {
  console.log("Ingresa un valor correcto");
}
*/
//!Mostar la suma y la media de los numeros introducidos hasata introducur un numero negativo
/*
var sumatoria = 0;
var contador = 0;
var media = 0;
do {
  var numero = Number(prompt("Ingresa un numero hasta que sea negativo"));
  if (numero < 0) {
    break;
  }
  sumatoria += numero;
  contador++;
  media = sumatoria / contador;
  console.log(sumatoria);
  console.log(contador);
} while (numero >= 0);
console.log(`La media es ${media}`);
*/
//!Mostrar los numeros entre dos numeros introducidos por el usuario
/*
var numeroInicial = Number(prompt("Ingresa un numero"));
var numeroFinal = Number(prompt("Ingresa otro numero"));

document.write(
  `<h1>Los numeros entre ${numeroInicial} y ${numeroFinal} son:</h1> <br>`
);
for (let index = numeroInicial + 1; index < numeroFinal; index++) {
  document.write(index + "<br>");
}
*/
//!Mostar los numeros IMPARES entre dos numeros introducidos por el usuario
/*
var numeroInicial = Number(prompt("Ingresa un numero"));
var numeroFinal = Number(prompt("Ingresa otro numero"));

document.write(
  `<h1>Los numeros IMPARES entre ${numeroInicial} y ${numeroFinal} son:</h1> <br>`
);
for (let index = numeroInicial + 1; index < numeroFinal; index++) {
  let resultado = index % 2;
  if (resultado == 1) {
    document.write(index + "<br>");
  }
}
*/

//!Mostrar todos los numeros divisores de un numero introducido
/*
var numero = Number(prompt("Ingresa un numero"));
document.write(`<h1>Los numeros DIVISORES de ${numero} son:</h1> <br>`);

for (let index = 1; index <= numero; index++) {
  if (numero % index == 0) {
    document.write(index + "<br>");
  }
}
*/
//!Mostrar si un numero es par o impar
/*
while (isNaN(numero) || numero < 0) {
  var numero = Number(prompt("Ingresa un numero"));
}
if (numero % 2 == 0) {
  document.write(`<h1>El numero: ${numero} es: PAR </h1> <br>`);
} else {
  document.write(`<h1>El numero: ${numero} es: IMPAR </h1> <br>`);
}
*/
/*
9 * 1;
9 * 2;
9 * 3;
*/
//!Tabla de multiplicar
//var numero = Number(prompt("Ingresa un numero"));
/*
for (let indexx = 1; indexx <= 10; indexx++) {
  for (let index = 1; index <= 10; index++) {
    let resultado = indexx * index;
    document.write(`${indexx} x ${index} = ${resultado} <br>`);
  }
  document.write("<br>");
}

*/
//!Calculadora, pide dos numeros por pantalla, si metemos uno mal lo vuelve a pedir
do {
  var numeroUno = Number(prompt("Ingresa el primer numero"));
  var numeroDos = Number(prompt("Ingresa el segundo numero"));
} while (
  numeroUno <= 0 ||
  numeroDos <= 0 ||
  isNaN(numeroUno) ||
  isNaN(numeroDos)
);
var suma = numeroUno + numeroDos;
var resta = numeroUno - numeroDos;
var multiplciacion = numeroUno * numeroDos;
var division = numeroUno / numeroDos;

var resultadoCMD = `
La suma de ${numeroUno} + ${numeroDos} es: ${suma}\n
La resta de ${numeroUno} - ${numeroDos} es: ${resta} \n
La multiplicacion de ${numeroUno} x ${numeroDos} es: ${multiplciacion}\n
La division de ${numeroUno} / ${numeroDos} es: ${division} \n
`;

console.log(resultadoCMD);
alert(resultadoCMD);

document.write("<h1>Calculadora</h1>");
document.write("<h2>Suma</h2>");
document.write(`La suma de ${numeroUno} + ${numeroDos} es: ${suma}`);
document.write("<h2>Resta</h2>");
document.write(`La resta de ${numeroUno} - ${numeroDos} es: ${resta}`);
document.write("<h2>Multiplicacion</h2>");
document.write(
  `La multiplicacion de ${numeroUno} x ${numeroDos} es: ${multiplciacion}`
);
document.write("<h2>Division</h2>");
document.write(`La division de ${numeroUno} / ${numeroDos} es: ${division}`);
