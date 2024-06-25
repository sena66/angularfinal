import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../services.service';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  
  public productList:any[] = [];
  public filteredList:any[] = [];
  public queryCategory:any;

  constructor(public service:HttpService, public route:ActivatedRoute, private titleService:Title) {

    this.titleService.setTitle("Products - Apari")

    this.route.queryParams.subscribe(info => {
      console.log(info);
      this.queryCategory = info
    })

    
    this.service.getProducts().subscribe(data =>{
      console.log(data);
      this.productList = data;
      this.filteredList = this.productList.filter(item => item.category == this.queryCategory.test)

      if(this.filteredList.length == 0) {
        this.filteredList = this.productList
      }

      console.log(this.filteredList);
      
    })

    

  }

}