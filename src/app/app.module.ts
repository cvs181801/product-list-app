import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './header/homepage/homepage.component';
import { ProductListComponent } from './header/product-list/product-list.component';
import { FilterByComponent } from './header/product-list/filter-by/filter-by.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    ProductListComponent,
    FilterByComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//may need to add angular router afeter all