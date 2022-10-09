import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './header/homepage/homepage.component';
import { ProductListComponent } from './header/product-list/product-list.component';

const routes : Routes = [
    { path: 'homepage', component: HomepageComponent },
    { path: 'product-list', component: ProductListComponent }
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
