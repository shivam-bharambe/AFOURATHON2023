import { Component,OnInit,OnDestroy } from '@angular/core';
import { Driver } from '../driver';
import { DriverService } from '../driver.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-update-driver',
  templateUrl: './update-driver.component.html',
  styleUrls: ['./update-driver.component.css']
})
export class UpdateDriverComponent implements OnInit,OnDestroy {
  id: number;
  driver: Driver = new Driver();
  private subscription: Subscription;

  constructor(private driverService: DriverService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.subscription =this.driverService.getDriverId(this.id).subscribe({
      next: (data) => {
        this.driver = data;
      },
      error: (error) => {
        console.log(error);
    }
     });
      
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  

  onSubmit(){
    this.subscription = this.driverService.updateDriver(this.id, this.driver).subscribe({
      next: () => {
        this.goToDriverList();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  goToDriverList(){
    this.router.navigate(['/driver']);
  }
}
