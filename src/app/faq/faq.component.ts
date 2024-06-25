import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../services.service';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {

  constructor(public service:HttpService, public route:ActivatedRoute, private titleService:Title) {
    this.titleService.setTitle("FAQ - Apari")
    
  }
}
