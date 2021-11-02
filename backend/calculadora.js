"use strict";
let params = process.argv.slice(2);
//?console.log(params);

let numeroUno = Number(params[0]);
let numeroDos = Number(params[1]);

let plantilla = `
La suma de ${numeroUno} + ${numeroDos} es: ${numeroUno + numeroDos}
La resta de ${numeroUno} - ${numeroDos} es: ${numeroUno - numeroDos}
La multiplicacion de ${numeroUno} x ${numeroDos} es: ${numeroUno * numeroDos}
La diviison de ${numeroUno} / ${numeroDos} es: ${numeroUno / numeroDos}

`;

console.log(plantilla);

console.log("Hola Mundo con NodeJS");
