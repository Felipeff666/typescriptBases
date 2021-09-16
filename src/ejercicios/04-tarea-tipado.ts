
import { JsonMinusNumericLiteral, StringLiteralType } from "typescript";

interface DatosSH{
    nombre:string;
    edad:number;
    direccion:{
        calle:string;
        pais:string;
        ciudad:string
    };
    mostrarDireccion:()=>string;

}

/* OTRA OPCION MAS OPTIMA ES APLICAR LAS INTERFACES PARA INTERFACES 
interface DatosSH{
    nombre:string;
    edad:number;
    direccion:direccion;
    mostrarDireccion:()=>string;
}

interface direccion{
        calle:string;
        pais:string;
        ciudad:string
}

*/


const superHeroe:DatosSH = {
    nombre:'Spiderman',
    edad: 30,
    direccion:{
        calle:'main ST',
        pais:'USA',
        ciudad:'NY'
    },
    mostrarDireccion(){
        return this.nombre + ', '+this.direccion.ciudad+','+this.direccion.pais;
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);