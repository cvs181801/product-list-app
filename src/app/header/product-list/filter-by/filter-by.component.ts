import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filter-by',
  templateUrl: './filter-by.component.html',
  styleUrls: ['./filter-by.component.css']
})
export class FilterByComponent implements OnInit {
  @Input() receivedProductList: string;
  constructor() { }

  ngOnInit(): void {
  }

}
