import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `<h1> {{title}}</h1>

    <button (click)="acumular(base)"> + 1 </button>
    <span>{{numero}}</span>
    <button (click)="acumular(-base)"> - 1 </button>`
    
})
export class ContadorComponent{

    title = 'Contador App';
    numero: number = 10;
    
    base: number = 10
    
    acumular(valor : number){
        this.numero += valor;
    }
      
}