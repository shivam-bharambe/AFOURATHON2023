import { Component,OnInit,OnDestroy } from '@angular/core';
import { Cab } from '../cab.model';
import { CabsService } from '../cabs.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-update-cab',
  templateUrl: './update-cab.component.html',
  styleUrls: ['./update-cab.component.css']
})
export class UpdateCabComponent implements OnInit,OnDestroy {
  _id: number;
  cab: Cab = new Cab();
  private subscription: Subscription;

  constructor(
    private cabService: CabsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._id = this.route.snapshot.params['id'];

    this.subscription = this.cabService.getCabById(this._id).subscribe({
      next: (data) => {
        this.cab = data;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    this.subscription = this.cabService.updateCab(this._id, this.cab).subscribe({
      next: () => {
        this.goToCabList();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  goToCabList() {
    this.router.navigate(['/cab']);
  }
}

