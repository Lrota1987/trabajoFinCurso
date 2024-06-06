import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  server = 'http://localhost:8081';

  constructor(private http: HttpClient) { }

  public getItems(): Observable<any> {
    return this.http.get<any>(`${this.server}/downloadItems`);
  }

  public getItemById(id: string): Observable<Item> {
    return this.http.get<Item>(`${this.server}/downloadItems/${id}`);
  }

  public uploadItem(title: string, image: File, description: string): Observable<Object> {
    const form = new FormData();
    form.append('title', title);
    form.append('image', image, 'form-data');
    form.append('description', description);

    return this.http.post<Object>(`${this.server}/uploadFile`, form);
  }
}
