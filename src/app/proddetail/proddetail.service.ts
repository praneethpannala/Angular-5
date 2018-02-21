import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRoute, Router} from '@angular/router';
import { ProductService} from '../product/product.service';
import lodash from "lodash";



@Injectable()
export class ProdGuardService implements CanActivate{

    arr ={};

  constructor(
      private route: ActivatedRoute, 
      private _ProductService:ProductService,
      private _router: Router) { }

    
  canActivate(route): boolean {
    let id = +route.url[1].path;
    
    if(!isNaN(id)){
        alert('Invalid param');
        this._router.navigate(['/product']);
        return false;
    }
      return true;
      
  }

}
