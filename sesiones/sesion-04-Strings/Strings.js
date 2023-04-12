// Sesion 04 - Strings

// EL resultado es el mismo, pero es buena practica que utilicemos el mismo tipo de comillas durante un proyecto
let str_dbl = "Hola soy una texto con comillas dobles";
let str_sng = 'Hola soy una texto con comillas simples';

console.log(str_dbl);
console.log(str_sng);

let str_comillasv1 = "Hola soy un texto con 'comillas simples' dentro";
let str_comillasv2 = 'Hola soy un texto con "comillas dobles" dentro';
let str_comillasv3 = "Hola soy un texto con \"comillas simples\" dentro";
let str_comillasv4 = 'Hola soy un texto con \'comillas dobles\' dentro';

console.log(str_comillasv2);

////// Comillas invertidas (backticks) //////
let str_backticks = `Hola soy un texto con backsticks`;

console.log(str_backticks);

let nombre = 'Isaac';
let apellido = 'Sims';
let nombre_Completo = `${nombre} ${apellido}`;
let str_backticksV2 = `Hola soy un texto con backsticks y mi nombre es ${nombre} ${apellido}`;

console.log(str_backticksV2);

// Plantilla HTML

let PlantillaHTML = `
<html>
    <head>
        <title>Pagina web de ${nombre_Completo}</title>
    </head>
    <body>
        <h1>Plantilla HTML</h1>
        <p>Este es un texto de prueba</p>
    </body>
</html>
`;
console.log(PlantillaHTML);

// Introducción de variables en HTML
let libros = ["Empieza por el por qué", "El poder del ahora", "El principito", "The Witcher"];