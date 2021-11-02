var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//?Decorador
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log("Camiseta estampoada con el logo de: " + logo);
        };
    };
}
//!Clase (molde del objeto)
var Camiseta = /** @class */ (function () {
    //!Metodos - Accion del objeto
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    Camiseta = __decorate([
        estampar("Gucci Gang")
    ], Camiseta);
    return Camiseta;
}());
/*
var camiseta = new Camiseta("Rojo", "Deportivo", "Nike", "G", 500);
console.log(camiseta);
var camiseta = new Camiseta("Rojo", "Deportivo", "Nike", "G", 500);
camiseta.setColor("Rosa");
//camiseta.getColor();

var playera = new Camiseta("Azul", "Casual", "Puma", "C", 700);
playera.setColor("Azul");
//playera.getColor();

console.log(camiseta, playera.getColor());
console.log(playera);
/* Si los atributos son publicos
camiseta.modelo = "Manga larga";
camiseta.marca = "Nike";
camiseta.talla = "L";
camiseta.precio = 20;
console.log(camiseta);

var playera = new Camiseta();
playera.color = "Azul";
playera.modelo = "Manga corta";
playera.marca = "Puma";
playera.talla = "S";
playera.precio = 15;
console.log(playera);
*/
//!Interfaces
//?Def. Metodos y propiedades obligatorios para una clase
var camiseta = new Camiseta("Rojo", "Deportivo", "Nike", "G", 500);
console.log(camiseta);
camiseta.estampacion();
//TODO CLASE Hija
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Camiseta));
var sudadera = new Sudadera("Negro", "Invierno", "LS", "C", 900);
sudadera.setCapucha(true);
sudadera.setColor("Blanca");
console.log(sudadera);
//!Decorators -Patron de diseño permite hacer una copia de una misma clase, modificarla dependiendo de los parametros que se le pasen- Adiciona una funcionalidad extra a cualquier clase
