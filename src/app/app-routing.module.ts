import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverDetailsComponent } from './driver-details/driver-details.component';
import { DriverListComponent } from './driver-list/driver-list.component';
import { CreateDriverComponent } from './create-driver/create-driver.component';
import { UpdateDriverComponent } from './update-driver/update-driver.component';
import { CreateCabComponent } from './create-cab/create-cab.component';
import { CabDetailsComponent } from './cab-details/cab-details.component';
import { CabListComponent } from './cab-list/cab-list.component';
import { UpdateCabComponent } from './update-cab/update-cab.component';
import { ManagementComponent } from './management/management.component';
import { AssignmentComponent } from './assignment/assignment.component';
const routes: Routes = [
 // {
  // path: '',
  // component: ManagementComponent,
  //children:[
  {path: 'driver', component: DriverListComponent},
  {path: 'create-driver', component: CreateDriverComponent},
  //{path: 'drivers', redirectTo: 'drivers', pathMatch: 'full'},
  {path: 'update-driver/:id', component: UpdateDriverComponent},
  {path: 'driver-details/:id', component: DriverDetailsComponent},
  {path: 'cab', component: CabListComponent},
  {path: 'create-cab', component: CreateCabComponent},
  //{path: 'cabs', redirectTo: 'cabs', pathMatch: 'full'},
  {path: 'update-cab/:id', component: UpdateCabComponent},
  {path: 'cab-details/:id', component: CabDetailsComponent},
  {path: 'assignment',component:AssignmentComponent},
  {path: 'management',component:ManagementComponent}
  ];
  // 
//},
//];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
