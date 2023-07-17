import { Injectable } from '@angular/core';
import { Cab } from './cab.model';
import { Driver } from './driver.model';

@Injectable({
  providedIn: 'root'
})
export class CabService {
  assignedCabs: Map<number, number> = new Map<number, number>();

 
  assignCabToDriver(cabId: number, driverId: number) {
    this.assignedCabs.set(driverId, cabId);
  }
  assignDriverToCab(driverId: number, cabId: number) {
    this.assignedCabs.set(driverId, cabId);
  }

  getCabForDriver(driverId: number): number | undefined {
    return this.assignedCabs.get(driverId);
  }
  getDriverForCab(cabId: number): number | undefined {
    return this.assignedCabs.get(cabId);
  }
  

}
