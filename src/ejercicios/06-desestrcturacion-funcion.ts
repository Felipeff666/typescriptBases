/* DESESCTRUCTURACION DE ARGUMENTOS 
 */
export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto ={
    desc:'nokia A1',
    precio:150
}
const tableta: Producto ={
    desc:'samsung s4',
    precio:300
}

/*
1ra forma
function calculaISV( productos:Producto[]):number{
    let total=0;

    productos.forEach( (productos)=>{
        total+= productos.precio;
    } )
    return total * 0.15;
}
*/
export function calculaISV( productos:Producto[]):[number,number]{
    let total=0;

    productos.forEach( ({precio})=>{
        total+= precio;
    } )
    return [total,total * 0.15];
}

/*
1ra forma
const articulos = [telefono, tableta];
const isv = calculaISV(articulos);
console.log('Total',isv[0], 'ISV:',isv[1]);
*/

const articulos = [telefono, tableta];
const [isv,total] = calculaISV(articulos);
/* console.log('isv:',isv);
console.log('total:',total); */