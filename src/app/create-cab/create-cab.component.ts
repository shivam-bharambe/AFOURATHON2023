import { Component,OnInit } from '@angular/core';
import { Cab } from '../cab.model';
import { CabsService } from '../cabs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-cab',
  templateUrl: './create-cab.component.html',
  styleUrls: ['./create-cab.component.css']
})
export class CreateCabComponent {
  cab: Cab = new Cab();

  constructor(private cabsService: CabsService, private router: Router) { }

  ngOnInit(): void {
  }

  saveCab() {
    this.cabsService.createCab(this.cab).subscribe({
      next: (data) => {
        console.log(data);
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

  onSubmit() {
    console.log(this.cab);
    this.saveCab();
  }
}
