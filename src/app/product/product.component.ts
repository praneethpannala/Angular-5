import { Component, TemplateRef , ViewChild, OnInit } from '@angular/core';
import { BsModalService,BsModalRef , ModalDirective } from 'ngx-bootstrap';
import { ProductService} from './product.service';

export interface Data{
    [key:number]:{
        title: string,
        description: string,
        status: string,
        color: string,
        city: string,
        state: string,
        starRating: number,
        zip: number
    }
}

@Component({
    selector: 'product-details',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})

export class ProductComponent {
    @ViewChild('lgModal') lgModal: ModalDirective;

    pageTitle: string = 'App Works';
    showStatusVar: Boolean = false;
    modalRef: BsModalRef;
    obj: Data= {};
    _filterProduct: string;
    filteredProduct: any[];
    pageTableDetails: any;
   
    constructor(private modalService: BsModalService,private _ProductService: ProductService ) {
        
    }

    get filterProduct():string{
        return this._filterProduct;
    }
    config={};
    set filterProduct(value:string){
        this._filterProduct= value;
        this.filteredProduct= this._filterProduct? this.filterFunction(this._filterProduct): this.pageTableDetails;
    }

    ngOnInit(): void{
        let contents: Object={};
        this.pageTableDetails= this._ProductService.getProducts()
            .subscribe(results =>{
                this.pageTableDetails= results;
                this.filteredProduct = this.pageTableDetails;
            });
    }

    showStatus():void {
        this.showStatusVar= !this.showStatusVar;
    }

    addDetail(template: TemplateRef<any>){

        this.modalRef = this.modalService.show(template);
    }

    saveDetails(data):void{
        let flag= true;
        for (let  i= 0;  i< this.pageTableDetails.length; i++) {
            if (data == this.pageTableDetails[i]) {
                this.pageTableDetails[i]= data;
                break;
            } else {
                this.pageTableDetails.push(this.obj);
                break;
            }
        }
        
        this.lgModal.hide();
    }

    editDetails(info): void{
        this.lgModal.show();
        this.obj= info;
        console.log(info);
    }

    filterFunction(filterVal: string): Data[]{
       let  _filterVal= filterVal.toLocaleLowerCase();
        return this.pageTableDetails.filter(product => {
            return product.description.toLocaleLowerCase().indexOf(_filterVal) !== -1
        })
            
    }

}

