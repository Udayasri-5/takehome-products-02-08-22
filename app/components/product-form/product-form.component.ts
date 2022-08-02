import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/common/category';
import { Product } from 'src/app/common/product';
import { ProductServicesService } from 'src/app/services/product-services.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  product : Product =  new Product(0,"","",0,"",0,0,new Date,new Date,0,"")
  category : Category[]
  isEditable : boolean = false;

  constructor(private service : ProductServicesService,private route: Router,private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.listOfCategories()
    this.activateRoute.paramMap.subscribe(()=>{this.getProductByID()})
  }

  listOfCategories(){
    this.service.getAllCategories().subscribe(data=>{
      console.log(data); 
      this.category = data;
    })
  }

  onSubmit(form:NgForm){
    if(this.isEditable){
    this.service.updateProduct(this.product).subscribe(data => {
      console.log(data)
      this.route.navigateByUrl("/product");
    });
    }else{
      this.service.saveProduct(this.product).subscribe(data => {
        console.log(data)
        this.route.navigateByUrl("/product");
      });
    }
     
  }

  getProductByID(){
    const proID = +this.activateRoute.snapshot.paramMap.get("proid");
    console.log(proID)
    if(proID > 0){
        this.isEditable = true
        this.service.getProductByID(proID).subscribe((data=>{
          this.product = data;
        }))
    }
  }

  backtoHome(){
    this.route.navigateByUrl("/product")
  }

}
