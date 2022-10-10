import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  @Input() receivedProduct: {Image: string; Name: string; Code: string; Available: string; Price: number; Stars: number};

  constructor() { }

  ngOnInit(): void {
  }

}
