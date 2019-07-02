import { Component } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';

import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';
import { GLOBAL } from '../services/global';

@Component({
    selector: 'producto-edit',
    templateUrl: './views/producto-add.html',
    providers: [ProductoService]
})

export class ProductoEditComponent{
    public titulo:string;
    public producto:Producto;
    public filesToUpload;
    public resultUpLoad;
    public isEdit;

    constructor(
        private _productoService:ProductoService,
        private _route:ActivatedRoute,
        private _router:Router
    ){
        this.titulo = "Editar producto";
        this.producto = new Producto(1,'','',0,'');
        this.isEdit = true;
    }

    ngOnInit(){
        console.log(this.titulo);
        this.getProducto();
    }

    onSubmit(){
        console.log(this.producto);
        if(this.filesToUpload && this.filesToUpload.length >=1){
            this._productoService.makeFileRequest(GLOBAL.url+'upload-file',[],this.filesToUpload).then((result) => {
                console.log(result.filename);
                this.producto.imagen = result.filename;
                this.updateProducto();
            },error =>{
                console.log(error);
            }
            );
        }else{
            this.updateProducto();
        }
    }
    updateProducto(){
        this._route.params.forEach((params:Params) =>{
            let id = params['id'];
            this._productoService.editProduct(id,this.producto).subscribe(
                result =>{
                    if(result.code == 200){
                        this._router.navigate(['/producto',id]);
                    }else{
                        
                    }
                },
                error =>{
                    console.log(<any>error);
                }
            );
        });
    }
    

    fileChangeEvent(fileInput:any){
        this.filesToUpload = <Array<File>>fileInput.target.files;
        console.log(this.filesToUpload);
    }

    getProducto(){
        this._route.params.forEach((params:Params) =>{
            let id = params['id'];
            this._productoService.getProductoId(id).subscribe(
                result =>{
                    if(result.code == 200){
                        this.producto = result.data;
                    }else{
                        this._router.navigate(['/productos']);
                    }
                },error => {
                    console.log(error);
                }
            );
        });
    }
}