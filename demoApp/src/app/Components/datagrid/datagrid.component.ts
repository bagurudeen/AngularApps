import { Component } from '@angular/core';
import { AppserviceService } from 'src/app/Services/appservice.service';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.scss']
})
export class DatagridComponent {
 gridData: any[]=[]

constructor(private appService: AppserviceService){}
  ngOnInit() {

  }
  getProduct(){
  this.appService.foundProduct().subscribe(
      data => {
        this.gridData = data
      }
    )
  }
}
