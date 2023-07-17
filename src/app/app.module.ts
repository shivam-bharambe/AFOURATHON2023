import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateDriverComponent } from './create-driver/create-driver.component';
import { UpdateDriverComponent } from './update-driver/update-driver.component';
import { DriverDetailsComponent } from './driver-details/driver-details.component';
import { DriverListComponent } from './driver-list/driver-list.component';
import { FormsModule} from '@angular/forms';
import { CabSelectionComponent } from './cab-selection/cab-selection.component';
import { DriverSelectionComponent } from './driver-selection/driver-selection.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { CreateCabComponent } from './create-cab/create-cab.component';
import { UpdateCabComponent } from './update-cab/update-cab.component';
import { CabListComponent } from './cab-list/cab-list.component';
import { CabDetailsComponent } from './cab-details/cab-details.component';
import { ManagementComponent } from './management/management.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateDriverComponent,
    UpdateDriverComponent,
    DriverDetailsComponent,
    DriverListComponent,
    CabSelectionComponent,
    DriverSelectionComponent,
    AssignmentComponent,
    CreateCabComponent,
    UpdateCabComponent,
    CabListComponent,
    CabDetailsComponent,
    ManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
