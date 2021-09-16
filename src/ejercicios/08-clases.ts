class PersonaNormal{
    constructor(
        public nombre:string,
        public direccion:string
    ){}
}


class Heroe extends PersonaNormal{
    /* Esto no es recomendable */
   /* alterEgo: string;
   edad: number;
   nombreReal: number */
   constructor(
    public alterEgo: string,
    public edad: number,
    public nombreReal: string

   ) {
       super( nombreReal,'USA,NY' );
   }

}

const ironman = new Heroe('ironman',45,'Tonny');
console.log(ironman);