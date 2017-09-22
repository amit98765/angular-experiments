import { Routes, RouterModule } from '@angular/router';

import {AppComponent} from './app.component';
import {ProductComponent } from './product.component';
import {ProductDescriptionComponent} from './product-description.component';

const route: Routes = [
  
    { path: 'product', component: ProductComponent},
    { path: 'product/:id', component: ProductDescriptionComponent}
]

export const routing = RouterModule.forRoot(route);
    
