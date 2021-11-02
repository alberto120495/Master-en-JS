//?Interface
interface CamisetaBase {
  //?Metodo Obligatorio
  setColor(color);
  getColor();
}

//?Decorador

function estampar(logo) {
  return function(target) {
    target.prototype.estampacion = function() {
      console.log("Camiseta estampoada con el logo de: " + logo);
    };
  };
}

//!Clase (molde del objeto)
@estampar("Gucci Gang")
class Camiseta implements CamisetaBase {
  //!Propiedades - Caracteristicas
  private color: string;
  private modelo: string;
  private marca: string;
  private talla: string;
  private precio: number;

  //!Metodos - Accion del objeto

  constructor(color, modelo, marca, talla, precio) {
    this.color = color;
    this.modelo = modelo;
    this.marca = marca;
    this.talla = talla;
    this.precio = precio;
  }
  public setColor(color) {
    this.color = color;
  }
  public getColor() {
    return this.color;
  }
}

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
class Sudadera extends Camiseta {
  public capucha: boolean;
  public setCapucha(capucha) {
    this.capucha = capucha;
  }
  public getCapucha() {
    return this.capucha;
  }
}

var sudadera = new Sudadera("Negro", "Invierno", "LS", "C", 900);
sudadera.setCapucha(true);
sudadera.setColor("Blanca");

console.log(sudadera);

//!Decorators -Patron de diseño permite hacer una copia de una misma clase, modificarla dependiendo de los parametros que se le pasen- Adiciona una funcionalidad extra a cualquier clase
