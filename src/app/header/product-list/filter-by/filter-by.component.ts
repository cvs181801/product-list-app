import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-filter-by',
  templateUrl: './filter-by.component.html',
  styleUrls: ['./filter-by.component.css']
})
export class FilterByComponent implements OnInit {
  // @Input() receivedProductList: string;
  searchTerm: string = '';

  onUpdateSearchString(event: any){
    this.searchTerm = (<HTMLInputElement>event.target).value.toLowerCase();
  }

  search(): void {
    if(this.searchTerm) {
      this.router.navigateByUrl('/search/' + this.searchTerm)
    } else {
      this.router.navigateByUrl('product-list')
    }
  }


  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params.searchTerm){
        this.searchTerm = params.searchTerm;
      }
    })

   
  }

}
