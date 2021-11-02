let formualario = document.querySelector("#formulario");
let boxDashed = document.querySelector(".dashed");
boxDashed.style.display = "none";

formualario.addEventListener("submit", () => {
  console.log("Se hizo submit");
  let nombre = document.querySelector("#nombre").value;
  let apellido = document.querySelector("#apellidos").value;
  let edad = document.querySelector("#edad").value;

  if (nombre == "") {
    document.querySelector("#faltaNombre").innerHTML = "Ingresa un nombre";
    document.querySelector("#faltaNombre").style.display = "inline";
  } else if (apellido == "") {
    alert("Ingresa un apellido");
  } else if (edad == "") {
    alert("Ingresa una edad");
  } else {
    console.log(nombre);
    console.log(apellido);
    console.log(edad);
    document.querySelector("#faltaNombre").style.display = "none";
    boxDashed.style.display = "block";

    let pNombre = document.querySelector("#pNombre span");
    let pApellido = document.querySelector("#pApellido span");
    let pEdad = document.querySelector("#pEdad span");

    pNombre.innerHTML = nombre;
    pApellido.innerHTML = apellido;
    pEdad.innerHTML = edad;
    /*Una forma
  let datosUsuario = [nombre, apellido, edad];
  for (indice in datosUsuario) {
    let parrafo = document.createElement("p");
    parrafo.append(datosUsuario[indice]);
    boxDashed.append(parrafo);
  }
  */
  }
});
