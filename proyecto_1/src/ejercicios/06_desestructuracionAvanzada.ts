/*
    ===== Código de TypeScript =====
*/

export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Nokia A1',
    precio: 150
}

const tablet: Producto = {
    desc: 'ipad Air',
    precio: 350
}

export function calculaISV(productos: Producto[]){
    let total = 0;
    productos.forEach( (producto) => {
        total += producto.precio;
    });

    return total * 0.15
}

const articulos =  [telefono, tablet];
const isv =  calculaISV(articulos);
console.log(isv)