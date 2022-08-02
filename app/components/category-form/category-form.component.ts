import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/common/category';
import { ProductServicesService } from 'src/app/services/product-services.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  productCategories : Category[];
  category : Category = new Category(0,"");
  isEditable : boolean= false;
  constructor(private service : ProductServicesService,private route: Router,private activeRoute : ActivatedRoute) { }
  
  ngOnInit(): void {
    this.listOfCategories()
    this.activeRoute.paramMap.subscribe(() =>{
      this.listOfCategories()});

      this.activeRoute.paramMap.subscribe(()=>{this.getCategoryByID()})
  }

  listOfCategories(){
    this.service.getAllCategories().subscribe(data=>{
      console.log(data); 
      this.productCategories = data;
    })
  }

  getCategoryByID(){
    const catID = +this.activeRoute.snapshot.paramMap.get("catid");
    console.log(catID)
    if(catID > 0){
        this.isEditable = true
        this.service.getCategoryByID(catID).subscribe((data=>{
          this.category = data;
        }))
    }
  }

  onSubmit(form:NgForm){
   // this.productCategories.push(form.value)
   if(this.isEditable){
    this.service.updateCategory(this.category).subscribe(data => {
      console.log(data)
      this.route.navigateByUrl("/productCategories");
    });
   }else{
    this.service.saveCategory(this.category).subscribe(data => {
      console.log(data)
      this.route.navigateByUrl("/productCategories");
    });
  }

  }

  backtoHome(){
    this.route.navigateByUrl("/productCategories")
  }
}
