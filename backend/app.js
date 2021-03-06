"use strict";

let express = require("express");
let bodyParser = require("body-parser");

let app = express();

//?Cargar archivos de rutas
let projectRoutes = require("./routes/project");

//?Configurar middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); //?Convertir peticion a json

//?Configurar CORS
// Configurar cabeceras y cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
//?Rutas
app.use("/api", projectRoutes);
//?Exportar el modulo
module.exports = app;
