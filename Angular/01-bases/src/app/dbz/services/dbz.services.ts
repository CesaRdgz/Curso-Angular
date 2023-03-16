import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

    //Variables
    private _personajes: Personaje[] = [
        {
          Nombre: 'Goku',
          Poder: 15000
        },
        {
          Nombre: 'Vegetta',
          Poder: 777
        }
    
      ]

    //Getters y Setters
    get personajes(){
        return[...this._personajes]
    }

    //Constructores
    constructor() {}

    //Métodos
    agregarPersonaje(personaje: Personaje) {
        this._personajes.push(personaje);
        console.log(personaje.Nombre + " añadido!")
    }
}