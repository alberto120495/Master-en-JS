//?String
var cadena = "Alberto Pimentel";
//cadena = 12; Erro al asiganar numero a tipo String
//?Number
var edad = 24;
//?Boolen
var verdadero = true;
//?Any -cualquier cosa
var valor = "Hola";
//?Arrays
var lenguajes = ["JavaScript", "PHP", "C", "Pyhton"];
var edades = [12, 35, 64, 76];
var years = [1, 2, 3, 4, 5, 6];
var nombres = ["Alberto", "Diego"];
//?Impresion de datos
console.log(cadena, edad, verdadero);
console.log(valor);
//?Impresion de Arrays
console.log(lenguajes);
console.log(edades);
console.log(years);
console.log(nombres);
//!Multiples tipos de datos
var diferente = 12;
console.log(diferente);
var abece = "Hola";
console.log(abece);
//!Let vs Var
var numero1 = 10;
var numero2 = 12;
if (numero1 == 10) {
    var numero1_1 = 44;
    var numero2_1 = 55;
    console.log(numero1_1);
    console.log(numero2_1);
}
console.log(numero1);
console.log(numero2);
