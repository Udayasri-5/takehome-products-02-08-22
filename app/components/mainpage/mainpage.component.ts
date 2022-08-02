import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }

 
  Buyer(){
    this.route.navigateByUrl("/shop")
  }
  Merchant(){
    this.route.navigateByUrl("/merchant")
  }

  

}
