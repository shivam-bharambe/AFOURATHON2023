import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cab } from './cab.model';

@Injectable({
  providedIn: 'root'
})
export class CabsService {
  private baseURL = 'https://cab-management.onrender.com/cab';
  constructor(private httpClient: HttpClient) { }
 
  getCabList(): Observable<Cab[]> {
    return this.httpClient.get<Cab[]>(this.baseURL);
  }

  createCab(cab: Cab): Observable<Object> {
    return this.httpClient.post(this.baseURL, cab);
  }

  getCabById(id: number): Observable<Cab> {
    return this.httpClient.get<Cab>(`${this.baseURL}/${id}`);
  }

  updateCab(id: number, cab: Cab): Observable<Object> {
    return this.httpClient.patch(`${this.baseURL}/${id}`, cab);
  }

  deleteCab(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  assignCabToDriver(cabId: number, driverId: number): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/${cabId}/assign-driver`, { driverId });
  }
}
