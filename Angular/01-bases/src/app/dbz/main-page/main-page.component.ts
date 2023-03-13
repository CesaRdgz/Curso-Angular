import { Component, OnInit } from '@angular/core';

interface Personaje {
  Nombre: string;
  Poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{

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

}
