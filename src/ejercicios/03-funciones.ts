function sumar(a:number,b:number):number{

    return a+b;    
}

const sumarFlecha = (a:number,b:number):number =>{
    return a+b;
}
function multiplicar(numero: number, otronumero?:number, base=2):number {
    return numero * base;

}

const resultado = multiplicar(5,10,3);

//console.log(resultado)

interface PersonajeLOR{
    nombre:string;
    pv:number
    mostrarPV : () => void;
}

const nuevoPersonaje: PersonajeLOR={
    nombre: 'Epileff',
    pv:50,
    mostrarPV(){
        console.log('puntos de vida:', this.pv);
    }
}
//console.table(nuevoPersonaje);

function curar( personaje: PersonajeLOR,curarX:number):void {
    personaje.pv += curarX;
    //console.log(personaje);
}

curar(nuevoPersonaje, 25);
nuevoPersonaje.mostrarPV();
