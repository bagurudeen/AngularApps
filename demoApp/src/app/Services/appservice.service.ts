import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {
  public gridData: any[] = [
    {
        ProductID: 1,
        ProductName: 'Chai',
        UnitPrice: 18,
        Category: {
            CategoryID: 1,
            CategoryName: 'Beverages'
        }
    },
    {
      ProductID: 2,
      ProductName: 'Cake',
      UnitPrice: 50,
      Category: {
          CategoryID: 2,
          CategoryName: 'Bakery'
      }
    }
];
  beSubject = new BehaviorSubject(this.gridData)  
  productData$ = this.beSubject.asObservable()
  constructor() { }
  getProduct(id: number){
    let data = this.gridData.find(x => x.ProductID === id)
    this.beSubject.next(data)
  }
  foundProduct(){
    return this.productData$;
  }
}
