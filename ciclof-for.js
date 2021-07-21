//for (let i = 0; i<10;i++){
//    console.log('El valor de i es igual a: '+ i);
//}


//trae numero impares

function noParesDeContarImparesHasta(numero){
    let suma = 0;
      for(let i = 0; i<=numero; i++){
        if (i % 2 == 1 ){
            suma +=1;
            
        }
        
    }
    return suma;
}