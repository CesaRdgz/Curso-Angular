import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{

  //Constructores
    constructor(private dbzService: DbzService){}

  //Variables
    personajes: Personaje[] = [
      {
        Nombre: 'Goku',
        Poder: 15000
      },
      {
        Nombre: 'Vegetta',
        Poder: 777
      }
  
    ]
  
    nuevo: Personaje = {
      Nombre: 'Truncks',
      Poder: 7000
    }

  //Métodos
   agregar(){
    this.personajes.push(this.nuevo);
    this.nuevo = {
      Nombre: '',
      Poder: 0
    }
    console.log(this.personajes);
   }
  
   cambiarNombre(event: any){
    if(this.nuevo.Nombre.trim().length === 0){
      return;
    }
   }
  
   agregarNuevoPersonaje(argumento: Personaje){
    console.log(argumento)
    this.personajes.push(argumento);
   }

}
