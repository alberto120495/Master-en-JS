//import { Camiseta } from "./05clases";
var Main = /** @class */ (function () {
    function Main() {
        console.log("Aplicacion JS cargada");
    }
    Main.prototype.getCamiseta = function () {
        return new Camiseta("Rojo", "Deportivo", "Nike", "G", 500);
    };
    return Main;
}());
var main = new Main();
console.log(main.getCamiseta());
