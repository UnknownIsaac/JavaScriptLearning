// Metodos de cadenas de texto (parte 3)
// para más información:  https://regexr.com/
let texto_largo = "Hola mi nombre es Isaac, soy un desarrollador, me gusta programar, me gusta la tecnología, me gusta la música, me gusta la comida, me gusta la naturaleza y me gusta la vida";
console.log(texto_largo.match(/gusta/g));

// Para saber si un string contiene una palabra
console.log(texto_largo.includes("gusta"));

// Para saber si un string empieza con una palabra
console.log(texto_largo.startsWith("Hola"));

// Para saber si un string termina con una palabra
console.log(texto_largo.endsWith("vida"));