import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-test',
  templateUrl: './observable-test.component.html',
  
})
export class ObservableTestComponent implements OnInit { 

  constructor() { }

  observable = new Observable((observer)=>{
    console.log('observable star!');
    setTimeout(() => {observer.next(1)}, 1000);
    setTimeout(() => {observer.next(2)}, 2000);
    setTimeout(() => {observer.next(3)}, 3000);
    setTimeout(() => {observer.next(4)}, 4000);
    setTimeout(() => {observer.next(5)}, 5000);
  })

  ngOnInit(): void {
    this.observable.subscribe(data => {
      console.log(data);
      
    })
  }

}
