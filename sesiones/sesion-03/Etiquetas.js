// Labels - Etiquetas

let unidades = 0;
let decenas = 0;
let centenas = 0;

buclecentenas: while (true) {
  bucledecenas: while (true) {
    bucleunidades: while (true) {
      console.log(`Èl número actual es: ${decenas}${unidades}`);
      unidades++;
      if (unidades === 10) {
        unidades = 0;
        break bucleunidades;
      }
    }
    decenas++;
    if (decenas === 9) {
      console.log(`El número actual es: ${decenas}${unidades}`);
      decenas = 0;
      break bucledecenas;
    }
  }
}