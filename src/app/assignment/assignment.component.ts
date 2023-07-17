import { Component } from '@angular/core';
import { Cab } from '../cab.model';
import { Driver } from '../driver.model'; 
import { CabService } from '../cab.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent {
  selectedCab: Cab;
  selectedDriver: Driver;
  assignedCab:Cab;
  assignedDriver: Driver;

  constructor(private cabservice: CabService) {}
/*
  assignCab() {
    if (this.selectedCab && this.selectedDriver) {
      this.cabservice.assignCabToDriver(this.selectedCab._id, this.selectedDriver._id);
      this.assignedCab = this.selectedCab;
    }
  }
  assignDriver() {
    if (this.selectedDriver ) {
      this.cabservice.assignDriverToCab(this.selectedDriver._id, this.selectedCab._id);
      this.assignedDriver = this.selectedDriver;
      // Perform any additional actions or notifications
    }
  }*/
  assignCabAndDriver() {
    if (this.selectedCab && this.selectedDriver) {
      this.cabservice.assignCabToDriver(this.selectedCab._id, this.selectedDriver._id);
      this.assignedCab = this.selectedCab;
      this.cabservice.assignDriverToCab(this.selectedDriver._id, this.selectedCab._id);
      this.assignedDriver = this.selectedDriver;
      // Perform any additional actions or notifications
    }
  }

}
