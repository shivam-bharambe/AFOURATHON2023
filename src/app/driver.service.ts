import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Driver } from './driver';
@Injectable({
  providedIn: 'root'
})

export class DriverService {
  unsubscribe() {
    throw new Error('Method not implemented.');
  }
  private baseURL = "https://cab-management.onrender.com/driver";

  constructor(private httpClient:HttpClient) { }

  getDriverList(): Observable<Driver[]>{
    return this.httpClient.get<Driver[]>(`${this.baseURL}`);
  }

  createDriver(driver: Driver): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, driver);
  }

  getDriverId(id: number): Observable<Driver>{
    return this.httpClient.get<Driver>(`${this.baseURL}/${id}`);
  }

  updateDriver(id: number, driver: Driver): Observable<Object>{
    return this.httpClient.patch(`${this.baseURL}/${id}`, driver);
  }

  deleteDriver(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
