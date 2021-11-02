//!Bucles
//?Bucle for
/*
for (let index = 0; index <= 100; index++) {
  console.log(index);
  debugger;
}
*/

//?While
/*
let year = 2018;

while (year <= 2051) {
  console.log("Estamos en el año " + year);
  year++;
}
*/
//?do-while
/*
let years = 20;
do {
  console.log("Solo cuando sea menor a 22");
  years++;
} while (years < 25);
*/
//!Ventanas
//*Alerta
//alert("Hola");
//*Confirmacion
/*
let resultado = confirm("Estas seguro de querer continuar?");
console.log(resultado);*/
//*Ingreso de datos
//let edad = prompt("Que edad tienes");
//console.log(Number(edad)); //Siempre es el string, convertir a numero
//!Parametros REST y SPREAD
/*
function listadoFrutas(fruta1, fruta2, ...restoFrutas) {
  //?Con los ... puntitos
  console.log("Fruta 1:" + fruta1);
  console.log("Fruta 2:" + fruta2);
  console.log(restoFrutas);
}
listadoFrutas("Naranja", "Manzana", "Sandia", "Pera", "Melon", "Coco");

//?SPREAD
var frutas = ["Naranja", "Manzana"];
listadoFrutas(...frutas, "Sandia", "Pera", "Melon", "Coco");
*/
//!Funciones Anonimas (Funcion que no tiene nombre)
/*
let pelicula = function(nombrePelicula) {
  return "La pelicula es " + nombrePelicula;
};

console.log(pelicula("El ultimo Samurai"));
*/
//!Callbacks / (Funciones que se ejecutan dentro de otraas)
/*
function sumame(numeroUno, numeroDos, sumaYmuestra, sumaPorDos) {
  var sumar = numeroUno + numeroDos;
  sumaYmuestra(sumar);
  sumaPorDos(sumar);
}

sumame(
  5,
  7,
  function(dato) {
    console.log("La suma es: " + dato);
  },
  function(dato) {
    console.log("Suma por dos es: " + dato * 2);
  }
);
*/
//!Funciones de flecha
/*
function sumame(numeroUno, numeroDos, sumaYmuestra, sumaPorDos) {
  var sumar = numeroUno + numeroDos;
  sumaYmuestra(sumar);
  sumaPorDos(sumar);
}

sumame(
  5,
  7,
  dato => {
    console.log("La suma es: " + dato);
  },
  dato => {
    console.log("Suma por dos es: " + dato * 2);
  }
);
*/
//!Transformacion de textos
/*
let numero = 444;
let texto1 = "Bienvenido al curso de JavScript de Victor Robles";
let texto2 = "es muy buen curso";

console.log(numero.toString());
console.log(texto1.toUpperCase());
console.log(texto1.toLowerCase());
console.log(texto2.length);
console.log(texto1 + " " + texto2);
*/
//!Busquedas dentro de un String
/*
let numero = 444;
let texto1 = "Bienvenido al curso de JavScript de Victor Robles";
let texto2 = "es muy buen curso";

console.log(texto1.indexOf("curso"));
console.log(texto1.lastIndexOf("de"));
console.log(texto1.search("de"));
console.log(texto1.match("de")); //Regresa un array de un solo elemento
console.log(texto1.match(/de/g)); //Regresa un array de varios elementos
console.log(texto1.substr(0, 3)); //extrae un pedazo de texto por posicion
console.log(texto1.charAt(43)); //extrae una letra en concreto
console.log(texto1.startsWith("B")); //busca texto en especifico al inicio de la cadena, regresa true o false
console.log(texto1.endsWith("Robles")); //busca texto en especifico al inicio de la cadena, regresa true o false
console.log(texto1.includes("JavaScript")); //busca texto en especifico
*/

//!Funcipnes de reemplazo
/*
let numero = 444;
let texto1 = "Bienvenido al curso de JavScript de Victor Robles";
let texto2 = "es muy buen curso";

console.log(texto1.replace("JavScript", "ScriptJava")); //Cambia el texto por otro
console.log(texto1.slice(16, 22)); //separa un string (desde, hasta)
console.log(texto1.split("")); //recorta las palabras y las mete en un array
console.log(texto1.trim()); //quita espacios antes y despues del string
*/

//!Template String
/*
let nombre = prompt("Ingresa tu nombre");
let apellidos = prompt("Ingresa tus apellidos");

//let texto = "Mi nombre es " + nombre + " Mis apellidos son: " + apellidos;
let texto = `Mi nombre es ${nombre} y mis apellidos son ${apellidos}`;
console.log(texto);
*/
//!Arreglos
/*
let nombres = ["Alberto", "Jose", "Edgar", 12, 15];
let lenguajes = new Array("PHP", "JS", "Go", "Java");
console.log(lenguajes);
console.log(nombres);
console.log(lenguajes.length);
//?FOR
document.write("<h1>Lenguajes de programacion</h1>");
document.write("<ol>");
for (let index = 0; index < nombres.length - 1; index++) {
  document.write("<li>" + lenguajes[index] + "</li>");
}
document.write("</ol>");

//?ForEach
let lenguajes = new Array("PHP", "JS", "Go", "Java");
document.write("<h1>Lenguajes de programacion</h1>");
document.write("<ul>");
lenguajes.forEach((elemento, indice, arreglo) => {
  document.write("<li>" + indice + " - " + elemento + "</li>");
  console.log(arreglo);
});
document.write("</ul>");

//?FOR IN
for (let lenguaje in lenguajes) {
  console.log(lenguajes[lenguaje]);
}

//?Array multidimensionales
let categorias = ["Accion", "Terror", "Comedia"];
let peliculas = ["La verdad duele", "La vida es bella", "Gran torino"];

let cine = [categorias, peliculas];
console.log(cine[0][1]);
console.log(cine[1][1]);
*/
//?Operaciones
let peliculas = ["La verdad duele", "La vida es bella", "Gran torino"];
peliculas[peliculas.length] = "Batman";
peliculas.push("Superman");

//Eliminar un elemento el concreto
let indice = peliculas.indexOf("Gran torino");
if (indice != -1) {
  //-1 es que no esta en el arreglo
  peliculas.splice(indice, 1);
}

console.log(peliculas);
//Convertir a texto
let peliculasTexto = peliculas.join(",");
console.log(peliculasTexto);

//?Convertir un string en array
let texto = "texto1 , texto2, texto3";
let textoArreglo = texto.split(", ");
console.log(textoArreglo);

//?Ordenar arreglos
console.log(peliculas.sort()); //De A-Z
console.log(peliculas.reverse()); //De Z-A

//?Busqueda en un arreglo
console.log(
  peliculas.find(elemento => {
    return elemento == "Batman"; //ACUERDATE DE PONER RETURN CUANDO TENGAS LAS LLAVES
  })
);
//Buscando el indice
console.log(
  peliculas.findIndex(elemento => {
    return elemento == "Batman"; //ACUERDATE DE PONER RETURN CUANDO TENGAS LAS LLAVES
  })
);

let precios = [10, 20, 30, 40, 50];

console.log(precios.some(elemento => elemento > 20));
console.log(precios.filter(elemento => elemento > 20));
