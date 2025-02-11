import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl + '/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(API_URL);
  }

  create(category: any): Observable<any> {
    return this.http.post(API_URL, category);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${API_URL}/${id}`);
  }
}
