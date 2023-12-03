import { Component, OnInit } from '@angular/core';
import {entryList} from '../../../data/entrylist'
// import { DecimalPipe } from '@angular/common';
// import {CommonModule} from '@angular/common'

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css'],
})
export class EntryListComponent implements OnInit {

  constructor() { }
  entries:any = entryList
  ngOnInit() {
    console.log(this.entries)
    // this.entries = entryList;
  }

}
