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
var Tienda;
(function (Tienda) {
    var Ropa = /** @class */ (function () {
        function Ropa(titulo) {
            this.titulo = titulo;
            alert(titulo);
        }
        return Ropa;
    }());
    Tienda.Ropa = Ropa;
    var Informatica = /** @class */ (function () {
        function Informatica(titulo) {
            this.titulo = titulo;
            alert("Tienda de tecnologia" + titulo);
        }
        return Informatica;
    }());
    Tienda.Informatica = Informatica;
})(Tienda || (Tienda = {}));
var Informatica = Tienda.Informatica;
var cargaInformatica = new Informatica(" Super Tienda ");
function arranque(lanzar) {
    return function (target) {
        target.prototype.lanzamiento = function () {
            console.log(lanzar);
        };
    };
}
var Programa = /** @class */ (function () {
    function Programa() {
    }
    //?Metodos
    Programa.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Programa.prototype.getNombre = function () {
        return this.nombre;
    };
    Programa.prototype.setVersion = function (version) {
        this.version = version;
    };
    Programa.prototype.getVersion = function () {
        return this.version;
    };
    Programa = __decorate([
        arranque("Lanzamiento del curso de NodeJS y Angular 2")
    ], Programa);
    return Programa;
}());
var program = new Programa();
program.lanzamiento();
var EditorVideo = /** @class */ (function (_super) {
    __extends(EditorVideo, _super);
    function EditorVideo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //?Metodos
    EditorVideo.prototype.setTimeLine = function (timeLine) {
        this.timeLine = timeLine;
    };
    EditorVideo.prototype.getTimeLine = function () {
        return this.timeLine;
    };
    EditorVideo.prototype.getAllData = function () {
        return (this.getNombre() + " - " + this.getVersion() + " - " + this.getTimeLine());
    };
    return EditorVideo;
}(Programa));
var editor = new EditorVideo();
editor.setNombre("Camtasia Studio");
editor.setVersion(9);
editor.setTimeLine(4000);
console.log(editor.getAllData());
//?Logica del formulario
var programas = [];
function guardar() {
    var nombre = (document.getElementById("nombre")).value.toString();
    var programa = new Programa();
    programa.setNombre(nombre);
    programas.push(programa);
    console.log(programas);
    var list = "";
    for (var index = 0; index < programas.length; index++) {
        list = list + "<li>" + programas[index].getNombre() + "</li>";
    }
    var listado = document.getElementById("listado");
    listado.innerHTML = list;
    document.getElementById("nombre").value = "";
}
