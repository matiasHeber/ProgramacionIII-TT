let tareas = [
    {
        nombre: 'Hacer las ejercitaciones de programacion III',
        duracion: 120,
    },
    {
        nombre: 'Lavar los platos',
        duracion: 20,
    },
    {
        nombre: 'Lavar el auto',
        duracion: 100,
    },
    {
        nombre: 'Pasear al perro',
        duracion: 30,
    },
];

// MAP

let nombreTareas = tareas.map((tarea)=>{
    return tarea.nombre;
})


// console.log(nombreTareas);



//  FILTER

let duracionTareas = tareas.filter((tarea)=>{
    return tarea.duracion > 60;
})

// console.log(duracionTareas);


// REDUCE

let tiempoTareasTotal = tareas.reduce((acumulador, tarea)=>{
    return acumulador + tarea.duracion;
}, 0)

// console.log(tiempoTareasTotal);




// MAP EJERCICIO 4

let personas = [
    {

    nombre: "Angelina Jolie",

    edad: 80

    },

    {

    nombre: "Eric Jones",

    edad: 2

    },

    {

    nombre: "Paris Hilton",

    edad: 5

    },

    {

    nombre: "Kayne West",

    edad: 16

    },

    {

    nombre: "Bob Ziroll",

    edad: 100

    }
];

let soloNombre = personas.map((persona)=>{
    return persona.nombre;
})

// console.log(soloNombre);


// MAP EJERCICIO 5

let laMatrix = personas.map((persona)=>{
    if (persona.edad >= 60) {
        return persona.nombre + ' puede entrar a la Matrix'
    } else {
        return persona.nombre + ' demasiado peque....'
    }
})


// console.log(laMatrix);

// VERSION CON FOREACH

let laMatrix2 = [];

personas.forEach((persona)=>{
    if (persona.edad >= 60) {
        laMatrix2.push(persona.nombre + ' puede entrar a la Matrix')
    } else {
        laMatrix2.push(persona.nombre + ' demasiado peque....')
    }
})

// console.log(laMatrix2);
