import { Component,OnInit } from '@angular/core';
import { Driver } from '../driver';
import { ActivatedRoute } from '@angular/router';
import { DriverService } from '../driver.service';
@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.css']
})
export class DriverDetailsComponent implements OnInit {
  id: number
  driver: Driver
  constructor(private route: ActivatedRoute, private driverService: DriverService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.driver = new Driver();
    this.driverService.getDriverId(this.id).subscribe( data => {
      this.driver= data;
    });
  }
}

