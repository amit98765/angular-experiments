import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routing } from './routes';
import { ProductComponent } from './product.component';
import { ProductDescriptionComponent} from './product-description.component';
import { ChildComponent1 } from './child-component1/child-component1.component';
import { SellerComponent } from './seller/seller.component';

@NgModule({
  declarations: [
    AppComponent, ProductComponent, ProductDescriptionComponent, ChildComponent1, SellerComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule, routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
