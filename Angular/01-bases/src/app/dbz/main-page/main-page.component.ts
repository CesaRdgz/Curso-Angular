import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{

  //Variables

    nuevo: Personaje = {
      Nombre: 'Truncks',
      Poder: 7000
    }

  //Getters y Setters

  //Constructores
    constructor(){ }

  //Métodos


}
