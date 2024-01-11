import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripListComponent } from 'src/containers/trips/trip-list/trip-list.component';
import { VehicleBudgetListComponent } from 'src/containers/vehicle/vehicle-budget-list/vehicle-budget-list.component';
const routes: Routes = [
  { path: 'trip', component: TripListComponent },
  { path: 'vehicle', component: VehicleBudgetListComponent },
  {
    path: '**', redirectTo: 'vehicle'
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
