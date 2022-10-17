import { Component, OnInit } from '@angular/core';
//import Products from '../../../products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  searchString: string = 'search by product name';
  testArr = [];

  products: {Index: number, Image: string; Name: string; Code: string; Available: string; Price: number; Stars: number}[] = [
    {Index: 1, Name: 'Hot Pink Rubber Chicken (Blue Eyes)', Code: 'TBX009', Image: '#', Available: 'May 1 2023', Price: 45, Stars: 4.5},
    {Index: 2, Name: 'Old Man Suit, Child Size', Code: 'GKD3094', Image: '#', Available: 'Oct 13 2022', Price: 75, Stars: 5},
    {Index: 3, Name: 'Gourmet Fake Rocquefort Cheese', Code: 'VKD443', Image: '#', Available: 'June 13 2022', Price: 15.5, Stars: 3.5},
    {Index: 4, Name: 'Inflatable Play Palace for Cats', Code: 'DQD330', Image: '#', Available: 'Dec 1 2020', Price: 150, Stars: 2.9},
    {Index: 5, Name: 'Mafia Style Toilet Seat With Lid', Code: 'GKG100', Image: '#', Available: 'Dec 12 2022', Price: 37.5, Stars: 4.1}
  ]

  onUpdateSearchString(event: any){
    this.searchString = (<HTMLInputElement>event.target).value.toLowerCase();
  }

  onSubmitSearch(){
    this.products.forEach(product => {
      product.Name.toLowerCase().includes(this.searchString.toLowerCase()) ? this.testArr.push('yuep') : this.testArr.push('nada') ;
      
    })
  }

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.testArr)
    this.route.params.subscribe(params => {
      if (params.searchString) {
        //this.newArr = this.newArr.push(products)
        //grab the product that matches the search string ane push it into new arr
      } else {
        //just show all products as default
      }
    })
  }

}
//for each product, render details to product list, and create it's own page with it's own route. ?? is this possible???