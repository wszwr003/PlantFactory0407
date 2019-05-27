import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabTabComponent } from './lab-tab.component';

describe('LabTabComponent', () => {
  let component: LabTabComponent;
  let fixture: ComponentFixture<LabTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabTabComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
