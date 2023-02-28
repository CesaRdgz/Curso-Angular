/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 100,
    segundo: 36,
    cancion: 'mess',
    detalles: {
        autor: 'Ed sheeran',
        anio: 2015,
    }
}

const {volumen, segundo, cancion, detalles } = reproductor;
const {autor} = detalles;

console.log('El volumen actual es de: ', volumen);
console.log('El segundo actual es de: ', segundo);
console.log('El cancion actual es de: ', cancion);
console.log('El autor actual es de: ', reproductor.detalles.autor);

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks']
const [p1, p2, p3] = dbz;

console.log('Personaje 1: ', dbz[0]);
console.log('Personaje 2: ', dbz[1]);
console.log('Personaje 3: ', dbz[2]);


console.log('Personaje 1: ', p1);
console.log('Personaje 2: ', p2);
console.log('Personaje 3: ', p3);