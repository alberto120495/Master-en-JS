module Tienda {
  export class Ropa {
    constructor(public titulo) {
      alert(titulo);
    }
  }

  export class Informatica {
    constructor(public titulo) {
      alert("Tienda de tecnologia" + titulo);
    }
  }
}

import Informatica = Tienda.Informatica;

var cargaInformatica = new Informatica(" Super Tienda ");

function arranque(lanzar) {
  return function (target) {
    target.prototype.lanzamiento = function () {
      console.log(lanzar);
    };
  };
}

@arranque("Lanzamiento del curso de NodeJS y Angular 2")
class Programa {
  //?Atributos
  public nombre: string;
  public version: number;
  //?Metodos
  public setNombre(nombre) {
    this.nombre = nombre;
  }
  public getNombre() {
    return this.nombre;
  }

  public setVersion(version) {
    this.version = version;
  }
  public getVersion() {
    return this.version;
  }
}

var program = new Programa();

program.lanzamiento();

class EditorVideo extends Programa {
  public timeLine: number;

  //?Metodos
  public setTimeLine(timeLine) {
    this.timeLine = timeLine;
  }
  public getTimeLine() {
    return this.timeLine;
  }

  public getAllData() {
    return (
      this.getNombre() + " - " + this.getVersion() + " - " + this.getTimeLine()
    );
  }
}

var editor = new EditorVideo();

editor.setNombre("Camtasia Studio");
editor.setVersion(9);
editor.setTimeLine(4000);

console.log(editor.getAllData());

//?Logica del formulario

var programas = [];

function guardar() {
  var nombre = (<HTMLInputElement>(
    document.getElementById("nombre")
  )).value.toString();

  var programa = new Programa();
  programa.setNombre(nombre);
  programas.push(programa);
  console.log(programas);
  var list = "";
  for (let index = 0; index < programas.length; index++) {
    list = list + "<li>" + programas[index].getNombre() + "</li>";
  }
  var listado = <HTMLElement>document.getElementById("listado");
  listado.innerHTML = list;

  document.getElementById("nombre").value = "";
}
