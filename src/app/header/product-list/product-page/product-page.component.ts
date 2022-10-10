import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  @Input() receivedProduct: {Index: number, Image: string; Name: string; Code: string; Available: string; Price: number; Stars: number};

  constructor() { }

  ngOnInit(): void {
    console.log(this.receivedProduct) //this isn't coming through to this compoinent correctly. showing undefined...
  }

}
