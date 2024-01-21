import { Injectable } from '@angular/core';
import { DataResult, orderBy,process, SortDescriptor } from '@progress/kendo-data-query';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../Models/product.model';
import { ApicallService } from './apicall.service';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private apiService: ApicallService<Product>) { }
  public getProducts(
    skip: number,
    pageSize: number,
    sortDescriptor: SortDescriptor[],
    filterTerm: number | null
  ): Observable<DataResult> {
    let data;

    return this.apiService.getAll('/products')
    .pipe(map((products : Product[]) => {
      console.log(products);
      
        if (filterTerm) {
          data = process(orderBy(products, sortDescriptor), {
              filter: {
                  logic: 'and',
                  filters: [
                      {
                          field: 'CategoryID',
                          operator: 'eq',
                          value: filterTerm
                      }
                  ]
              }
          }).data;
      } else {
          data = orderBy(products, sortDescriptor);
      }
      return {
          data: data.slice(skip, skip + pageSize),
          total: data.length
      };
    }
    ))
    

      
    
    
}
}
