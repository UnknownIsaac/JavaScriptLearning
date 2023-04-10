// Ejercicio 1 sesion-03 (factorial de 10 con for)

const factorial = [1,2,3,4,5,6,7,8,9,10];
for (let i = 1; i < 10; i++) {
    factorial[i] *= factorial[i-1];
  console.log(factorial[i]);
}
