import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsArray } from 'src/app/services/products.service';
import { IProduct } from 'src/app/shared/models/IProduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  searchString: string = 'search by product name';
  newProductsArr = [];
  showProductImg = false;
  displayBtnText: string = 'Show Product Images';

  private _listFilter: string = ''; //instead of using params.searchTerm to create a list search feature, you can use a getter and setter.
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In setter', value);
  }

  products: IProduct[] = [];

  toggleImg() {
    if(this.showProductImg) {
      this.showProductImg = false;
      this.displayBtnText = 'Show Product Images';
    } else {
      this.showProductImg = true;
      this.displayBtnText = 'Hide Product Images';
    }
  }

  constructor(private route:ActivatedRoute, private productsService: ProductsArray) { }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();

    this.route.params.subscribe(params => {
      console.log('params.searchTerm', params.searchTerm)
      if (params.searchTerm) {
        this.newProductsArr = this.products.filter(product => product.Name.toLowerCase().includes(params.searchTerm.toLowerCase()))
      } else {
        this.newProductsArr = this.products;
      }
    })

    console.log('products :', this.products, 'newProductsArr :', this.newProductsArr)
    this.listFilter = 'BOO'
  }

}
