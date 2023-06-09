// Metodos de cadenas de texto (parte 2)

let input = "TaUrO";
let db = "tauro";

// toLowerCase() toUpperCase()

console.log(input.toLowerCase());
console.log(input.toUpperCase());
console.log(input.toLowerCase === db.toLowerCase);
console.log(input.toUpperCase === db.toUpperCase);

// Formas de concatenar strings

let str_1 = "Hola soy la primera cadena";
let str_2 = "Hola soy la segunda cadena";

console.log(str_1.concat(". ", str_2));
console.log(str_1 + ". " + str_2);
console.log(`${str_1}. ${str_2}`);

// Eliminar espacios al inicio y al final de un string
let str_3 = "    Hola soy una cadena con espacios al inicio y al final  ";
console.log(str_3.length);
// trim() trimStart() trimEnd()
console.log(str_3.trim().length);
console.log(str_3.trimStart().length);
console.log(str_3.trimEnd().length);

// Obtener el caracter de una posición específica
let str_4 = "Hola soy la cadena de caracteres 4";
console.log(str_4.charAt(1));
console.log(str_4[33]);

// Obtener la posición de una palabra de un string
// indexOf() lastIndexOf()
let str_5 = "Hola soy la cadena de caracteres 5, Hola otra vez hehe";
console.log(str_5.indexOf("Hola"));
console.log(str_5.charAt(9));
console.log(str_5.lastIndexOf("Hola"));