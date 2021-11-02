//!JAVASCRIPT OBJECT NOTATION
let pelicula = {
  titulo: "Batman vs Superman",
  year: 2017,
  pais: "Estados Unidos"
};
pelicula.titulo = "Superman Begins";
console.log(pelicula.titulo);

let peliculas = [
  { titulo: "La verdad duele", year: 2016, pais: "España" },
  pelicula
];
console.log(peliculas[1].year);

let cajaPeliculas = document.querySelector("#peliculas");
for (const indice in peliculas) {
  let parrafo = document.createElement("p");
  parrafo.append(peliculas[indice].titulo);
  cajaPeliculas.append(parrafo);
}
