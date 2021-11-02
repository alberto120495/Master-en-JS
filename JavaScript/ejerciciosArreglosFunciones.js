/*
1.- pedir 6 numeros y meterlos en un arreglo
2.- Mostrar el arreglo entero en el cuerpo de la pagina y en la consola
3.- Ordenar el arreglo y msotrarlo
4.- Invertir el orden y mostrarlo
5.- Mostrar cuantos elementos tiene el arreglo
6.- Busqueda de un valor introducir por el usuario y diga si esta y su posicion
*/

var contador = 0;
var arreglo = [];
do {
  var valor = Number(prompt("Ingresa un valor: "));
  arreglo.push(valor);
  contador++;
} while (contador < 6);

//?Con forEach
//arreglo.forEach(elemento => console.log(elemento));

document.write("<ul>");
//?Con for
for (let index = 0; index < arreglo.length; index++) {
  console.log(arreglo[index]);
  document.write("<li>" + arreglo[index] + "</li>");
}
document.write("</ul>");

//Mostramos el arreglo
console.log(arreglo);
//?Ordenar el arreglo y mostrarlo
console.log(arreglo.sort((a, b) => a - b));
//?Arreglo inverso
console.log(arreglo.reverse());
//?Mostrar cuantos elementos tiene el arreglo
console.log("Elementos del arreglo: " + arreglo.length);
//?Busqueda de un valor
let busqueda = Number(prompt("Ingresa el elemento que desea buscar: "));
let indice = arreglo.indexOf(busqueda);

if (indice != -1) {
  let posicion = arreglo.findIndex(elemento => elemento == busqueda);
  console.log(
    "El elemento " + busqueda + " Existe y esta en posicion numero " + posicion
  );
} else {
  console.log("El elemento NO existe en el arreglo");
}
