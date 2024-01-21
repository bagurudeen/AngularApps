import { Component } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent {

constructor(private http:HttpClient) {  }

  ngOnInit(){
    //observable
    const observer = new Observable(obj => obj.next(Math.random()));

    observer.subscribe(data => console.log(data))
    observer.subscribe(data => console.log(data)) //two different output

    var subject = new Subject();
    subject.subscribe(data => console.log(data))
    subject.subscribe(data => console.log(data))

    subject.next(Math.random())

    const usersData = this.http.get('https://jsonplaceholder.typicode.com/users')
    usersData.subscribe(data => console.log(data))
    usersData.subscribe(data => console.log(data)) //two api calls in network

    const userSubject = new Subject()
    const result = usersData.subscribe(userSubject)
    userSubject.subscribe(data => console.log(data))
    userSubject.subscribe(data => console.log(data))//one api calls in network

    //BehaviorSubject
    console.log('BehaviorSubject');
    
    const behaviourSubject=new BehaviorSubject<number>(10);
    behaviourSubject.subscribe(d => console.log('Initial Value: ', d));

    behaviourSubject.next(200)
    behaviourSubject.subscribe(d => console.log('Last emitted Value: ', d));
    
  }

  sendMessage(data:string){
    console.log(data)
  }

}
