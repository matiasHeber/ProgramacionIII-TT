// console.log('Bienvenidos a programacion 3');


let nombre = '';
let numero = 0;

if(true){
   nombre = 'Jose';
}



let persona = {
    nombre: 'Agustin',
    saludar: function () {
      return 'Hola'  
    }
}



// FUNCIONES
// Convertidor de temperatura

// Declara la función celsiusAFahrenheit la cual deberá tener como parámetro la temperatura a calcular.
// Dentro de la función convierte la temperatura ingresada de celsius a fahrenheit y retorna una frase como:
//         “NN°C son NN°F”
// Donde el primer valor NN son los grados ingresados como párametro y el segundo valor NN es la conversión mencionada.


// FUNCION TRADICIONAL
// function celsiusAFahrenheit (temperatura){
//     let resultado = temperatura * 1.8 + 32;
//     return temperatura + 'ºC son ' + resultado + ' ºF'
// }


// ARROW FUNCTION

let celsiusAFahrenheit = (temperatura) => {
    let resultado = temperatura * 1.8 + 32;
    return temperatura + 'ºC son ' + resultado + ' ºF'
}

// console.log(celsiusAFahrenheit(28));




// CONDICIONALES

// Traductor Mundial
// Para este ejercicio en el inicio de tu código tienes que definir una variable idioma que puede contener el texto “en”, el texto “es” ,”de” o “fr”. 

// Para probar el ejercicio vas a ir modificando ese valor y el resultado deberá ser diferente dependiendo de esa variable.

// El resultado del ejercicio debería imprimir en consola el mensaje “Hola Mundo ¡volvió JavaScript!” según el lenguaje definido.
//  Plantea los condicionales necesarios para que tu código funcione correctamente.

// Por ejemplo si la variable es fr (francés) el código debería retornar:
//     “Bonjour tout le mond, retour de JavaScript!”

// Probá el código con distintos idiomas.

let idioma = 'de';

if (idioma == 'es') {
    console.log('Hola mundo');

} else if(idioma == 'fr'){
    console.log('Bonjour tout le mond');
}else{
    console.log('Hello world');
}


// CICLOS O BUCLES
// En este ejercicio deberás combinar condicionales con loops para asignar notas alfabéticas dependiendo de notas numéricas.
// Por ejemplo, una nota numérica de 80/100 equivale a una nota alfabética B.

// Definí la variable notas que tendrá un array con 10 números entre 0 y 100.
// Realiza un ciclo for que recorra esas notas y las imprima con el mensaje: “Nota: N” donde N es la nota en cuestión.
// Dentro del bucle haz un condicional que cumpla con las siguientes normas:

// Si una nota es mayor a 90 equivale debe imprimirse “Nota alfabética: A”
// Si una nota es mayor a 80 equivale a una B y debe imprimirse “Nota alfabética: B”
// Si una nota es mayor a 70 equivale a una C y debe imprimirse “Nota alfabética: C”
// Si una nota es mayor a 65 equivale a una D y debe imprimirse “Nota alfabética: D”
// Cualquier nota por debajo de las anteriores equivale a una F y debe imprimirse “Nota alfabética: F”

// ¿Se te ocurre cómo hacer para generar más fácil un array de 100 notas y probar este código?


let notas = [80,90,100,70,65,60];

// RESOLUCION CON FOR

// for (let i = 0; i < notas.length; i++) {
//     console.log(notas[i] + ' Equivale a ');
//     if (notas[i] >= 90 ) {
//         console.log('Nota alfabetica: A');
//     }else if(notas[i] >= 80){
//         console.log('Nota alfabetica: B');
//     }else if(notas[i] >= 70){
//         console.log('Nota alfabetica: C');
//     }
// }


// RESOLUCION CON FOREACH Y ARROW FUNCTION

notas.forEach(nota => {
    console.log(nota + ' Equivale a ');
    if (nota >= 90 ) {
        console.log('Nota alfabetica: A');
    }else if(nota >= 80){
        console.log('Nota alfabetica: B');
    }else if(nota >= 70){
        console.log('Nota alfabetica: C');
    }
})

// RESOLUCION CON FOREACH Y FUNCION TRADICIONAL

notas.forEach(function (nota) {
    console.log(nota + ' Equivale a ');
    if (nota >= 90 ) {
        console.log('Nota alfabetica: A');
    }else if(nota >= 80){
        console.log('Nota alfabetica: B');
    }else if(nota >= 70){
        console.log('Nota alfabetica: C');
    }
})