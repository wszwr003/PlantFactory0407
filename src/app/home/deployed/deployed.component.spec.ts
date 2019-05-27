import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeployedComponent } from './deployed.component';

describe('DeployedComponent', () => {
  let component: DeployedComponent;
  let fixture: ComponentFixture<DeployedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeployedComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeployedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
