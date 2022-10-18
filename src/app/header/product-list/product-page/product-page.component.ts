import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ProductsArray } from 'src/app/services/products.service';
import { IProduct } from 'src/app/shared/models/IProduct';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  //@Input() receivedProducts: {Index: number, Image: string; Name: string; Code: string; Available: string; Price: number; Stars: number}[]= [];
  products: IProduct[] = [];
  //newProduct:{Index: number; Image: string; Name: string; Code: string; Available: string; Price: number; Stars: number};
  newProduct=[] ;

  constructor(private route: ActivatedRoute, private productsService: ProductsArray) { }

  ngOnInit(): void {
   // console.log('receivedProducts', this.receivedProducts) 
    const Index = Number(this.route.snapshot.paramMap.get('Index'));
    console.log('index for this page:', Index)
    this.products = this.productsService.getProducts();
    console.log('products: ', this.products)
    this.newProduct = this.products.filter(product => product.Index === Index);
    console.log('newproduct: ', this.newProduct)
  }

}
