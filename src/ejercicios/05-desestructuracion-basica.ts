/* DESESTRUCTURACION DE OBJETOS*/
interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles
}

interface Detalles{
    autor: string;
    anio: number
}

const reproductor :Reproductor = {
    volumen:90,
    segundo:36,
    cancion:'mess',
    detalles:{
        autor:'Edd Sheran',
        anio:2016
    }
}
/*
console.log('El volumen actual es:',reproductor.volumen);
console.log('El segundo actual es:',reproductor.segundo);
console.log('La cancion actual es:',reproductor.cancion);
console.log('El autor actual es:',reproductor.detalles.autor);
*/

const {volumen,segundo,cancion,detalles }=reproductor
const {autor, anio }=detalles

console.log('El volumen actual es:',volumen);
console.log('El segundo actual es:',segundo);
console.log('La cancion actual es:',cancion);
console.log('El autor actual es:',autor);


/*DESESTRUCTURACION DE ARREGLOS */

const dbz:string[]=['goku','vegeta','trunks'];
const [p1,p2,p3]=dbz;

console.log('Personaje 1:',p1);
console.log('Personaje 2:',p2);
console.log('Personaje 3:',p3);

/*
console.log('Personaje 1:',dbz[0]);
console.log('Personaje 2:',dbz[1]);
console.log('Personaje 3:',dbz[2]);
*/