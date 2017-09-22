import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'product',
    template: '<h1>Details for product {{productId}}',
    styles: ['.product{background:cyan;}']
})

export class ProductDescriptionComponent{
    productId:string;
    constructor(route: ActivatedRoute)
    {
        this.productId= route.snapshot.paramMap.get('id');
    }
}

