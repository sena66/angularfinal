import { Component } from '@angular/core';
import { HttpService } from '../services.service';
import { ActivatedRoute } from '@angular/router';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public categories:String[] = ["men's clothing", "women's clothing", "jewelery", "electronics"]


  public productList:any[] = [];
  public filteredList:any[] = [];
  public queryCategory:any;

  constructor(public service:HttpService, public route:ActivatedRoute, private titleService:Title) {

    this.titleService.setTitle("Apari");

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

