import { Component, OnInit } from '@angular/core';
import { Driver } from '../driver'
import { DriverService } from '../driver.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit {
  driver: Driver[];

  constructor(private driverService: DriverService,
    private router: Router) { }

  ngOnInit(): void {
    this.getDrivers();
  }

  private getDrivers(){
    this.driverService.getDriverList().subscribe(data => {
      this.driver = data;
    });
  }

  driverDetails(id: number){
    this.router.navigate(['driver-details', id]);
  }

  updateDriver(id: number){
    this.router.navigate(['update-driver', id]);
  }

  deleteDriver(id: number){
    this.driverService.deleteDriver(id).subscribe( data => {
      console.log(data);
      this.getDrivers();
    })
  }
}
