/*
    ===== Código de TypeScript =====
*/

let habilidades : (string|number)[] = ['hielo', 'fuego'];

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?:string;
}

const personaje: Personaje = {
    nombre: 'Nano',
    hp: 100,
    habilidades: ['hielo', 'fuego']
}

console.table(personaje);