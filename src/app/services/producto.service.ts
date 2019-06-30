import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Http, Response, Headers } from '@angular/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Producto } from '../models/producto';
import { GLOBAL } from './global';
import { JsonPipe } from '@angular/common';

@Injectable()

export class ProductoService{
    public url:string;

    constructor(
        public _http:HttpClient
        ){
        this.url =GLOBAL.url;
    }

    getProductos(){
        return this._http.get(this.url+'productos');
    }
}
