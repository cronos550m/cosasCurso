//calculadora

// let sumar = (numero1, numero2) => numero1 + numero2;
// let restar = (numero1, numero2) => numero1 - numero2;
// let multiplicar = (numero1, numero2) => numero1 * numero2;
// let dividir = (numero1, numero2) => numero1 /numero2;

// let calculadora = (numero1, numero2, operacion) => operacion(numero1, numero2);

// console.log(calculadora(18,10,multiplicar));


//Pasar un callback reloaded

function agregarHttp(url) {
    return 'http://' + url
}

function procesar(array,agregarHttp){
    for (let i = 0; i < array.length; i++){
        array[i] = agregarHttp(array[i])
        
    }
    return array
}
let urlCompletas = procesar(["www.google.com","www.yahoo.com"],agregarHttp)
console.log(urlCompletas); // imprime [ 'http://www.google.com', 'http://www.yahoo.com' ]