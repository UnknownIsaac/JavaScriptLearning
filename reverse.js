// Reversing string exercise

// the split() function is used to convert the string into an 
// array of individual characters, the reverse() function is 
// used to reverse the order of the characters in the array, and
// the join() function is used to convert the array back into a 
// string. The resulting string is the reversed version of the original string.

function reverseString(str) {
let splitString = str.split("");
let stringArray = splitString.reverse();
let joinArray = stringArray.join("");
return joinArray
}

console.log(reverseString("hello"));

const lista1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const lista2 = new Array(2, "Hola", true, 100);
const lista3 = new Array(10);
lista3[5] = "Hola" 
console.log(lista1);
console.log(lista2);
console.log(lista3);
lista3[5] = "Holacaracola";
console.log(lista3);
const movil = {
    altura : 10,
    anchura : 5,
    marca : "Samsung",
    isWhite : true,
    contactos : ["Juan", "Pedro", "Maria"],
    tarjeta : {
        marca : "Nvidia",
        almacenamietno : "128GB"
    },
    "altura-tarjeta" : 10,
}

movil.anyo = 2019;
movil.marca = "Apple";
console.log(movil.altura);
console.log(movil.marca);

// fechas
const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10000000000); // utiliza milisegundos
console.log(fecha_milis);

const fecha_cadena = new Date("December 11 2020");
console.log(fecha_cadena);

const fecha_valores = new Date(2022, 0, 12);
console.log(fecha_valores);

const dia = ahora.getDate();
const mes = ahora.getMonth();
const anyo = ahora.getFullYear();
console.log(dia, mes, anyo);