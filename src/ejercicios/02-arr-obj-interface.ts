let habilidades:String[] = ['bash','counter','healing'];

//habilidades.push()

interface personaje{
    nombre:string;
    hp:number;
    habilidades:string[];
    puebloNatal?: string
}

const personaje: personaje ={
    nombre:' Felipe',
    hp:100,
    habilidades: ['bash','counter','healing']
}

personaje.puebloNatal = 'Pueblo Paleta';

console.table(personaje);



/* Pruebas  */

interface Muchacho{
    nombre : string;
    edad: number;
    direccion: string;
    sexo?:string;
    rankin:boolean[]
}

const muchacho : Muchacho = {
    nombre : 'Felipe', 
    edad : 21,
    direccion:'nicaragua 123',
    sexo:'Masculino',
    rankin: [ true , false ] 
} 

console.table(muchacho)