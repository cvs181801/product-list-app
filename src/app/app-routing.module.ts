import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './header/homepage/homepage.component';
import { ProductListComponent } from './header/product-list/product-list.component';
import { ProductPageComponent } from './header/product-list/product-page/product-page.component';
import { ProductGuard } from '../app/header/product-list/product-guard.guard';

const routes : Routes = [
    { path: 'homepage', component: HomepageComponent },
    { path: 'product-list', component: ProductListComponent },
    { path: 'product-page/:Index', canActivate: [ProductGuard], component: ProductPageComponent},
    { path: 'search/:searchTerm', component: ProductListComponent}
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
