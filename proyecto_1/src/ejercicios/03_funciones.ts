/*
    ===== Código de TypeScript =====
*/

function sumar (a: number,b: number): number{
    return (a + b);
}

const sumarFlecha = (a: number,b: number):number => {
    return (a + b);
}

function multiplicar (numero: number, base = 2, otroNumero?: number ): number {
    return numero * base;
}

const resultado = multiplicar(1,5);

//console.log(resultado);

interface PersonajeLoR{
    nombre: string;
    hp: number;
    mostrarHp: () => void
}

function curar(this: any, personaje: PersonajeLoR, curarX: number): void{
    personaje.hp += curarX;
    console.log(personaje);
    
}

const nuevoPersonaje: PersonajeLoR = {
    nombre: 'Legolas',
    hp: 100,
    mostrarHp (){
        console.log('Puntos de vida: ' + this.hp);
    }
}

//curar(nuevoPersonaje, 50);

nuevoPersonaje.mostrarHp