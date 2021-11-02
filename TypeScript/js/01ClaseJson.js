//!Objetos con Json
//?"Clase Bicicleta"
let bicicleta = {
  color: "Rojo",
  modelo: "BMX",
  frenos: "Disco",
  velocidadMax: "60km",
  cambiaColor: function(nuevoColor) {
    //bicicleta.color = nuevoColor;
    this.color = nuevoColor;
    console.log(this);
  }
};

bicicleta.cambiaColor("Azul");
