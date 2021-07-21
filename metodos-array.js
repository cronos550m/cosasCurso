// let notas = [10, 4, 5, 8, 9, 2, 7];

// let notasHastaEl100 = notas.map(function(numero){
//     return numero * 10;
// });
//console.log(notasHastaEl100);

// [
//     100, 40, 50, 80,
//      90, 20, 70
//   ]

// let notasAprobadas = notas.filter(function(numero){
//     return numero >=7;
// });

//console.log(notasAprobadas);

// [ 10, 8, 9, 7 ]


//Necesitamos enviarle un diploma a los alumnos que están aprobados y un e-mail 
// a los alumnos desaprobados para acordar un recuperatorio. Por lo tanto, 
// necesitamos dos listas: una lista que almacene todos los aprobados y otra 
// los desaprobados. Deberemos guardarlos en las variables aprobados y desaprobados respectivamente.
//La función filter evalúa una condición sobre cada elemento. Si la condición no resulta verdadera, el elemento se descarta.

// let estudiantes = [
//     {nombre: 'John', promedio: 8.5, aprobado: true},
//     {nombre: 'Jane', promedio: 7, aprobado: true},
//     {nombre: 'June', promedio: 3, aprobado: false},
// ]

// let desaprobados = estudiantes.filter(apro => apro.aprobado == false)

// let aprobados = estudiantes.filter(apro => apro.aprobado == true)
// console.log(desaprobados);
// console.log(aprobados);



// map ()
// Hagamos lío...

// Nos dejaron una lista con los horarios de partida de algunos aviones. Esta lista se reproduce 
// directamente en las pantallas del aeropuerto y, a modo de travesura, queremos atrasar una hora 
// cada partida. Nuestro trabajo será utilizar el método map para poder lograrlo y almacenar la lista 
// en una variable nueva llamada horariosAtrasados.

// Dame una pista
// El método map recorre el array original y devuelve uno nuevo con las alteraciones que hayamos definido para cada elemento.



// let horariosPartida = [12, 14, 18, 21];

// let horariosAtrasados = horariosPartida.map(horario => horario -1)

// console.log(horariosAtrasados);



// reduce()
// Nos dejaron un array con las vueltas que dio una corredora entrenando en distintos momentos para una maratón.

// Nuestro desafío será crear la variable totalVueltas y almacenar en ella el total, usando el método reduce.

// Dame una pista
// El método reduce devuelve un único valor según la condición dada.

// let vueltas = [5, 8, 12, 3, 22]

// let totalVueltas = vueltas.reduce((acum, num) => acum + num)

// console.log(totalVueltas);





// forEach
// Para este ejercicio tenemos el array listaDeSupermercado. Nuestro trabajo será mostrar cada ítem de esa lista por consola utilizando un foreach.

// Dame una pista
// Usando un foreach podemos recorrer cada elemento de un conjunto iterable.


let listaDeSuperMercado = [
    'Bife de chorizo', 
    'Coca Cola', 
    'Bananas', 
    'Lechuga', 
    'Chimichurri', 
    'Lata de tomates', 
    'Arvejas', 
    'Cereales', 
    'Pechuga de pollo', 
    'Leche'
];

listaDeSuperMercado.forEach(pais => console.log(pais));