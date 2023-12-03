import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/containers/layout/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EntryListComponent } from 'src/containers/construction/entry-list/entry-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EntryListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
