import { Component,EventEmitter,Output,OnInit } from '@angular/core';
import { Cab } from '../cab.model';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-cab-selection',
  templateUrl: './cab-selection.component.html',
  styleUrls: ['./cab-selection.component.css']
})
export class CabSelectionComponent {
  cabs: Cab[] = [];
  @Output() cabSelected = new EventEmitter<Cab>();

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchCabs();
  }

  fetchCabs() {
    this.http.get<Cab[]>("https://cab-management.onrender.com/cab").subscribe({
      next: (response) => {
        this.cabs = response;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  

 

  selectCab(Cab : Cab) {
    this.cabSelected.emit(Cab);
  }
}
