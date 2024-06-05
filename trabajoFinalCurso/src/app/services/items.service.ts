import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) { }

  public getItems(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/api/items');
  }
}
