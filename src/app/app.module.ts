import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

// Bootstrap Modules
import { BsDropdownModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';

// My Modules
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CapitalisePipe } from './product/product.pipeFilter';
import {StarRatingComponent} from './rating/rating.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProddetailComponent } from './proddetail/proddetail.component';

// Services
import {ProductService} from './product/product.service';
import {ProdGuardService} from './proddetail/proddetail.service';

// Routing
const routing: Routes = [
  { path: 'product', component: ProductComponent},
  // CanActivate helps to restrict the navigation if incorrect params has been generated
  { path: 'product/:id', canActivate: [ProdGuardService], component: ProddetailComponent},
  { path: 'aboutUs', component:  AboutUsComponent},
  { path: '', redirectTo: '/product', pathMatch: 'full' }
];

// Module declaration
@NgModule({

  // Each module declaration
  declarations: [
    AppComponent,
    ProductComponent,
    CapitalisePipe,
    StarRatingComponent,
    AboutUsComponent,
    ProddetailComponent
  ],

  // Import external modules
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,

    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot(routing, { useHash: true })
  ],

  // Services
  providers: [
    ProductService,
    ProdGuardService
  ],

  // Initialisation of application
  bootstrap: [AppComponent]
})
export class AppModule { }
