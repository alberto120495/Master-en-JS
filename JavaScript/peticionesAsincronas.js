//!Peticiones asincronas (Fetch, Ajax) y Promesas
//?Fetch (ajax) y peticiones a servicios / apis REST

let divUsuarios = document.querySelector("#usuarios");
let divJanet = document.querySelector("#janet");
let divProfesor = document.querySelector("#profesor");

getUsuarios()
  .then(data => data.json()) //caundo se recivan los datos se formateen a json
  .then(users => {
    //?Meterlas en el arreglo : usuarios = users.data; console.log(usuarios);
    listadoUsuarios(users.data);
    //?Segundo listado
    return getInfo();
  })
  .then(data => {
    return getJanet();
  })
  .then(data => data.json())
  .then(user => {
    muestraJanet(user.data);
  })
  .catch(error => {
    console.log("Error CABRON");
    alert("Error en la peticion");
  });

//*FUNCIONES

function getUsuarios() {
  return fetch("https://reqres.in/api/users"); //Accede a servicios remotos
}

function getJanet() {
  return fetch("https://reqres.in/api/users/2"); //Accede a servicios remotos
}

function listadoUsuarios(usuarios) {
  document.querySelector(".loading").style.display = "none";
  usuarios.map((usuario, indice) => {
    let nombre = document.createElement("h4");
    nombre.append(usuario.first_name + usuario.last_name);
    divUsuarios.append(nombre);
  });
}

function muestraJanet(usuario) {
  document.querySelector(".loading2").style.display = "none";
  let nombre = document.createElement("h4");
  let avatar = document.createElement("img");
  nombre.append(usuario.first_name + usuario.last_name);
  avatar.src = usuario.avatar;
  divJanet.append(nombre);
  divJanet.append(avatar);
}

function getInfo() {
  let profesor = {
    nombre: "Alberto",
    apellidos: "Pimentel",
    url: "https://victorroblesweb.es"
  };

  return new Promise((resolve, reject) => {
    let profesorString = JSON.stringify(profesor);
    if (typeof profesorString != "string") {
      return reject("Error");
    } else {
      setTimeout(() => {
        document.querySelector(".loading3").style.display = "none";
        let nombre = document.createElement("h4");
        nombre.append(profesorString);
        divProfesor.append(nombre);
        return resolve(profesorString);
      }, 1000);
    }
  });
}
