import { Component,OnInit } from '@angular/core';
import { Cab } from '../cab.model';
import { CabsService } from '../cabs.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cab-list',
  templateUrl: './cab-list.component.html',
  styleUrls: ['./cab-list.component.css']
})
export class CabListComponent  implements OnInit {
  cabs: Cab[];

  constructor(private cabService: CabsService, private router: Router) { }

  ngOnInit(): void {
    this.getCabs();
  }

  private getCabs() {
    this.cabService.getCabList().subscribe(data => {
      this.cabs = data;
    });
  }

  cabDetails(id: number) {
    this.router.navigate(['cab-details', id]);
  }

  updateCab(id: number) {
    this.router.navigate(['update-cab', id]);
  }

  deleteCab(id: number) {
    this.cabService.deleteCab(id).subscribe(data => {
      console.log(data);
      this.getCabs();
    });
  }
}
