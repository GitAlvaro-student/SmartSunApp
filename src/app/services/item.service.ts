import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Item {
  id?: number;
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = 'https://api.exemplo.com/items';

  constructor(private http: HttpClient) {}

  // Create
  createItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.apiUrl, item);
  }

  // Read
  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl);
  }

  // Update
  updateItem(item: Item): Observable<Item> {
    return this.http.put<Item>(`${this.apiUrl}/${item.id}`, item);
  }

  // Delete
  deleteItem(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
