var Coche = /** @class */ (function () {
    //?Constructor
    function Coche(modelo) {
        if (modelo === void 0) { modelo = null; }
        this.velocidad = 0;
        this.color = "Blanco";
        if (modelo == null) {
            this.modelo = "Generico";
        }
        else {
            this.modelo = modelo;
        }
    }
    //?Metodos
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    Coche.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Coche.prototype.getModelo = function () {
        return this.modelo;
    };
    Coche.prototype.acelerar = function () {
        this.velocidad++;
    };
    Coche.prototype.frenar = function () {
        this.velocidad--;
    };
    return Coche;
}());
//?INSTANCIA AUDI
var audi = new Coche();
audi.setColor("Rojo");
audi.setModelo("Deportivo");
console.log("El color del coche audi es: " +
    audi.getColor() +
    " y es modelo: " +
    audi.getModelo());
//?INSTANCIA TSURU
var tsuru = new Coche();
tsuru.setColor("Azul");
console.log("El color del coche tsuru es: " + tsuru.getColor());
tsuru.acelerar();
tsuru.acelerar();
tsuru.acelerar();
//?Frenamos
tsuru.frenar();
console.log("La velocidad del tsuru es: " + tsuru.getVelocidad());
