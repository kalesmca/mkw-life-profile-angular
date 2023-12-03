import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryListComponent } from 'src/containers/construction/entry-list/entry-list.component';
import { MaintanceListComponent } from 'src/containers/vehicle/maintance-list/maintance-list.component';
import { PageNotFoundComponent } from 'src/containers/pageNotFound/pageNotFound.component';
const routes: Routes = [
  {path: 'construction', component: EntryListComponent},
{path: 'vehicle', component: MaintanceListComponent},
{ path: '',   redirectTo: '/construction', pathMatch: 'full' },
{ path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
