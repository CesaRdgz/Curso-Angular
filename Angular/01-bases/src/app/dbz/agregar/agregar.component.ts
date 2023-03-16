import { Component, EventEmitter, Input, Output } from '@angular/core';


import { Personaje } from '../interfaces/dbz.interface';
import { DbzModule } from '../dbz.module';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent{

  //Variables

  @Input() nuevo: Personaje = {
    Nombre: '',
    Poder: 0
  };

  //Constructor
  constructor (private dbzService: DbzService){

  }

  //Métodos

  //@Output() onNuevoPersonaje:  EventEmitter<Personaje> = new EventEmitter();

   agregar(){
    if(this.nuevo.Nombre.trim().length === 0){
      return;
    }
    console.log( this.nuevo);

    this.dbzService.agregarPersonaje(this.nuevo);
  //  this.onNuevoPersonaje.emit(this.nuevo);

    this.nuevo = {
      Nombre: '',
      Poder: 0
    }
  }

}
