//?String
var cadena: string = "Alberto Pimentel";
//cadena = 12; Erro al asiganar numero a tipo String
//?Number
var edad: number = 24;
//?Boolen
var verdadero: boolean = true;
//?Any -cualquier cosa
var valor: any = "Hola";

//?Arrays
var lenguajes: Array<string> = ["JavaScript", "PHP", "C", "Pyhton"];
var edades: Array<number> = [12, 35, 64, 76];

var years: number[] = [1, 2, 3, 4, 5, 6];
var nombres: string[] = ["Alberto", "Diego"];

//?Impresion de datos
console.log(cadena, edad, verdadero);
console.log(valor);
//?Impresion de Arrays
console.log(lenguajes);
console.log(edades);
console.log(years);
console.log(nombres);

//!Multiples tipos de datos
var diferente: string | number = 12;

console.log(diferente);

//!Tipos de datos personalizados
type letrasOnumeros = string | number;

var abece: letrasOnumeros = "Hola";

console.log(abece);

//!Let vs Var

var numero1 = 10;
var numero2 = 12;

if (numero1 == 10) {
  let numero1 = 44;
  let numero2 = 55;
  console.log(numero1);
  console.log(numero2);
}
console.log(numero1);
console.log(numero2);
