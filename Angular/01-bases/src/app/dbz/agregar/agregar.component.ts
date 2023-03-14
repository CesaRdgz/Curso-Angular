import { Component, Input } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent{

  //Variables
  @Input() personajes: Personaje[] = []

  @Input() nuevo: Personaje = {
    Nombre: '',
    Poder: 0
  };

  @Input() agregar(){

  }
  

  //Métodos


}
