import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  {
    path:"home", 
    component: HomeComponent
  },
  
  {
    path:'products',
    component: ProductsComponent
  },

  {
    path:'faq',
    component: FaqComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
