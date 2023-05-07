// Principales operaciones aritmenticas
let a = 3.4;
let b = 4.8;

// Suma
console.log(a + b);
// Resta
console.log(a - b);
// Multiplicación
console.log(a * b);
// División
console.log(a / b);
// Representación de los números en cadenas de texto
console.log(typeof a);

let a_str = a.toString();
console.log(a_str);

// Redondeo de números decimales
let c = 3.532;
let d = c * 3;
console.log(d);
// .toFixed() recibe como parámetro el número de --(decimales)-- que se desean
console.log(d.toFixed(2));
console.log(typeof d.toFixed(2));

let e = 3343.123;
let f = 1291212;
console.log(e.toFixed(2));
console.log(f.toFixed(3));

// .toPrecision() recibe como parámetro el número de --(dígitos)-- que se desean
console.log(e.toPrecision(5));
console.log(f.toPrecision(5));
console.log(typeof e.toPrecision(5));