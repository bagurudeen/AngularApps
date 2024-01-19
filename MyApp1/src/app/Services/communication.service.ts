import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
private triggerMethodSubject = new Subject<void>();

  constructor() { }

  triggerMethod(){
    this.triggerMethodSubject.next();
  }
  gettriggerMethodObservable(){
    return this.triggerMethodSubject.asObservable();
  }
}
