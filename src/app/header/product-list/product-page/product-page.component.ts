import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ProductsArray } from 'src/app/services/products.service';
import { IProduct } from 'src/app/shared/models/IProduct';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  products: IProduct[] = [];
  newProduct=[] ;

  constructor(private route: ActivatedRoute, private productsService: ProductsArray) { }

  ngOnInit(): void {
    const Index = Number(this.route.snapshot.paramMap.get('Index'));
    console.log('index for this page:', Index)
    this.products = this.productsService.getProducts();
    console.log('products: ', this.products)
    this.newProduct = this.products.filter(product => product.Index === Index);
    console.log('newproduct: ', this.newProduct)
  }
}
