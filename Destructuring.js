// Destructuring
// Desestructuremos.
// Para este ejercicio contamos con un array de destinos del mundo ya definido.

// Queremos, usando destructuramiento, definir las variables bariloche y china, y extraer del array únicamente los destinos "Bariloche" y "China".

// Dame una pista
// Recordemos que tenemos que saber en que posición se encuentran los valores.



// let destinosDelMundo = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia']

// let [ , bariloche, , china , ] = destinosDelMundo;
// console.log(bariloche);
// console.log(china);



// Destructurando objetos
// Desestructuremos la Ferrari.
// Para este ejercicio contamos con un objeto literal auto ya definido.

// Queremos, usando desestructuramiento, definir las variables marca y color, haciendo que las mismas tengan el valor correspondiente del objeto literal.

// Dame una pista
// Recordemos que las variables deben tener el mismo nombre que en el objeto literal.

let auto  = {marca: 'Ferrari', kilometros: 31, color: "Rojo"};
let { marca,  color} = auto;
console.log(marca, color);