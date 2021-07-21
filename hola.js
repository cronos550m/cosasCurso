let Equipos = [
    {
        nombre: 'Argentina',
        copas: {
            America: 14,
            Olimpicos: 5,
            Mundo: 2
        }
    },
    {
        nombre: 'Brasil',
        copas: {
            America: 9,
            Olimpicos: 1,
            Mundo: 5
        }
    }
    ,
    {
        nombre: 'Uruguay',
        copas: {
            America: 15,
            Olimpicos: 2,
            Mundo: 2
        }
    },
    {
        nombre: 'Colombia',
        copas: {
            America: 1,
            Olimpicos: 0,
            Mundo: 0
        }
    }
]


function tieneMasCopas(equipo1,equipo2){
    if (equipo1.copas.Mundo>equipo2.copas.Mundo, equipo1, equipo2){
        if (equipo1.copas.Olimpicos>equipo2.copas.Olimpicos, equipo1, equipo2){
            if (equipo1.copas.America>equipo2.copas.America, equipo1, equipo2){
                return false
            }
        }
    }
}

function mensaje(copas1, copas2, equipo1, equipo2){
    if (copas1>copas2){
        console.log(`El equipo de ${equipo1.nombre} es el mejor`);
    }else if (copas2>copas1){
            console.log(`El equipo de ${equipo2.nombre} es el mejor`);
    }
    else {
        return true
    }
    }
    
    tieneMasCopas(Equipos[0],Equipos[1])
