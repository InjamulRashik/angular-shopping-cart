import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDataService } from 'src/app/services/product-data.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  selectedProducts = [] as any;
  products: any;
  constructor(private productData: ProductDataService, router: Router) {
    this.productData.products().subscribe((data) => {
      this.products = data;
    });
  }
  ngOnInit(): void {}

  onAddToCart(product: any) {
    this.selectedProducts.push(product);
    console.log(this.selectedProducts);
  }
}
