import { Component } from '@angular/core';
import { AppserviceService } from 'src/app/Services/appservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  id: number=0;
  
  constructor(private appService: AppserviceService) {
    
    
  }
  getProduct(){
    console.log(this.id);
    this.appService.getProduct(this.id);
    
  }

}
