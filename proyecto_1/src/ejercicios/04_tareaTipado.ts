/*
    ===== Código de TypeScript =====
*/
interface Superheroe {
    nombre: string;
    edad: number;
    direccion: direccion;
    mostrarDireccion: () => string
 }

 interface direccion {
    calle: string
    ciudad: string
    pais: string
 }

 const superheroe: Superheroe = {
    nombre : 'Spiderman',
    edad : 30,
    direccion: {
        calle: 'Main St',
        ciudad: 'NY',
        pais: 'EEUU'
    },
    mostrarDireccion () {
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
 }

 const direccion = superheroe.mostrarDireccion();
 console.log(direccion);