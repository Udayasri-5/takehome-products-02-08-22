import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  productDetails(){
    this.route.navigateByUrl("/product")
  }

  categoryDetails(){
    this.route.navigateByUrl("/productCategories")
  }

  backToMain(){
    this.route.navigateByUrl("/")
  }


}
