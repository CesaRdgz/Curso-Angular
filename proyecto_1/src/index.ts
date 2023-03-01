/*
    ===== Código de TypeScript =====
*/

class Heroe{
    alterEgo: string;
    edad: number;
    nombreReal: string;

    constructor(alterEgo, edad, nombreReal){
        alterEgo = this.alterEgo;
        edad = this.edad;
        nombreReal = nombreReal;
    }
}


const IronMan = new Heroe();

console.log(IronMan)