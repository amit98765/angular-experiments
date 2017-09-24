import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductComponent } from './product.component';
import { ProductDescriptionComponent } from './product-description.component';
import { ChildComponent1 } from './child-component1/child-component1.component';
import { SellerComponent } from './seller/seller.component';

const route: Routes = [

    { path: 'product', component: ProductComponent },
    {
        path: 'product/:id',  children: [
            { path: '', component: ChildComponent1 },
            { path: 'seller/:id', component: SellerComponent }
        ]
    }
]

export const routing = RouterModule.forRoot(route);

