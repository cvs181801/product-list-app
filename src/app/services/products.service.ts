import { Injectable } from "@angular/core";
import { IProduct } from "../shared/models/IProduct";


@Injectable({
    providedIn: 'root',
  })
  
export class ProductsArray {
getProducts(): IProduct[]  {
  return [
      {Index: 1, Image: 'https://i.ebayimg.com/images/g/keMAAOSwiftgAT5r/s-l400.jpg', Name: 'Screaming Hot Pink Rubber Chicken', Code: 'TBX-009', Available: 'May 1 2023', Price: 45, Stars: 4.5},
      {Index: 2, Image: 'https://images.halloweencostumes.com/products/45818/1-1/boys-old-man-costume-kit.jpg', Name: 'Old Man Suit, Child Size', Code: 'GKD-3094', Available: 'Oct 13 2022', Price: 75, Stars: 5},
      {Index: 3, Image: 'https://www.whatech.com/images/featured/20075/roquefort-cheese.jpg', Name: 'Gourmet Fake Rocquefort Cheese', Code: 'VKD-443', Available: 'June 13 2022', Price: 15.505, Stars: 3.5},
      {Index: 4, Image: 'https://i5.walmartimages.com/asr/c6df344c-8925-40ab-a7a9-ca3e04fd4cd1_1.471ebf91a6d0c9e2adfbc82691d6b1e7.jpeg', Name: 'Inflatable Play Palace for Cats', Code: 'DQD-330', Available: 'Dec 1 2020', Price: 150, Stars: 2.9},
      {Index: 5, Image: 'https://ecomprofithub.com/wp-content/uploads/2021/06/Screenshot_38-1-300x297.png', Name: 'Mafia Style Toilet Seat With Lid', Code: 'GKG-100', Available: 'Dec 12 2022', Price: 37.575, Stars: 4.1}
    ]
  }
}