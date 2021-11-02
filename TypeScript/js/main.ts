//import { Camiseta } from "./05clases";

class Main {
  constructor() {
    console.log("Aplicacion JS cargada");
  }

  getCamiseta() {
    return new Camiseta("Rojo", "Deportivo", "Nike", "G", 500);
  }
}

var main = new Main();

console.log(main.getCamiseta());
