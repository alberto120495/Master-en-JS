interface CocheBase {
  getModelo();
  getVelocidad();
}

class Coche implements CocheBase {
  //?Propiedades
  public color: string;
  public modelo: string;
  public velocidad: number;

  //?Constructor

  constructor(modelo = null) {
    this.velocidad = 0;
    this.color = "Blanco";
    if (modelo == null) {
      this.modelo = "Generico";
    } else {
      this.modelo = modelo;
    }
  }
  //?Metodos
  public setColor(color) {
    this.color = color;
  }
  public getColor() {
    return this.color;
  }

  public getVelocidad() {
    return this.velocidad;
  }
  public setModelo(modelo) {
    this.modelo = modelo;
  }
  public getModelo() {
    return this.modelo;
  }
  public acelerar() {
    this.velocidad++;
  }
  public frenar() {
    this.velocidad--;
  }
}

//?INSTANCIA AUDI
var audi = new Coche();
audi.setColor("Rojo");
audi.setModelo("Deportivo");
console.log(
  "El color del coche audi es: " +
    audi.getColor() +
    " y es modelo: " +
    audi.getModelo()
);

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
