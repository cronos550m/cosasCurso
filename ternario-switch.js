// if ternario

let fruta = 'Manzana'; 

let resultado = fruta == 'Manzana'? 'Buenisimo, me gustan las manzanas':'Ufa, quiera manzana';
console.log(resultado); 

//switch

let semaforo = 'Rojo';

switch(semaforo){
    case 'Verde':
        console.log("Puedes avanzar");
        break;
    case 'Amarillo':
        console.log("Precaución");
        break;
    case 'Rojo':
        console.log('No cruces, hay que esperar');
        break;
    default:
        console.log('No funciona el semaforo');
        break;
}

let dia = 'lunes'

function tengoClases(dia) {
	switch (dia) {
		case 'lunes':
		case 'miércoles':
		case 'viernes':
		console.log('tenés clases');
		break;
		default:
		console.log('no tenés clases');
	}
}