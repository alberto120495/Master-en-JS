"use strict";
//alert("Hola Mundo");
//alert("Bienvenido al curso");
//document.write("Script desde archivo externo");

//?VARIABLES
let pais = "Mexico",
  continente = "America",
  antiguedad = 2019;
let pais_continente = pais + " " + continente;

let paises = "España";
console.log(pais, continente, antiguedad);
console.log(pais_continente);
console.log(paises);

let edad = 20;
switch (edad) {
  case 18:
    console.log("Tienes 18");
    break;
  case 20:
    console.log("Tienes mas de 18");
    break;
  default:
    break;
}
