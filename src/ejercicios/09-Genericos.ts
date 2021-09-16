function queTiposoy<T>(argumento:T){
    return argumento;
}

let soySring = queTiposoy('Hola Mundo');
let soyNumero = queTiposoy(100);
let soyArreglo= queTiposoy([1,2,3,4,5,6]);
let soyExplicito = queTiposoy<number>(100);