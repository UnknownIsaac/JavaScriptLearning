// Sesion 05 - Numbers
// Declaración de variables númericas (enteras y decimales)
let a = 5;

console.log(a);

let b = 0.1;

console.log(b);

// Precisión
let c = 0.2;

// No obtiene el resultado matemático correcto (0.3) sino que obtiene un valor cercano (0.30000000000000004)
// Esto se debe a que los números decimales no se pueden representar de forma exacta en binario
console.log(b + c);

// Pequeño truco para redondear a dos decimales
console.log(Math.round((b + c) * 100) / 100);
