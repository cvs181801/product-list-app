import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-filter-by',
  templateUrl: './filter-by.component.html',
  styleUrls: ['./filter-by.component.css']
})
export class FilterByComponent implements OnInit {
  @Output() searchTermString =  new EventEmitter<string>(); //broad cast this from filter by to the parent, product list.
  searchTerm: string = '';

  sendSearchString() {
    this.searchTermString.emit(this.searchTerm)
  }

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
