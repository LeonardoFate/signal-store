import { Component, inject } from '@angular/core';
import { productService } from '../../data-acces/products.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styles: ``,
  providers:[productService],
})
export default class  ProductListComponent {
private productsService = inject(productService)

constructor(){
    this.productsService.getProducts().subscribe((products)=>console.log(products)
);
}
}
