interface Pasajero{
    nombre:string;
    hijos?: String[]
}

const Pasajero:Pasajero={
    nombre: 'Fernando'
}
const Pasajero1:Pasajero={
    nombre: 'Melissa',
    hijos:['Natalia','Gabriel']
}

function imprimeHijos( pasajero:Pasajero):void{
    const cuantosHijos = pasajero.hijos?.length || 0;
    console.log(cuantosHijos);
}

imprimeHijos(Pasajero);