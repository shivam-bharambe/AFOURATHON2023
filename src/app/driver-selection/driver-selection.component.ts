import { Component,EventEmitter,Output } from '@angular/core';
import { Driver } from '../driver.model';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-driver-selection',
  templateUrl: './driver-selection.component.html',
  styleUrls: ['./driver-selection.component.css']
})
export class DriverSelectionComponent {
  drivers: Driver[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchDrivers();
  }
  
  fetchDrivers(): void {
    this.http.get<Driver[]>('https://cab-management.onrender.com/driver')
      .subscribe({
        next: (drivers: Driver[]) => {
          this.drivers = drivers;
        },
        error: (error: any) => {
          console.log(error);
        }
      });
  }
  
  
  @Output() driverSelected = new EventEmitter<Driver>();

  selectDriver(driver: Driver) {
    this.driverSelected.emit(driver);
  }
}




