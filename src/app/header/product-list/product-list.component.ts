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
  showProductImg = false;


  products: {Index: number, Image: string; Name: string; Code: string; Available: string; Price: number; Stars: number}[] = [
    {Index: 1, Image: 'https://i.ebayimg.com/images/g/keMAAOSwiftgAT5r/s-l400.jpg', Name: 'Hot Pink Rubber Chicken (Blue Eyes)', Code: 'TBX009', Available: 'May 1 2023', Price: 45, Stars: 4.5},
    {Index: 2, Image: 'https://images.halloweencostumes.com/products/45818/1-1/boys-old-man-costume-kit.jpg', Name: 'Old Man Suit, Child Size', Code: 'GKD3094', Available: 'Oct 13 2022', Price: 75, Stars: 5},
    {Index: 3, Image: 'https://www.whatech.com/images/featured/20075/roquefort-cheese.jpg', Name: 'Gourmet Fake Rocquefort Cheese', Code: 'VKD443', Available: 'June 13 2022', Price: 15.5, Stars: 3.5},
    {Index: 4, Image: 'https://i5.walmartimages.com/asr/c6df344c-8925-40ab-a7a9-ca3e04fd4cd1_1.471ebf91a6d0c9e2adfbc82691d6b1e7.jpeg', Name: 'Inflatable Play Palace for Cats', Code: 'DQD330', Available: 'Dec 1 2020', Price: 150, Stars: 2.9},
    {Index: 5, Image: 'https://ecomprofithub.com/wp-content/uploads/2021/06/Screenshot_38-1-300x297.png', Name: 'Mafia Style Toilet Seat With Lid', Code: 'GKG100', Available: 'Dec 12 2022', Price: 37.5, Stars: 4.1}
  ]

  onUpdateSearchString(event: any){
    this.searchString = (<HTMLInputElement>event.target).value.toLowerCase();
  }

  onSubmitSearch(){
    this.products.forEach(product => {
      product.Name.toLowerCase().includes(this.searchString.toLowerCase()) ? this.testArr.push('yuep') : this.testArr.push('nada') ;
      
    })
  }

  toggleImg() {
    if(this.showProductImg) {
      this.showProductImg = false;
    } else {
      this.showProductImg = true;
    }
  }

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log('params.searchTerm', params.searchTerm)
      if (params.searchTerm) {
        // this.products.forEach(product => {
        //   product.Name.toLowerCase().includes(params.searchTerm.toLowerCase()) ? this.testArr.push(product) : this.testArr.push({}) ; 
        // })
        this.testArr = this.products.filter(product => product.Name.toLowerCase().includes(params.searchTerm.toLowerCase()))
      } else {
        this.testArr = this.products;
      }
    })
  }

}
