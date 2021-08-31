import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDataService } from 'src/app/services/product-data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  productId: any;
  product: any;
  products: any;
  constructor(
    private productData: ProductDataService,
    router: Router,
    private route: ActivatedRoute
  ) {
    this.productData.products().subscribe((data) => {
      this.products = data;
    });
  }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
  }
}
