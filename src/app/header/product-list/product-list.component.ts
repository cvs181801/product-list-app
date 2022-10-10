import { Component, OnInit } from '@angular/core';
//import Products from '../../../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: {Image: string; Name: string; Code: string; Available: string; Price: number; Stars: number}[] = [
    {Name: 'Hot Pink Rubber Chicken (Blue Eyes)', Code: 'TBX009', Image: '#', Available: 'May 1 2023', Price: 45, Stars: 4.5},
    {Name: 'Old Man Suit, Child Size', Code: 'GKD3094', Image: '#', Available: 'Oct 13 2022', Price: 75, Stars: 5},
    {Name: 'Gourmet Fake Rocquefort Cheese', Code: 'VKD443', Image: '#', Available: 'June 13 2022', Price: 15.5, Stars: 3.5},
    {Name: 'Inflatable Play Palace for Cats', Code: 'DQD330', Image: '#', Available: 'Dec 1 2020', Price: 150, Stars: 2.9},
    {Name: 'Mafia Style Toilet Seat With Lid', Code: 'GKG100', Image: '#', Available: 'Dec 12 2022', Price: 37.5, Stars: 4.1}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
