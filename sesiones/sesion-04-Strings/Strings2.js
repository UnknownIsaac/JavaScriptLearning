// Metoodos más utilizados en Strings
// Como obtener la longitud de un string
let str = "Hola soy un texto";
console.log(str.length);

// Obtener partes de un string
// slice() substring() substr()
let slice_str = str.slice(5, 11)
console.log(slice_str);

let substring_str = str.substring(5, 11)
console.log(substring_str);

// Deprecated - No se recomienda su uso
// Es diferente a slice y substring, el segundo numero es la longitud.
let substr_str = str.substr(5, 6)
console.log(substr_str);

// Reemplazar partes de un string
let cadena = "Hola mi nombre es Isaac";
console.log(cadena);
console.log(cadena.replace("Isaac", "D'Angelo"));

// Al utilizar strings sólo se reemplaza la primera instancia
let texto_largo = "Hola mi nombre es Isaac, soy un desarrollador, me gusta programar, me gusta la tecnología, me gusta la música, me gusta la comida, me gusta la naturaleza y me gusta la vida";
console.log(texto_largo.replace("me gusta", "amo"));

// Al utilizar la expresión regular /g global se reemplazan todas las instancias
console.log(texto_largo.replace(/me gusta/g, "amo"));