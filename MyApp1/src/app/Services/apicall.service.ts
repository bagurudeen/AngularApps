import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApicallService<T> {
  fake_url: string = environment.FAKE_API_URL;

  constructor(private http: HttpClient) { }

  getAll(url: string): Observable<T[]> {
    return this.http.get<T[]>(this.fake_url + url);
  }
 
  getOne(url:string):Observable<T> {
    return this.http.get(this.fake_url + url) as Observable<T>;
  }

}
