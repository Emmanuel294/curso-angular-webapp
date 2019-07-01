import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'

import { ProductoService } from '../services/producto.service'; 
import { Producto } from '../models/producto';

@Component({
    selector: 'producto-detalle',
    templateUrl: '../views/producto-detail.html',
    providers: [ProductoService]
})
export class ProductoDetalleComponent{
    public producto:Producto;

    constructor(
        private _productoService:ProductoService,
        private _route:ActivatedRpute,
        private _router:Router 
    ){

    }
    
    ngOnInit(){
        console.log('producto-detail.component.ts cargado');
    }
}