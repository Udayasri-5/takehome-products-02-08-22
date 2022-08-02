import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { ProductServicesService } from 'src/app/services/product-services.service';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {
  display = "none";
  products : Product[]
  product :Product = new Product(0,"","",0,"",0,0,new Date,new Date, 0,"")
  constructor(private service : ProductServicesService,private cservice: CartServiceService,private route : Router,private activateRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.listOfProducts()
  }

  listOfProducts(){
    this.service.getAllProducts().subscribe(data=>{
      console.log(data); 
      this.products = data;
    })
  }
  backtoHome(){
    this.route.navigateByUrl("/")
  }

  deleteProduct(productID : number){

  }

  updateProduct(productID : number){

  }

  add(e:any){

    this.cservice.addtoCart(e)
    this.route.navigateByUrl("/cart")
    
    }

  openModal(proid : number) {
   console.log(proid)
   if(proid > 0){
    this.service.getProductByID(proid).subscribe(data => {
      this.product = data
    console.log(data)
  })
   } 
    this.display = "block";
  }
  
  onCloseHandled() {
    this.display = "none";
    
  } 
  

}
