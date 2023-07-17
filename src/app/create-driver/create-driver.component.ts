import { Component, OnInit } from '@angular/core';
import { Driver } from '../driver';
import { DriverService } from '../driver.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-driver',
  templateUrl: './create-driver.component.html',
  styleUrls: ['./create-driver.component.css']
})
export class CreateDriverComponent implements OnInit {
  driver: Driver = new Driver();
  constructor(private driverService: DriverService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveDriver(){
    this.driverService.createDriver(this.driver).subscribe( data =>{
      console.log(data);
      this.goToDriverList();
    },
    error => console.log(error));
  }

  goToDriverList(){
    this.router.navigate(['/driver']);
  }
  
  onSubmit(){
    console.log(this.driver);
    this.saveDriver();
  }
}
