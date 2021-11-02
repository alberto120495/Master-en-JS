let p1x = 1;
let p2x = 5;
let p1y = 3;
let p2y = 3;
let contador = 0;
let puntosArriba = [1, 3, 5];
let puntos = [2, 4, 6];

for (const punto in puntos) {
  //2
  console.log(puntos[punto]);
  for (const puntoArriba in puntosArriba) {
    // 1
    console.log(puntosArriba[puntoArriba]);
  }
}

/*
let rectangulos = new Array();
for (let index = 0; index < p2x; index++) {
  if (p1x <= p1y && p1x < p2x && p1y == p2y) {
    console.log("Rectangulo");
    if (p1x < p1y) {
      contador++;
      rectangulos[index] = contador;
      console.log(rectangulos);
    }
  }
}
*/
