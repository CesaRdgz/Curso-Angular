import { Component, EventEmitter, Input, Output } from '@angular/core';


import { Personaje } from '../interfaces/dbz.interface';

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

  //Métodos

  @Output() onNuevoPersonaje:  EventEmitter<Personaje> = new EventEmitter();

   agregar(){
    if(this.nuevo.Nombre.trim().length === 0){
      return;
    }
    console.log( this.nuevo);

    this.onNuevoPersonaje.emit(this.nuevo);

    this.nuevo = {
      Nombre: '',
      Poder: 0
    }
  }

}
