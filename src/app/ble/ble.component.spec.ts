import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BleComponent } from './ble.component';

describe('BleComponent', () => {
  let component: BleComponent;
  let fixture: ComponentFixture<BleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BleComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
