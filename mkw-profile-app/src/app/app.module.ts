import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DecimalPipe } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TripListComponent } from 'src/containers/trips/trip-list/trip-list.component';
import { CreateTripComponent } from 'src/containers/trips/create-trip/create-trip.component';
import { HeaderComponent } from 'src/containers/layout/header/header.component';
import { VehicleCreateBudgetComponent } from 'src/containers/vehicle/vehicle-create-budget/vehicle-create-budget.component';
import { VehicleBudgetListComponent } from 'src/containers/vehicle/vehicle-budget-list/vehicle-budget-list.component';
@NgModule({
  declarations: [
    AppComponent, TripListComponent, CreateTripComponent, HeaderComponent, VehicleCreateBudgetComponent, VehicleBudgetListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DecimalPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
