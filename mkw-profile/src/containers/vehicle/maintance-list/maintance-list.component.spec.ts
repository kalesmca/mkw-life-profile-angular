/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MaintanceListComponent } from './maintance-list.component';

describe('MaintanceListComponent', () => {
  let component: MaintanceListComponent;
  let fixture: ComponentFixture<MaintanceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintanceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintanceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
