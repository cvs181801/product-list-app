import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  @Input() receivedProducts: {Index: number, Image: string; Name: string; Code: string; Available: string; Price: number; Stars: number}[]= [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('receivedProducts', this.receivedProducts) 
    const Index = Number(this.route.snapshot.paramMap.get('Index'));
    //this.pageTitle += `: ${Index}`
    console.log('index for this page:', Index)
  }

}
