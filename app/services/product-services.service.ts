import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,map } from 'rxjs';
import { Category } from '../common/category';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {
  producturl = "http://localhost:8080/api/product"
  categoryurl = "http://localhost:8080/api/category"


  constructor(private httpclient : HttpClient) { }
  getAllProducts() : Observable<Product[]>{
    console.log(this.httpclient.get<getProductResponse>(this.producturl).pipe(map(response => response._embedded.products)))
    return this.httpclient.get<getProductResponse>(this.producturl).pipe(map(response => response._embedded.products))
  }

  getAllCategories() : Observable<Category[]>{
    console.log(this.httpclient.get<getCategoryResponse>(this.categoryurl).pipe(map(response => response._embedded.productCategories)))
    return this.httpclient.get<getCategoryResponse>(this.categoryurl).pipe(map(response => response._embedded.productCategories))
  }

  getProductByID(Id : number) : Observable<Product>{
    const prodIDURL = "http://localhost:8080/api/product/"+Id
    return this.httpclient.get<Product>(prodIDURL);

  }

  getCategoryByID(Id : number) : Observable<Category>{
    const catIDURL = "http://localhost:8080/api/category/"+Id
    return this.httpclient.get<Category>(catIDURL);

  }

  getProductByName(productName : string) : Observable<Product[]>{
    const prodNameURL = "http://localhost:8080/api/product/search/findByProductNameContainsIgnoreCase/?ProductName=" + productName
    return this.httpclient.get<getProductResponse>(prodNameURL).pipe(map(response => response._embedded.products))
  }

  updateProduct(product : Product):Observable<Product>{
    console.log(product)

    const httpOptions = {
      headers: new HttpHeaders({
        'content-type' : 'application/json',
        'Authorization' : 'auth-token',
        'Access-Control-Allow-origin' : '*'
      })
    };
    console.log(this.httpclient.put<Product>(this.producturl+`/${product.productID}`,product,httpOptions))
    return this.httpclient.put<Product>(this.producturl+`/${product.productID}`,product,httpOptions)
  }

  saveProduct(product :Product):Observable<Product>{
    console.log(product)
  
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type' : 'application/json',
        'Authorization' : 'auth-token',
        'Access-Control-Allow-origin' : '*'
      })
    };
    console.log(this.httpclient.post<Product>(this.producturl,product,httpOptions))
    return this.httpclient.post<Product>(this.producturl,product,httpOptions);
    }

    saveCategory(category : Category):Observable<Category>{
      console.log(category)
    
      const httpOptions = {
        headers: new HttpHeaders({
          'content-type' : 'application/json',
          'Authorization' : 'auth-token',
          'Access-Control-Allow-origin' : '*'
        })
      };
      console.log(this.httpclient.post<Category>(this.categoryurl,category,httpOptions))
      return this.httpclient.post<Category>(this.categoryurl,category,httpOptions);
      }

    deletepRODUCT(productID :number): Observable<Product>{

      const httpOptions = {
        headers: new HttpHeaders({
          'content-type' : 'application/json',
          'Authorization' : 'auth-token',
          'Access-Control-Allow-origin' : '*'
        })
      };
      console.log(this.httpclient.delete<Product>(this.producturl+`/${productID}`,httpOptions))
      return this.httpclient.delete<Product>(this.producturl+`/${productID}`,httpOptions);
    }

    updateCategory(category : Category):Observable<Category>{
      console.log(category)
  
      const httpOptions = {
        headers: new HttpHeaders({
          'content-type' : 'application/json',
          'Authorization' : 'auth-token',
          'Access-Control-Allow-origin' : '*'
        })
      };
      console.log(this.httpclient.put<Category>(this.categoryurl+`/${category.categoryID}`,category,httpOptions))
      return this.httpclient.put<Category>(this.categoryurl+`/${category.categoryID}`,category,httpOptions)
    }

    deleteCategory(categoryID :number): Observable<Category>{

      const httpOptions = {
        headers: new HttpHeaders({
          'content-type' : 'application/json',
          'Authorization' : 'auth-token',
          'Access-Control-Allow-origin' : '*'
        })
      };
      console.log(this.httpclient.delete<Category>(this.categoryurl+`/${categoryID}`,httpOptions))
      return this.httpclient.delete<Category>(this.categoryurl+`/${categoryID}`,httpOptions);
    }

   
  
}
interface getProductResponse {
  _embedded : {
    products : Product[]
  }
}

interface getCategoryResponse {
  _embedded : {
    productCategories : Category[]
  }
}



