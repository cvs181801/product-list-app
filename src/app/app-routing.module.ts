import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './header/homepage/homepage.component';
import { ProductListComponent } from './header/product-list/product-list.component';
import { ProductPageComponent } from './header/product-list/product-page/product-page.component';

const routes : Routes = [
    { path: 'homepage', component: HomepageComponent },
    { path: 'product-list', component: ProductListComponent },
    //{ path: 'product-page', component: ProductPageComponent},
    { path: 'search/:searchString', component: ProductPageComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
