import { Injectable} from '@angular/core';
import {Data} from './product.component';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/do';

@Injectable()

export class ProductService{

    private prodUrl:string= 'http://demo0840875.mockable.io/productDetails';

    constructor(private _http:HttpClient){}
    requests;

    getProducts(){
        return this._http.get(this.prodUrl);
    }

}