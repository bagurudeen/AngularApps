import { Component, OnInit } from '@angular/core';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor } from '@progress/kendo-data-query';
import { Observable } from 'rxjs';
import { ApicallService } from 'src/app/Services/apicall.service';
import { ProductServiceService } from 'src/app/Services/product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public gridItems: Observable<GridDataResult> | undefined;
  public pageSize: number = 10;
  public skip: number = 0;
  public sortDescriptor: SortDescriptor[] = [];
  public filterTerm: number | null = null;

  constructor(private productService: ProductServiceService) {
    this.loadGridItems();
   }

  ngOnInit(): void {
    this.loadGridItems();
  }
  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.loadGridItems();
  }

  public handleSortChange(descriptor: SortDescriptor[]): void {
      this.sortDescriptor = descriptor;
      this.loadGridItems();
  }

  // getProducts(){
  //   this.gridItems = this.productService.getProducts.subscribe({
  //     next:(data) => {
  //       console.log(data)
  //     }
      
  //   })
  // }
  private loadGridItems(): void {
    this.gridItems = this.productService.getProducts(
      this.skip,
      this.pageSize,
      this.sortDescriptor,
      this.filterTerm
    );
}

}
