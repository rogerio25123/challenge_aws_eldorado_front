import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


const API_URL = environment.apiUrl + '/devices';


@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(API_URL);
  }

  create(device: any): Observable<any> {
    return this.http.post(API_URL, device);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${API_URL}/${id}`);
  }
}
