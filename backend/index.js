"use strict";

let mongoose = require("mongoose");
let app = require("./app");
let port = 3700;

mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost:27017/portafolio", { useNewUrlParser: true })
  .then(() => {
    console.log("Conexion a la base de datos establecida con exito...");

    //?Creacion del servidor
    app.listen(port, () => {
      console.log("Servidor corriendo correctamente en la URL: localhost:3700");
    });
  })
  .catch((err) => {
    console.log(err);
  });
