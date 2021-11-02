//!DOM -  Document Object Model
/*
//?Conseguir elementos con un id
function cambiaColor(color) {
  caja.style.color = color;
}
//let caja = document.getElementById("micaja");
let caja = document.querySelector("#micaja");
caja.innerHTML = "TEXTO EN LA CAJA";
caja.style.background = "green";
caja.style.padding = "20px";
caja.style.color = cambiaColor("white");
caja.className = "hola hola2";
console.log(caja);

//?Conseguir elemento por su etiqueta
let todosLosDivs = document.getElementsByTagName("div");

for (let index = 0; index < todosLosDivs.length; index++) {
  let parrafo = document.createElement("p");
  let texto = document.createTextNode(todosLosDivs[index].textContent);
  parrafo.appendChild(texto);
  document.querySelector("#miSeccion").appendChild(parrafo);
}

/*
console.log(todosLosDivs);
console.log(todosLosDivs[1].textContent);
let contenidoEnTexto = todosLosDivs[1];
contenidoEnTexto.innerHTML = "Otro valor";
contenidoEnTexto.style.background = "Red";
*/
//?Conseguir elemento por su clase
/*
let divsRojos = document.getElementsByClassName("rojo");
let divsAmarillos = document.getElementsByClassName("amarillo");

let divsRojos = document.querySelectorAll(".rojo");
let divsAmarillos = document.querySelectorAll(".amarillo");

console.log(divsRojos);
console.log(divsAmarillos);

for (div in divsRojos) {
  if (divsRojos[div].className == "rojo") {
    divsRojos[div].style.background = "red";
  }
}
for (div in divsAmarillos) {
  if (divsAmarillos[div].className == "amarillo") {
    divsAmarillos[div].style.background = "yellow";
  }
}
*/

//!BOM Browser Object Model
/*
//?Contenido del navegador
console.log(window.innerHeight);
console.log(window.innerWidth);
//?Contenido de la pantalla
console.log(screen.height);
console.log(screen.width);
//?Ver la pesataña en la que estoy
console.log(window.location);
//window.location.href = "https://www.google.com/";
function abrirVentana(url) {
  window.open(url, "", "width=400,height=400");
}
abrirVentana("https://www.google.com/");
*/

//!Eventos
//*Raton

let boton = document.querySelector("#boton");
//?Click

boton.addEventListener("click", cambiaColor);

function cambiaColor() {
  var color = boton.style.background;
  this.style.border = "10px solid black";
  console.log(color);
  console.log(this);

  if (color == "" || color == "green") {
    color = boton.style.background = "red";
    console.log(color);
  } else {
    color = boton.style.background = "green";
    console.log(color);
  }
}
/*
//?Mouseover
boton.addEventListener("mouseover", cambiaColor2);
function cambiaColor2() {
  var color = boton.style.background;
  console.log(color);
  if (color == "" || color == "yellow") {
    color = boton.style.background = "blue";
    console.log(color);
  } else {
    color = boton.style.background = "yellow";
    console.log(color);
  }
}

//?MouseOut
boton.addEventListener("mouseout", cambiaColor3);
function cambiaColor3() {
  boton.style.background = "pink";
}
*/

//*Teclado
/*
let input = document.querySelector("#campoNombre");
//?focus
input.addEventListener("focus", foco);
function foco() {
  console.log("Estas dentro del input");
  input.style.background = "red";
}
//?blur
input.addEventListener("blur", blur);
function blur() {
  console.log("Estas fuera del input");
  input.style.background = "blue";
}
//?keydown
input.addEventListener("keydown", pulsaTecla);
function pulsaTecla(event) {
  console.log(
    " keydown- Pulsaste una tecla " + String.fromCharCode(event.keyCode)
  );
  input.style.background = "yellow";
}
//?keypress
input.addEventListener("keypress", teclaPresionada);
function teclaPresionada(event) {
  console.log(
    "keypress - Presionaste una tecla " + String.fromCharCode(event.keyCode)
  );
}
//?keyup
input.addEventListener("keyup", levantoTecla);
function levantoTecla(event) {
  console.log(
    "DEJASTE de Pulsar una tecla " + String.fromCharCode(event.keyCode)
  );
}
//*LOAD
window.addEventListener("load", () => console.log("Ya cargue pinche wey!!!"));
*/

//!TIMERS
/*
function intervalo() {
  var tiempo = setInterval(() => {
    //setTimeout -- solo se ejecuta una vez
    console.log("Set intervalo ejecutado");
    let boton = document.querySelector("#boton");
    if (boton.style.background == "blue" || boton.style.background == "") {
      boton.style.background = "yellow";
    } else {
      boton.style.background = "blue";
    }
  }, 1000);
  return tiempo;
}

var tiempo = intervalo();

//?DETENER INTERVALO
let botonStop = document.querySelector("#stop");
botonStop.addEventListener("click", () => {
  console.log("Intervalo DETENIDO");
  clearInterval(tiempo);
});
//?INICIAR INTERVALO
let inicio = document.querySelector("#iniciar");
inicio.addEventListener("click", () => {
  console.log("Intervalo INICIADO");
  intervalo();
});
*/
