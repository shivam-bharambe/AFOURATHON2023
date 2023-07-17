import { Component,OnInit } from '@angular/core';
import { Cab } from '../cab.model';
import { ActivatedRoute } from '@angular/router';
import { CabsService } from '../cabs.service';
@Component({
  selector: 'app-cab-details',
  templateUrl: './cab-details.component.html',
  styleUrls: ['./cab-details.component.css']
})
export class CabDetailsComponent implements OnInit {
  _id: number;
  cab: Cab;

  constructor(private route: ActivatedRoute, private cabService: CabsService) { }

  ngOnInit(): void {
    this._id = this.route.snapshot.params['id'];

    this.cab = new Cab();
    this.cabService.getCabById(this._id).subscribe(data => {
      this.cab = data;
    });
  }
}
