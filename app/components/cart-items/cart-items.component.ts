import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  public  product:any=[]
  public grandTotal:number=0;

  constructor(private cservice:CartServiceService,private route:Router) { }

  ngOnInit(): void {
    this.cservice.getProducts().subscribe(res=>{
      this.product=res;
    });
  }
  removeItem(item:any){
    this.cservice.removecartItem(item)
  }

  backtoShop(){
    this.route.navigateByUrl('/shop')
  }

}
