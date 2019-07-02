import { Component } from '@angular/core';
import { Router, ActivatedRoute,Params} from '@angular/router';
import { ProductoService } from '../services/producto.service'
import { Producto } from '../models/producto';

@Component({
    selector: 'productos-list',
    templateUrl: './views/productos-list.html',
    providers: [ProductoService]
})
export class ProductosListComponent{
    public titulo:string;
    public productos:Producto[];
    public confirmado;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _productoService:ProductoService
    ){
        this.titulo = "Listado de productos";
        this.confirmado = null;
    }
    ngOnInit(){
        console.log("productos-list.component.ts cargado");
        this.getProducto();
    }

    getProducto(){
        this._productoService.getProductos().subscribe(
            result =>{
                if(result.code != 200){
                    console.log(result);
                }else{
                    this.productos = result.data;
                }
            },
            error => {
                console.log(<any>error);
            }
        );
    }

    

    borrarConfirm(id){
        this.confirmado = id;
    }

    cancelarConfirm(){
        this.confirmado = null;
    }

    onDeleteProduct(id){
        this._productoService.deleteProduct(id).subscribe(
            result =>{
                if(result.code == 200){
                    this.getProducto();
                }else{
                    alert('Error al borrar producto');
                }
            },
            error =>{
                console.log(error);
            }
        );
    }
}