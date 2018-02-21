import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService} from '../product/product.service';
import lodash from "lodash";


@Component({
  templateUrl: './proddetail.component.html',
  styleUrls: ['./proddetail.component.css']
})
export class ProddetailComponent implements OnInit {

  pageTableDetails:Object={};
  routeParam:string;
  obj:Object={};

  constructor(
      private _route: ActivatedRoute, 
      private _ProductService:ProductService,
      private _router: Router) {
  
   }

  ngOnInit() {
    this.routeParam= this._route.snapshot.paramMap.get('id')
    this._ProductService.getProducts()
    .subscribe(results =>{
        this.filterProd(results);
    });
  }

  filterProd(results){
    // this.obj= lodash.filter(results,{title:this.routeParam})
  }

  onBack(): void{
      this._router.navigate(['/product']);
  }


}
