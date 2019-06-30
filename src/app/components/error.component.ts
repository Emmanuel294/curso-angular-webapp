import { Component } from '@angular/core';

@Component({
    selector: 'error',
    templateUrl: './views/error.html'
})
export class ErrorComponent{
    public titulo:string;

    constructor(){
        this.titulo = "ERROR!! PAGINA NO ENCONTRADA";
    }

    ngOnInit(){
        console.log('Componente error.component.ts cargado');
    }
}