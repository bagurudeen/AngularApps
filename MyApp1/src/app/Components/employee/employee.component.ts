import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommunicationService } from 'src/app/Services/communication.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
private subscription!: Subscription;
  constructor(private communicationService: CommunicationService) { 
    this.subscription = this.communicationService.gettriggerMethodObservable().subscribe(() => this.testMethod())
  }

  ngOnInit(): void {
  }

  testMethod(){
    console.log('Method called!')
  }

  ngOnDestroy(): void{
    if(this.subscription)
      this.subscription.unsubscribe()
  }

}
