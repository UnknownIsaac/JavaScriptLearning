// Ejercicio 3 sesion-03 (factorial de 10 con while, if y break)

const factorial = [1,2,3,4,5,6,7,8,9,10];
let i = 1;
breaker: while (i < 10) {
    factorial[i] *= factorial[i-1];
    console.log(factorial[i]);
    i++;
    if (i === 10) {
        break breaker;
    }
}