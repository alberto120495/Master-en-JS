//!LOCALSTORAGE
/*
//?Comprobar disponibilidad del localStorage
if (typeof (Storage != "undefinded")) {
  console.log("Disponible");
} else {
  console.log("NO Disponible");
}

//?Guardar datos

localStorage.setItem("titulo", "Curso de javascript");

//?Recuperar un elemento y meterlo en la pagina
console.log(localStorage.getItem("titulo"));
document.querySelector("#peliculas").append(localStorage.getItem("titulo"));

//?Guardar objeto
let usuario = {
  nombre: "Jesus Alberto",
  email: "albertopimentel04@gmail.com",
  web: "alberrto.es"
};

localStorage.setItem("usuario", JSON.stringify(usuario));

//?Recuperar objeto
let jsonConvertor = JSON.parse(localStorage.getItem("usuario"));
document
  .querySelector("#datos")
  .append(` ${jsonConvertor.nombre} ${jsonConvertor.email}`);

//?Eliminar datos
localStorage.removeItem("usuario"); // quita el item que le indicas
localStorage.clear(); // limpia todo el localstorage
*/

//!EJERCICIO
//?Añade peliculas
let formulario = document.querySelector("#formPeliculas");
formulario.addEventListener("submit", () => {
  let pelicula = document.querySelector("#addPelicula").value;
  if (pelicula == "") {
    alert("Añade pelicula");
  } else {
    localStorage.setItem(pelicula, pelicula);
  }
});
//?Muestra pelicula
let peliculasDiv = document.querySelector("#listaPeliculas");
for (let indice in localStorage) {
  if (typeof localStorage[indice] == "string") {
    let li = document.createElement("li");
    li.append(localStorage[indice]);
    peliculasDiv.append(li);
  }
}
//?Elimina pelicula
let formularioBorrar = document.querySelector("#formBPeliculas");
formularioBorrar.addEventListener("submit", () => {
  let peliculaAEliminar = document.querySelector("#eliminaPelicula").value;
  localStorage.removeItem(peliculaAEliminar);
});
