// web-request.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebRequestService {
  private readonly ROOT_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  get(uri: string): Observable<any> {
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }

  post(uri: string, payload: any): Observable<any> {
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
  }

  patch(uri: string, payload: any): Observable<any> {
    return this.http.patch(`${this.ROOT_URL}/${uri}`, payload);
  }

  delete(uri: string): Observable<any> {
    return this.http.delete(`${this.ROOT_URL}/${uri}`);
  }
}
